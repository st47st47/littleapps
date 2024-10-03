import React, { useRef, useState } from 'react'
import styles from '../spaScss/Whackamole.module.css'

import molepic from '../spaSstatic/mmole.png'
import holepic from '../spaSstatic/hhole.png'

const startArray = new Array(9).fill(holepic)

const Whackamole = () => {
    const timeRef = useRef(null)
    const [inProgress, setInProgress] = useState(false)

    const [holesAndMoles, setHolesAndMoles] = useState(
        startArray
    )

    const [score, setScore] = useState(0)


    function play() {
        setInProgress(true)
        clearInterval(timeRef.current)
        timeRef.current = setInterval(() => {
            setHolesAndMoles(
                startArray.map((each, idx) => {
                    return idx == Math.floor(Math.random() * 10) % 9 ? molepic : holepic
                })
            )
        }, 1000)
    }
    function pause() {
        clearInterval(timeRef.current)
        setInProgress(false)
    }


    function hndlclk(argu) {
        if (inProgress) {
            if (argu == molepic) {
                setScore((prev) => { return prev + 1 })
            }
        }
    }


    return (
        <>
            <div className={styles.wamhero}>
                <h1 className={styles.wamh1}>score: {score}</h1>
                <button onClick={() => { inProgress ? pause() : play() }} className={styles.plpa}>{inProgress ? 'pause' : 'play'}</button>
                <div className={styles.wamboard}>
                    {
                        holesAndMoles.map((each) => {
                            return <div style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
                                <img src={each} onClick={() => { hndlclk(each) }} width='100%' height='100%' />
                            </div>
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Whackamole