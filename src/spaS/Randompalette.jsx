import React, { useState } from 'react'
import styles from '../spaScss/Randompalette.module.css'

const inpstyles = {
    'width': '40%',
    'border': '3px solid black'
}
const gridstyles = {
    'width': '100%',
    'height': '100%',
    'border': '1px solid black',
    'display': 'grid',
    'columnGap': '7px',
    'gridTemplateColumns': '1fr',
}

const Randompalette = () => {
    const [inpu, setInpu] = useState({ howmany: '', brightness: '' })
    const [finalGridStyles, setFinalGridStyles] = useState(gridstyles)
    const [colorsList, setColorsList] = useState([])

    function clk() {
        setFinalGridStyles(
            { ...gridstyles, 'gridTemplateColumns': `repeat(${inpu.howmany}, 1fr)` }
        )


        setColorsList(
            Array(Number(inpu.howmany)).fill('')
                .map((each) => {
                    return Array(3).fill('').map((each) => { return Math.floor(Math.random() * 1000) % 256 })
                })
        )
    }


    function clpbrd(argu) {
        navigator.clipboard.writeText(
            `rgba(${[...argu, inpu.brightness]})`
        )
    }


    console.log(colorsList)

    return (
        <div className={styles.hero} >
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <input style={inpstyles} type="number" placeholder='number of colors' value={inpu.howmany} onChange={(e) => { setInpu((prev) => { return { ...prev, howmany: e.target.value } }) }} />
                <input style={inpstyles} type="number" placeholder='brightness (from 0 to 1)' value={inpu.brightness} onChange={(e) => { setInpu((prev) => { return { ...prev, brightness: e.target.value } }) }} />
                <button onClick={clk}>create</button>
            </div>
            <br /><br />
            <div style={finalGridStyles}>
                {
                    colorsList.map((each) => {
                        return <div title='copy rgba to clipboard' onClick={() => { clpbrd(each) }} style={{ wordBreak: 'break-all', width: `${1000 / colorsList.length}%`, cursor: 'pointer', backgroundColor: `rgba(${[...each, Number(inpu.brightness)]})` }}>{each}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Randompalette