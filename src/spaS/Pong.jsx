import React, { useEffect, useRef, useState } from 'react'
import '../spaScss/Pong.css'
import boopSound from '../spaSstatic/boop.mp3'
import buzzerSound from '../spaSstatic/buzzer.mp3'

const boardHeight = 0.85 * window.innerHeight

const startingPosition = { x: 0.5 * window.innerWidth, y: 0.49 * boardHeight }
const padHeight = 200
const wAndH = 0.05 * window.innerWidth

const boopp = new Audio(boopSound)
const buzzerr = new Audio(buzzerSound)

const Pong = () => {
    const [pOneTop, setPOneTop] = useState(0)
    const [pTwoTop, setPTwoTop] = useState(0)

    const [ballPosition, setBallPosition] = useState(startingPosition)

    const directionRef = useRef({ x: -1, y: -1 })
    const gameIntervalRef = useRef(null)

    const gameStatus = useRef(false)
    const [resetStatus, setResetStatus] = useState(true)

    const [scores, setScores] = useState({ pOne: 0, pTwo: 0 })

    function handlePOnePress(e) {

        if (e.key === 's') {
            if (pOneTop < boardHeight - padHeight) {
                setPOneTop((prev) => { return prev + 40 })
            }
        }

        if (e.key === 'w') {
            if (pOneTop !== 0) {
                setPOneTop((prev) => { return prev - 40 })
            }
        }

        if (e.key === 'k') {
            if (pTwoTop < boardHeight - padHeight) {
                setPTwoTop((prev) => { return prev + 40 })
            }
        }

        if (e.key === 'i') {
            if (pTwoTop !== 0) {
                setPTwoTop((prev) => { return prev - 40 })
            }
        }

    }

    useEffect(() => {
        if (ballPosition.x <= 0) {
            if (ballPosition.y > pOneTop && ballPosition.y < pOneTop + padHeight) {
                directionRef.current.x = 1
                boopp.play()
            }
            else {
                clearInterval(gameIntervalRef.current)
                setResetStatus(false)
                setScores((prev) => { return { ...prev, pTwo: prev.pTwo + 1 } })
                buzzerr.play()
            }
        }

        if (ballPosition.x >= window.innerWidth) {
            if (ballPosition.y > pTwoTop && ballPosition.y < pTwoTop + padHeight) {
                directionRef.current.x = -1
                boopp.play()
            }
            else {
                clearInterval(gameIntervalRef.current)
                setResetStatus(false)
                setScores((prev) => { return { ...prev, pOne: prev.pOne + 1 } })
                buzzerr.play()
            }
        }

        if (ballPosition.y <= 0) {
            directionRef.current.y = 1
        }

        if (ballPosition.y >= boardHeight) {
            directionRef.current.y = -1
        }
    }, [ballPosition])



    function resetGame() {
        setBallPosition(startingPosition)
        setResetStatus(true)
        gameStatus.current = false
    }


    function startGame() {
        gameStatus.current = true
        gameIntervalRef.current = setInterval(() => {
            setBallPosition((prev) => { return { ...prev, x: prev.x + (directionRef.current.x) * 5, y: prev.y + (directionRef.current.y) * 5 } })
        }, 10)
    }







    useEffect(() => {
        window.addEventListener('keydown', handlePOnePress)

        return () => { window.removeEventListener('keydown', handlePOnePress) }
    }, [pOneTop, pTwoTop])




    return (
        <div className='pongHero'>
            <div className='playerOne' style={{ top: `${pOneTop}px`, height: `${padHeight}px` }}></div>
            <div className='playerTwo' style={{ top: `${pTwoTop}px`, height: `${padHeight}px` }}></div>

            <div className='ball' style={{ top: `${ballPosition.y}px`, left: `${ballPosition.x}px` }}></div>

            {
                !gameStatus.current && <button onClick={startGame} className='playButton'>play</button>
            }

            {
                !resetStatus && <div className='resetAndScores' style={{ width: `${wAndH}px`, height: `${wAndH}px`, top: `calc(50% - ${0.5 * wAndH}px)`, left: `calc(50% - ${0.5 * wAndH}px` }}>
                    <button onClick={resetGame}>Reset ball</button>
                    <p>p1 score: {scores.pOne}</p>
                    <p>p2 score: {scores.pTwo}</p>
                </div>
            }

        </div >
    )
}

export default Pong