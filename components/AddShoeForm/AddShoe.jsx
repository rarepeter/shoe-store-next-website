import React, { useState } from 'react'
import styles from './AddShoe.module.css'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function AddShoe() {
	const router = useRouter()

	const [images, setImages] = useState([])
	const [shoe, setShoe] = useState({
		colors: [
			{
				id: uuidv4(),
				colorName: '',
				colorCode: '',
				availableSizes: [{ key: uuidv4(), sizeNumber: '', sizeStock: '' }]
			}
		]
	})

	const addShoeColor = (e) => {
		setShoe(prevState => {
			e.preventDefault()
			return { ...prevState, colors: [...prevState.colors, { id: uuidv4(), colorName: '', colorCode: '', availableSizes: [{ key: uuidv4(), sizeNumber: '', sizeStock: '' }] }] }
		})
	}

	const handleColorNameChange = (e, colorIndex) => {
		setShoe(prevState => {
			let colors = [...prevState.colors]
			colors[colorIndex].colorName = e.target.value
			return { ...prevState, colors }
		})
	}

	const handleColorCodeChange = (e, colorIndex) => {
		setShoe(prevState => {
			let colors = [...prevState.colors]
			colors[colorIndex].colorCode = e.target.value
			return { ...prevState, colors }
		})
	}

	const handleAddSize = (e, sizeIndex) => {
		setShoe(prevState => {
			e.preventDefault()
			let oldColorsArray = [...prevState.colors]
			oldColorsArray[sizeIndex].availableSizes.push({ key: uuidv4(), sizeNumber: '', sizeStock: '' })
			return { colors: oldColorsArray }
		})
	}

	const handleSizeChange = (e, colorIndex, sizeIndex) => {
		setShoe(prevState => {
			const newColorsArray = [...prevState.colors]
			newColorsArray[colorIndex].availableSizes[sizeIndex].sizeNumber = e.target.value
			return { ...prevState, colors: newColorsArray }
		})
	}

	const handleSizeStockChange = (e, colorIndex, sizeIndex) => {
		setShoe(prevState => {
			const newColorsArray = [...prevState.colors]
			newColorsArray[colorIndex].availableSizes[sizeIndex].sizeStock = e.target.value
			return { ...prevState, colors: newColorsArray }
		})
	}

	const handleImagesChange = (e, colorId) => {
		const foundId = images.find(item => item.id === colorId)
		if (!foundId) {
			setImages(prev => {
				return [...prev, {
					id: colorId,
					images: e.target.files
				}]
			})
			return
		}
		const result = [...images].filter(item => item.id !== colorId)
		setImages(() => {
			return [...result, {
				id: colorId,
				images: e.target.files
			}]
		})
		return
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const response = await axios.post('/api/shoes', shoe)
		if (response.status === 200) { console.log('Shoe created in database. Waiting for images to upload...') }
		for (let i = 0; i < images.length; i++) {
			const fd = new FormData()
			for (let j = 0; j < images[i].images.length; j++) {
				fd.append('images', images[i].images[j])
			}
			fd.append('id', images[i].id)
			const response = await axios.post('/api/shoes/image-controller', fd)
			if (response.status === 200) { console.log(`Images for shoe ${i + 1} out of ${images.length} have been uploaded.`) }
		}
		if (response.status === 200) { router.push('/') }
	}

	console.log(images)
	console.log(shoe)

	return (
		<form className={styles.form} >
			{shoe.colors.map((item, index) => {
				return (
					<React.Fragment key={item.id}>
						<h2>Color {index + 1}</h2>
						<input type="file" multiple onChange={e => handleImagesChange(e, item.id)} />
						<label>Color name:</label>
						<input type="text" value={item.colorName} onChange={e => handleColorNameChange(e, index)} />
						<label>Color code:</label>
						<input type="text" value={item.colorCode} onChange={e => handleColorCodeChange(e, index)} />
						{item.availableSizes.map((sizeInfo, sizeIndex) => {
							return (
								<div className={styles.sizes} key={sizeInfo.key}>
									<div className={styles['size-box']}>
										<label>Size:</label>
										
										<input type="number" min='0' value={item.availableSizes[sizeIndex].sizeNumber} onChange={e => handleSizeChange(e, index, sizeIndex)} />
									</div>
									<div className={styles['size-box']}>
										<label>Size stock:</label>
										<input type="number" min='0' value={item.availableSizes[sizeIndex].sizeStock} onChange={e => handleSizeStockChange(e, index, sizeIndex)} />
									</div>
								</div>
							)
						})}
						<button onClick={e => handleAddSize(e, index)}>Add size</button>
					</React.Fragment>
				)
			})}
			<button onClick={e => addShoeColor(e)}>Add color</button>
			<button onClick={e => handleSubmit(e)}>Submit</button>
		</form >
	)
}
