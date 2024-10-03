import React, { useRef, useState } from 'react'
import '../spaScss/AnalogClock.css'

const AnalogClock = () => {
    const [time, setTime] = useState({ hours: 11, minutes: 59, seconds: 55 })

    const myref = useRef(null)

    function strt() {
        clearInterval(myref.current)
        myref.current = setInterval(() => {
            setTime((prev) => {
                return {
                    ...prev, seconds: prev.seconds == 59 ? 0 : prev.seconds + 1,
                    minutes: prev.seconds == 59 ? prev.minutes == 59 ? 0 : prev.minutes + 1 : prev.minutes,
                    hours: prev.minutes == 59 && prev.seconds == 59 ? prev.hours == 11 ? 0 : prev.hours + 1 : prev.hours
                }
            })
        }, 1000);
    }




    return (
        <div className="hero" style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ margin: '0px', color: 'chartreuse' }}>time: {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}</h1>
            <div className='myclock'>
                {
                    Array(12).fill('').map((each, idx) => { return idx == 0 ? 12 : idx % 13 }).map((each, idx) => { return <div style={{ transform: `rotate(${idx * 30}deg)` }} className='spoke'>{each}</div> })
                }
                <div style={{ transform: `rotate(${(time.hours) * 30}deg)` }} className="hour"></div>
                <div style={{ transform: `rotate(${(time.minutes) * 6}deg)` }} className="minute"></div>
                <div style={{ transform: `rotate(${(time.seconds) * 6}deg)` }} className="second"></div>
            </div>
            <button className='startclock' onClick={strt}>start clock</button>
        </div>
    )
}

export default AnalogClock
