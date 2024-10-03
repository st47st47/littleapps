
import React, { useEffect, useRef, useState } from 'react'
import styles from '../spaScss/Typespeed.module.css'

const phrase = 'The sun dipped below the horizon, casting a warm golden glow across the landscape. As the day transitioned into twilight, the sky transformed into a canvas of vibrant hues—deep oranges, soft pinks, and rich purples blending seamlessly together. The gentle rustle of leaves in the evening breeze created a soothing melody, while the distant chirping of crickets signaled the arrival of night. In this serene moment, time seemed to stand still, inviting reflection and a sense of peace that enveloped the world in a comforting embrace.'
const Typingspeed = () => {

    const myref = useRef(null)


    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(5)

    const [letters, setLetters] = useState(
        phrase.split('').map((each, idx) => {
            return { idee: idx, let: each, status: false }
        })
    )

    const [cursor, setCursor] = useState(0)



    function strt() {
        myref.current = setInterval(() => {
            setTimeLeft((prev) => { return prev - 1 })
        }, 1000);
    }


    function userpressed(e) {
        if (e.key == letters[cursor].let) {
            setLetters(
                letters.map((each) => {
                    return each.idee <= cursor ? { ...each, status: true } : each
                })
            )
            setCursor(cursor + 1)

            setScore(score + 1)

        }
    }


    useEffect(() => {
        if (timeLeft > 0) {
            window.addEventListener('keydown', userpressed)
        }

        return () => { window.removeEventListener('keydown', userpressed) }
    }, [cursor])



    if (timeLeft == 0) {
        clearInterval(myref.current)
    }





    return (
        <div className={styles.hero}>


            <div style={{ width: '60%', fontSize: '2em' }}>
                {
                    letters.map((each) => {
                        return <span style={{ color: each.status && 'green' }}>{each.let}</span>
                    })
                }
            </div>
            <br />

            <button className={styles.strt} onClick={strt} disabled={timeLeft < 5}>start test</button>


            <h1>time left: {timeLeft}</h1>

            {
                timeLeft == 0 && <h1>final score: {score / 5} letters per second</h1>
            }
        </div>
    )
}

export default Typingspeed
