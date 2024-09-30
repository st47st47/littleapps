import React, { useState } from 'react'
import styles from '../spaScss/Bubblesblowpop.module.css'

const Bubblesblowpop = () => {
    const [bubbles, setBubbles] = useState([])
    const [event, setEvent] = useState(null)

    function handleclick(e) {
        if (event === 'blow') {
            setBubbles((prev) => {
                return [...prev, { x: e.clientX, y: e.clientY }]
            })
        }
        else if (event === 'pop') {
            setBubbles((prev) => {
                return prev.filter(bubble =>
                    Math.abs(e.clientX - bubble.x) > 20 ||
                    Math.abs(e.clientY - bubble.y) > 20
                );
            });
        }
    }



    function btnone() {
        setEvent('blow')
    }
    function btntwo() {
        setEvent('pop')
    }






    return (
        <div className={styles.hero} style={{ backgroundColor: 'black' }}>
            <div style={{ textAlign: 'center', height: '10%' }}>
                <button onClick={btnone} style={{ backgroundColor: 'black', color: event == 'blow' ? 'red' : 'white' }}>blow bubbles</button>
                <button onClick={btntwo} style={{ backgroundColor: 'black', color: event == 'pop' ? 'red' : 'white' }}>pop bubbles</button>
            </div>
            <div
                style={{ width: '100vw', height: '90%' }}
                onClick={handleclick}
            >
                {bubbles.map((each, index) => {
                    return <div
                        style={{ width: '20px', height: '20px', borderRadius: '50%', position: 'absolute', top: `${each.y}px`, left: `${each.x}px`, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', color: 'white', background: 'linear-gradient(135deg, #85e3ff, #1e90ff)' }}
                        onClick={() => { handleclick(e, index) }}
                    >
                    </div>
                })}
            </div>
        </div>
    )
}


export default Bubblesblowpop

