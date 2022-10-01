import connectToDB from "../../backend/functions/connectToDB"
import shoeHandler from "../../backend/handlers/shoeHandler"
import Shoe from "../../backend/schemas/Shoe.js"
import { v4 as uuidv4 } from 'uuid'

export default shoeHandler
    .get(async (req, res) => {
        await connectToDB()
        const page = req.query.page || 1
        const limit = req.query.limit || 2
        const skip = (page - 1) * limit
        console.log(req.query.page)
        const data = await Shoe.find().skip(skip).limit(limit)
        res.status(200).json(data)
    })
    .post(async (req, res) => {
        await connectToDB()
        const data = { id: uuidv4(), ...req.body }
        await Shoe.create(data)
        res.status(200).json({ message: 'success!' })
    })