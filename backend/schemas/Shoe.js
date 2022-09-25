import mongoose from 'mongoose'

const AvailableSize = new mongoose.Schema({
    sizeNumber: { type: Number },
    sizeStock: { type: Number }
})

const Color = new mongoose.Schema({
    colorName: { type: String },
    colorCode: { type: String },
    availableSizes: [AvailableSize]
})

const Shoe = new mongoose.Schema({
    id: { type: String },
    colors: [Color]
})