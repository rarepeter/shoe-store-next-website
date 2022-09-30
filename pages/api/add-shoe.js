import connectToDB from "../../backend/functions/connectToDB"
import shoeHandler from "../../backend/handlers/shoeHandler"
import Shoe from "../../backend/schemas/Shoe.js"
import { v4 as uuidv4 } from 'uuid'
import mongoose from "mongoose"


export default shoeHandler
    .get(async (req, res) => {
        connectToDB()
        const data = Shoe.find()

    })
    .post(async (req, res) => {
        await connectToDB()
        const data = { id: uuidv4(), ...req.body }
        await Shoe.create(data)
        res.status(200).json({ message: 'success!' })
    })