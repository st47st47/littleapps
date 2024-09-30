import React, { useState } from 'react'
import styles from './Baseforlilapps.module.css'

import { Outlet, NavLink } from 'react-router-dom'

const Baseforlilapps = () => {
    const [inside, setInside] = useState(true)
    return (
        <>
            <button className={styles.navbtn} onClick={() => { setInside((prev) => { return !prev }) }}>{inside ? 'O' : 'X'}</button>
            <nav className={styles.hero} style={{ left: inside ? '-100%' : '0px' }}>
                <h4><NavLink to='typewriter' className={styles.navlinks}>typewriter</NavLink></h4>
                <h4><NavLink to='hangman' className={styles.navlinks}>hangman</NavLink></h4>
                <h4><NavLink to='whackamole' className={styles.navlinks}>whack a mole</NavLink></h4>
                <h4><NavLink to='reactiontime' className={styles.navlinks}>reaction time</NavLink></h4>
                <h4><NavLink to='typespeed' className={styles.navlinks}>type speed</NavLink></h4>
                <h4><NavLink to='randompalette' className={styles.navlinks}>random palette generator</NavLink></h4>
                <h4><NavLink to='analogclock' className={styles.navlinks}>analog clock</NavLink></h4>
                <h4><NavLink to='cooltimer' className={styles.navlinks}>timer</NavLink></h4>
                <h4><NavLink to='bubbles' className={styles.navlinks}>bubbles</NavLink></h4>
                <h4><NavLink to='mappins' className={styles.navlinks}>map pins</NavLink></h4>
            </nav>

            <Outlet />
        </>
    )
}

export default Baseforlilapps


