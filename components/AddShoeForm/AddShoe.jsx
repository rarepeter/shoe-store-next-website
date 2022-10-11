import React, { useState } from 'react'
import styles from './AddShoe.module.css'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export default function AddShoe() {
	const [image, setImage] = useState(null)
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

	const handleSubmit = async (e) => {
		e.preventDefault()
		// const response = await axios.post('/api/shoes', shoe)
		const fd = new FormData()
		fd.append('image', image)
		const response = await axios.post('/api/shoes/image-controller', fd)
		console.log(response)
	}

	console.log(image)

	return (
		<form className={styles.form} >
			{shoe.colors.map((item, index) => {
				return (
					<React.Fragment key={item.key}>
						<h2>Color {index + 1}</h2>
						<input type="file" onChange={e => setImage(e.target.files[0])} />
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
									<div className={styles['size-box']}>
										<label>Size:</label>
										<input type="number" min='0' value={item.availableSizes[sizeIndex].sizeNumber} onChange={e => setShoe(prevState => {
											const newColorsArray = [...prevState.colors]
											newColorsArray[index].availableSizes[sizeIndex].sizeNumber = e.target.value
											return { ...prevState, colors: newColorsArray }
										})} />
									</div>
									<div className={styles['size-box']}>
										<label>Size stock:</label>
										<input type="number" min='0' value={item.availableSizes[sizeIndex].sizeStock} onChange={e => setShoe(prevState => {
											const newColorsArray = [...prevState.colors]
											newColorsArray[index].availableSizes[sizeIndex].sizeStock = e.target.value
											return { ...prevState, colors: newColorsArray }
										})} />
									</div>
								</div>
							)
						})}
						<button onClick={e => setShoe(prevState => {
							e.preventDefault()
							let oldColorsArray = [...prevState.colors]
							oldColorsArray[index].availableSizes.push({ key: uuidv4(), sizeNumber: '', sizeStock: '' })
							const updatedColorsArray = oldColorsArray
							return { colors: updatedColorsArray }
						})}>Add size</button>
					</React.Fragment>
				)
			})}
			<button onClick={e => setShoe(prevState => {
				e.preventDefault()
				const newArray = [...prevState.colors, { key: uuidv4(), colorName: '', colorCode: '', availableSizes: [{ key: uuidv4(), sizeNumber: '', sizeStock: '' }] }]
				return { ...prevState, colors: newArray }
			})}>Add color</button>
			<button onClick={e => handleSubmit(e)}>Submit</button>
		</form >
	)
}
