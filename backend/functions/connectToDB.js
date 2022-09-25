import mongoose from 'mongoose'

const connectToDB = async () => {
    if (mongoose.connections[0].readyState) return
    try {
        await mongoose.connect(process.env.DB_URI)
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB