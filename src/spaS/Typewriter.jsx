import React, { useEffect, useRef, useState } from 'react';
import styles from '../spaScss/Typewriter.module.css';


const Typewriter = () => {
    const [uip, setUip] = useState('');
    const [res, setRes] = useState('');
    const [speed, setSpeed] = useState('');

    const myref1 = useRef();

    function handleclick() {
        console.log(speed)
        clearTimeout(myref1.current);
        myref1.current = setTimeout(() => {
            setRes((prev) => { return [...prev, uip[0]] });
            setUip((prev) => { return prev.slice(1) });
        }, speed);
    }

    useEffect(() => {
        if (res.length > 0) {
            handleclick();
        }
    }, [uip]);

    return (
        <div className={styles.hero} style={{ backgroundColor: 'black' }}>
            <div className={styles.container}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder='text....'
                    value={uip}
                    onChange={(e) => { setUip(e.target.value); setRes('') }}
                />
                <select className={styles.select} onChange={(e) => { setSpeed(e.target.value) }}>
                    <option disabled selected>select speed</option>
                    <option value='1000'>1char/s</option>
                    <option value='500'>2char/s</option>
                    <option value='333'>3char/s</option>
                    <option value='250'>4char/s</option>
                    <option value='100'>10char/s</option>
                </select>
                <button className={styles.button} onClick={handleclick}>start type writer</button>
                <h1 className={styles.output}>{res} {res && '|'}</h1>
            </div>
        </div>
    );
}

export default Typewriter;
