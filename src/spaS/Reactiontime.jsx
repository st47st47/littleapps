import React, { useRef, useState } from 'react';
import styles from '../spaScss/Reactiontime.module.css';

const ReactionTime = () => {
    const [boxStyle, setBoxStyle] = useState({ width: '400px', height: '400px', backgroundColor: 'red' });
    const [exposed, setExposed] = useState(false);
    const [score, setScore] = useState(0);
    const myref = useRef(null);

    function ready() {
        setTimeout(() => {
            setBoxStyle({ ...boxStyle, backgroundColor: 'green' });
            setExposed(true);
            myref.current = setInterval(() => {
                setScore((prev) => prev + 1);
            }, 1);
        }, Math.random() * 5000);
    }

    function clicktwo() {
        clearInterval(myref.current);
    }

    function restart() {
        clearInterval(myref.current);
        setBoxStyle({ width: '400px', height: '400px', backgroundColor: 'red' });
        setExposed(false);
        setScore(0);
    }

    return (
        <div className={styles.hero} >
            <div className={styles.container} >
                {!exposed ? (
                    <div className={styles.readyContainer}>
                        <div className={styles.box} style={boxStyle}></div>
                        <button className={styles.button} onClick={ready}>Click when ready</button>
                    </div>
                ) : (
                    <div className={styles.gameContainer}>
                        <div className={styles.box} style={boxStyle} onClick={clicktwo}>
                            <h1 style={{ fontSize: '4em' }}>CLICK!!!</h1>
                        </div>
                        <h1 className={styles.scoreText}>You took {score} milliseconds</h1>
                        <button className={styles.button} onClick={restart}>Play Again</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReactionTime;
