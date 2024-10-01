import React, { useState } from 'react'
import styles from './Starrating.module.css'

import transp from '../src/spaSstatic/transpstar.png'
import gold from '../src/spaSstatic/goldstar.png'

const startarray = new Array(5).fill('').map((each, idx) => { return { idee: idx, content: transp } })

const StarRating = () => {

    const [stars, setStars] = useState(startarray)

    function clk(argu) {
        setStars(
            startarray.map((each) => {
                return each.idee <= argu ? { ...each, content: gold } : each
            })
        )
    }

    return (
        <div className={styles.starftr} >
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