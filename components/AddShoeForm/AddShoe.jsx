import React, { useState } from 'react'
import styles from './AddShoe.module.css'
import { v4 as uuidv4 } from 'uuid'

export default function AddShoe() {
    const [shoe, setShoe] = useState({
        colors: [
            {
                key: uuidv4(),
                colorName: '',
                colorCode: '',
                availableSizes: [{ key: uuidv4(), sizeNumber: '', sizeStock: '' }]
            }
        ]
    })

    // console.log(shoe)
    console.log(shoe.colors[0].availableSizes)

    return (
        <form className={styles.form}>
            {shoe.colors.map((item, index) => {
                return (
                    <React.Fragment key={item.key}>
                        <label>Color name:</label>
                        <input type="text" value={item.colorName} onChange={e => setShoe(prevState => {
                            let colors = [...prevState.colors]
                            colors[index].colorName = e.target.value
                            return { ...prevState, colors }
                        })} />
                        <label>Color code:</label>
                        <input type="text" value={item.colorCode} onChange={e => setShoe(prevState => {
                            let colors = [...prevState.colors]
                            colors[index].colorCode = e.target.value
                            return { ...prevState, colors }
                        })} />
                        {item.availableSizes.map((sizeInfo, sizeIndex) => {
                            return (
                                <div className={styles.sizes} key={sizeInfo.key}>
                                    <label>Size:</label>
                                    <input type="text" value={item.availableSizes[sizeIndex].sizeNumber} onChange={e => setShoe(prevState => {
                                        const newColorsArray = [...prevState.colors]
                                        newColorsArray[index].availableSizes[sizeIndex].sizeNumber = e.target.value
                                        return { ...prevState, colors: newColorsArray }
                                    })} />
                                    <label>Size stock:</label>
                                    <input type="text" value={item.availableSizes[sizeIndex].sizeStock} onChange={e => setShoe(prevState => {
                                        const newColorsArray = [...prevState.colors]
                                        newColorsArray[index].availableSizes[sizeIndex].sizeStock = e.target.value
                                        return { ...prevState, colors: newColorsArray }
                                    })} />
                                </div>
                            )
                        })}
                        <button onClick={e => setShoe(prevState => {
                            e.preventDefault()
                            let oldColorsArray = [...prevState.colors]                           
                            oldColorsArray.at(index).availableSizes.push({ key: uuidv4(), sizeNumber: '', sizeStock: '' })                          
                            const updatedColorsArray = oldColorsArray
                            return { colors: [...updatedColorsArray] }
                        })}>Add size</button>
                    </React.Fragment>
                )
            })}
            <button onClick={e => setShoe(prevState => {
                e.preventDefault()
                const newArray = [...prevState.colors, { key: uuidv4(), colorName: '', colorCode: '', availableSizes: [{ key: uuidv4(), sizeNumber: '', sizeStock: '' }] }]
                return { ...prevState, colors: newArray }
            })}>Add color</button>
        </form >
    )
}
