import React, { useEffect, useState } from 'react';
import styles from '../spaScss/Hangman.module.css';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const answer = 'queen';

const Hangman = () => {
    const [win, setWin] = useState(false);
    const [livesLeft, setLivesLeft] = useState(5);
    const [answerStatus, setAnswerStatus] = useState(
        answer.split('').map(letter => ({ letter, visibility: false }))
    );
    const [lettersLeft, setLettersLeft] = useState(
        letters.map(value => ({ value, disabled: false }))
    );

    const letterClick = (arg) => {
        const isCorrect = answer.includes(arg);
        setAnswerStatus(prev => prev.map(each =>
            each.letter === arg ? { ...each, visibility: true } : each
        ));
        setLivesLeft(prev => isCorrect ? prev : prev - 1);
        setLettersLeft(prev => prev.map(each =>
            each.value === arg ? { ...each, disabled: true } : each
        ));
    };

    const clickReset = () => {
        setWin(false);
        setLivesLeft(5);
        setAnswerStatus(answer.split('').map(letter => ({ letter, visibility: false })));
        setLettersLeft(letters.map(value => ({ value, disabled: false })));
    };

    useEffect(() => {
        if (answerStatus.every(each => each.visibility)) {
            setWin(true);
        }
    }, [answerStatus]);

    return (
        <div className={styles.hero}>
            <div>
                {lettersLeft.map(({ value, disabled }) => (
                    <button
                        key={value}
                        className={styles.ltrbtn}
                        onClick={() => letterClick(value)}
                        disabled={disabled}
                    >
                        {value}
                    </button>
                ))}
            </div>

            {livesLeft > 0 && !win ? (
                <div>
                    <h1 className={styles.livesText}>Lives left: {livesLeft}</h1>
                    <div className={styles.answer}>
                        {answerStatus.map(({ letter, visibility }) => (
                            <div key={letter}>
                                <p className={styles.char} style={{ display: visibility ? 'block' : 'none' }}>
                                    {letter}
                                </p>
                                <div className={styles.underlines}></div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.gameOver}>
                    <h1>Game Over</h1>
                    <h1>{win ? 'You Won!' : 'You Lost'}</h1>
                    <button className={styles.playAgainButton} onClick={clickReset}>
                        Play Again?
                    </button>
                </div>
            )}
        </div>
    );
};

export default Hangman;
