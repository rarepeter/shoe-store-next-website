// import connectToDB from "../../../backend/functions/connectToDB"
// import Shoe from "../../../backend/schemas/Shoe.js"
// import { v4 as uuidv4 } from 'uuid'
import shoeImageHandler from "../../../backend/handlers/shoeHandler"
import multer from "multer"
import path from 'path'

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
            cb(null, file.originalname)
        }
    })
})

// const uploadFile = upload.single('image')
const uploadFiles = upload.array('images', 3)

export default shoeImageHandler
    .use(uploadFiles)
    .post((req, res) => {
        try {
            console.log(req.files)
            res.status(200).json({ message: 'Images have been uploaded', file: req.files })
        } catch (e) {
            res.status(500).json({ message: 'An error has occured' })
        }
    })
