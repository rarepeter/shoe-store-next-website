import mongoose from 'mongoose'

const AvailableSizeSchema = new mongoose.Schema({
    sizeNumber: { type: Number, required: true },
    sizeStock: { type: Number, required: true }
}, { _id: false })

const ColorSchema = new mongoose.Schema({
    colorName: { type: String, required: true },
    colorCode: { type: String, required: true },
    availableSizes: [AvailableSizeSchema]
}, { _id: false })

const ShoeSchema = new mongoose.Schema({
    id: { type: String, required: true },
    colors: [ColorSchema]
}, { timestamps: true, collection: 'shoes' })

export default mongoose.models.Shoe || mongoose.model("Shoe", ShoeSchema)

