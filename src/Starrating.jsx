import React, { useState } from 'react'
import styles from './Starrating.module.css'

import transp from '../src/spaSstatic/transpstar.png'
import gold from '../src/spaSstatic/goldstar.png'

const startarray = new Array(5).fill('').map((each, idx) => { return { idee: idx, content: transp } })

const StarRating = () => {
    const [here, setHere] = useState(true)

    const [stars, setStars] = useState(startarray)

    function clk(argu) {
        setStars(
            startarray.map((each) => {
                return each.idee <= argu ? { ...each, content: gold } : each
            })
        )
    }

    return (
        <div className={styles.starftr} style={{ right: here ? '0px' : '100vw' }}>
            <button className={styles.ftrbtn} onClick={() => { setHere((prev) => { return !prev }) }} style={{ right: here ? '20px' : '-30px' }}>{here ? 'x' : 'o'}</button>
            <h1>rating</h1>
            <div className={styles.card}>
                {
                    stars.map((each) => {
                        return <img src={each.content} onClick={() => { clk(each.idee) }} />
                    })
                }
            </div>
        </div>
    )
}

export default StarRating