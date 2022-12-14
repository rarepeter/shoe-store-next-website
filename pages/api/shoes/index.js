import { v4 as uuidv4 } from 'uuid'
import connectToDB from "../../../backend/functions/connectToDB"
import shoeHandler from "../../../backend/handlers/shoeHandler"
import Shoe from "../../../backend/schemas/Shoe.js"

export default shoeHandler
    .get(async (req, res) => {
        try {
            await connectToDB()
            const page = req.query.page || 1
            const limit = req.query.limit || 2
            const skipIndex = (page - 1) * limit
            const data = await Shoe.find().skip(skipIndex).limit(limit)
            res.status(200).json(data)
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Something went wrong when.' })
        }
    })
    .post(async (req, res) => {
        try {
            await connectToDB()
            const requestData = req.body
            console.log(requestData)
            const shoeData = { id: uuidv4(), ...requestData }
            await Shoe.create(shoeData)
            res.status(200).json({ message: 'Shoe created!' })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Something went wrong.' })
        }
    })