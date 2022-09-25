import mongoose from 'mongoose'

const AvailableSize = new mongoose.Schema({
    sizeNumber: { type: Number },
    sizeStock: { type: Number }
})

const ColorCategory = new mongoose.Schema({
    id: { type: String },
    colorName: { type: String, trim: true },
    availableSizes: [AvailableSize]
})