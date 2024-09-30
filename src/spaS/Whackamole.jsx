import React, { useEffect, useRef, useState } from 'react'
import style from '../spaScss/Whackamole.module.css'
import hole from '../spaSstatic/hole.png'
import mole from '../spaSstatic/mole.png'


const starting = [hole, hole, hole, hole, hole, hole, hole, hole, hole]

const Whackamole = () => {
    const myref = useRef(null)

    const [gameStatus, setGameStatus] = useState(true)

    const [imagesList, setImagesList] = useState(starting)


    const [score, setScore] = useState(0)


    function nameGrabber(path) {
        return path.split('/').pop().split('.').shift();
    }

    function handleClick2(status) {
        if (nameGrabber(status) === 'mole') {
            setScore((prev) => prev + 1)
        }
        else {
            return
        }
        console.log(score)
    }


    function resumeGame() {
        myref.current = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * imagesList.length);

            const newgrid = [...imagesList]
            newgrid[randomIndex] = mole

            setImagesList(newgrid)
        }, 1000);
    }


    function pausegame() {
        clearInterval(myref.current)
        setImagesList(starting)
    }


    useEffect(() => {
        resumeGame()
        return () => clearInterval(myref.current)

    }, [])


    return (
        <div className={style.hero} style={{ backgroundColor: 'black' }}>
            <h1 style={{ backgroundColor: 'black', color: 'red', margin: '0px', textAlign: 'center' }}>score: {score}</h1>
            <button style={{ backgroundColor: 'black', color: 'red' }} onClick={() => { setGameStatus((prev) => { return !prev }); gameStatus ? pausegame() : resumeGame() }}>{gameStatus ? 'pause' : 'resume'}</button>
            <div className={style.wrapper}>
                {
                    imagesList.map((eachImage, i) => {
                        return <div style={{ width: '80%', height: '80%', display: 'flex', justifyContent: 'center' }}>
                            <img className={style.wam} key={i} src={eachImage} onClick={() => { handleClick2(eachImage) }} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Whackamole