import React from 'react'
import styles from './AddShoe.module.css'

export default function AddShoe() {
    const [shoe, setShoe] = useState({
        colors: [{
            colorName: '',
            colorCode: '',
            availableSizes: [{ sizeNumber: '', sizeStock: '' }]
        }]
    })

    return (
        <form>
            {shoe.colors.map((item, index) => {
                return (
                    <>
                    
                    </>
                )
            })}
        </form>
    )
}
