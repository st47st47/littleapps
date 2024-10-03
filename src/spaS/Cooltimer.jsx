import React, { useEffect, useRef, useState } from 'react'
import styles from '../spaScss/Cooltimer.module.css'

const Cooltimer = () => {

    const [numb, setNumb] = useState('')
    const [gol, setGol] = useState('')

    const [timeLeft, setTimeLeft] = useState(numb)

    const myref = useRef(null)

    function strt() {
        clearInterval(myref.current)
        myref.current = setInterval(() => {
            setTimeLeft((prev) => {
                return prev - 1
            })
        }, 1000);
    }

    if (timeLeft == 0) {
        clearInterval(myref.current)
    }


    useEffect(() => {
        setGol(Number(numb) / 4)
        setTimeLeft(numb)
    }, [numb])


    console.log(timeLeft)

    return (
        <div className={styles.hero} style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className={styles.myclock}>
                <h1 className={styles.timerh1}>{timeLeft}</h1>

                <div className={styles.topedge} style={{ width: `${(timeLeft - (numb - gol)) * (800 / numb)}px` }}></div>
                <div className={styles.leftedge} style={{ height: timeLeft < 3 * (numb / 4) && `${(timeLeft - (numb - (gol * 2))) * (800 / numb)}px` }}></div>
                <div className={styles.bottomedge} style={{ width: timeLeft < 2 * (numb / 4) && `${(timeLeft - (numb - (gol * 3))) * (800 / numb)}px` }}></div>
                <div className={styles.rightedge} style={{ height: timeLeft < 1 * (numb / 4) && `${(timeLeft - (numb - (gol * 4))) * (800 / numb)}px` }} ></div>
            </div >
            <br /><br /><br />

            <input type="text" placeholder='time in seconds....' style={{ backgroundColor: 'black', color: 'red' }} value={numb} onChange={(e) => { setNumb(Number(e.target.value)) }} />

            <button className={styles.ctbtn} onClick={strt}>start timer</button>
            <button className={styles.ctbtn} onClick={() => { setTimeLeft(numb); clearInterval(myref.current) }}>reset</button>

        </div>
    )
}


export default Cooltimer