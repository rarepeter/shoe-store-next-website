import mongoose from 'mongoose'

const AvailableSizeSchema = new mongoose.Schema({
    sizeNumber: { type: Number, required: true },
    sizeStock: { type: Number, required: true }
})

const ColorSchema = new mongoose.Schema({
    colorName: { type: String, required: true },
    colorCode: { type: String, required: true },
    availableSizes: [AvailableSizeSchema]
})

const ShoeSchema = new mongoose.Schema({
    id: { type: String, required: true },
    colors: [ColorSchema]
}, { timestamps: true })

export default mongoose.models.Shoe || mongoose.model("Shoe", ShoeSchema)

