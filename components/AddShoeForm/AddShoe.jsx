import React, { useState } from 'react'
import styles from './AddShoe.module.css'

export default function AddShoe() {
    const [shoe, setShoe] = useState({
        colors: [
            {
                key: 1,
                colorName: '',
                colorCode: '',
                availableSizes: [{ key: 2, sizeNumber: '', sizeStock: '' }]
            }
        ]
    })

    console.log(shoe)

    return (
        <form>
            {shoe.colors.map((item, index) => {
                return (
                    <React.Fragment key={item.key}>
                        <input type="text" value={item.colorName} onChange={e => setShoe(prevState => {
                            let colors = [...prevState.colors]
                            colors[index].colorName = e.target.value
                            return { ...prevState, colors }
                        })} />
                        <input type="text" value={item.colorCode} onChange={e => setShoe(prevState => {
                            let colors = [...prevState.colors]
                            colors[index].colorCode = e.target.value
                            return { ...prevState, colors }
                        })} />
                        {item.availableSizes.map((sizeInfo, sizeIndex) => {
                            return (
                                <React.Fragment key={sizeInfo.key}>
                                    <input type="text" value={item.availableSizes[sizeIndex].sizeNumber} onChange={e => setShoe(prevState => {
                                        const newColorsArray = [...prevState.colors]
                                        newColorsArray[index].availableSizes[sizeIndex].sizeNumber = e.target.value
                                        return { ...prevState, colors: newColorsArray }
                                    })} />
                                    <input type="text" value={item.availableSizes[sizeIndex].sizeStock} onChange={e => setShoe(prevState => {
                                        const newColorsArray = [...prevState.colors]
                                        newColorsArray[index].availableSizes[sizeIndex].sizeStock = e.target.value
                                        return { ...prevState, colors: newColorsArray }
                                    })} />
                                </React.Fragment>
                            )
                        })}
                    </React.Fragment>
                )
            })}
            <button onClick={e => setShoe(prevState => {
                e.preventDefault()
                const newArray = [...prevState.colors, { key: 2, colorName: '', colorCode: '', availableSizes: [{ sizeNumber: '', sizeStock: '' }] }]
                return { ...prevState, colors: newArray }
            })}>Add new color</button>
        </form >
    )
}
