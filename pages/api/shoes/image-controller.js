import connectToDB from "../../../backend/functions/connectToDB"
import shoeImageHandler from "../../../backend/handlers/shoeHandler"
import Shoe from "../../../backend/schemas/Shoe.js"
import { v4 as uuidv4 } from 'uuid'
import multer from "multer"
import path from 'path'
import formidable from 'formidable-serverless'

export const config = {
    api: {
        bodyParse: false
    }
}

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
    // .use(uploadFiles)
    .post(async (req, res) => {
        try {
            const form = formidable({ multiples: true })
            form.uploadDir = path.join(__dirname, "public", "shoe-images");
            form.keepExtensions = true
            form.keepFileName = true

            form.parse(req)

            console.log(req.body)

            form.on('fileBegin', function (name, file) {
                file.path = path.join('public', 'shoe-images')
                console.log(file)
            })

            res.status(200).json({ message: 'Images have been uploaded' })
        } catch (e) {
            res.status(500).json({ message: 'An error has occured' })
        }
    })