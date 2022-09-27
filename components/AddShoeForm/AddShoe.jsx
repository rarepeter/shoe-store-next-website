import React, { useState } from 'react'
import styles from './AddShoe.module.css'

export default function AddShoe() {
    const [shoe, setShoe] = useState({
        colors: [
            {
                key: 1,
                colorName: 'a',
                colorCode: '',
                availableSizes: [{ sizeNumber: '', sizeStock: '' }]
            }
        ]
    })

    console.log(shoe)

    return (
        <form>
            {shoe.colors.map((item, index) => {
                return (
                    <input key={item.key} type="text" value={item.colorName} onChange={e => setShoe(prevState => {
                        let colors = [...prevState.colors]
                        colors[index].colorName = e.target.value
                        return { ...prevState, colors }
                    })} />
                )
            })}
            <button onClick={e => setShoe(prevState => {
                e.preventDefault()
                const newArray = [...prevState.colors, { key: 2, colorName: '', colorCode: '', availableSizes: [{ sizeNumber: '', sizeStock: '' }] }]
                console.log(newArray)
                return { ...prevState, colors: newArray }
            })}>Add new color</button>
        </form >
    )
}
