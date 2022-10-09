// import connectToDB from "../../../backend/functions/connectToDB"
// import Shoe from "../../../backend/schemas/Shoe.js"
// import { v4 as uuidv4 } from 'uuid'
import shoeImageHandler from "../../../backend/handlers/shoeHandler"
import multer from "multer"
import path from 'path'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/shoe-images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

const uploadFiles = upload.array('files', 5)

export default shoeImageHandler
    .post(async (req, res) => {
        try {
            res.status(200).json({ message: 'Images have been uploaded' })
        } catch (e) {
            res.status(500).json({ message: 'An error has occured' })
        }
    })