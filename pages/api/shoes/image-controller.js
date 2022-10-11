// import connectToDB from "../../../backend/functions/connectToDB"
// import Shoe from "../../../backend/schemas/Shoe.js"
// import { v4 as uuidv4 } from 'uuid'
// import shoeImageHandler from "../../../backend/handlers/shoeHandler"
import multer from "multer"
import path from 'path'
import nextConnect from 'next-connect'

export const config = {
    api: {
        bodyParser: false
    }
}

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(process.cwd(), 'public', 'shoe-images'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + ' ' + file.encoding + path.extname(file.originalname))
        }
    })
})

const uploadFile = upload.single('image')

const shoeImageHandler = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Something went wrong. ${error.message}` })
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method ${req.method} is not allowed.` })
    }
})

shoeImageHandler.use(uploadFile)

shoeImageHandler
    .post((req, res) => {
        try {
            console.log(req.file)
            res.status(200).json({ message: 'Images have been uploaded', file: req.file })
        } catch (e) {
            res.status(500).json({ message: 'An error has occured' })
        }
    })

export default shoeImageHandler