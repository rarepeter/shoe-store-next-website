import shoeImageHandler from "../../../backend/handlers/shoeHandler"
import multer from "multer"
import path from 'path'
import fs from 'fs'
import renameFile from '../../../backend/functions/renameFile'

export const config = {
    api: {
        bodyParser: false
    }
}

const splitter = path.join('a', 'a')[1]

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

const uploadFiles = upload.array('images', 3)

export default shoeImageHandler
    .use(uploadFiles)
    .post((req, res) => {
        try {
            console.log(req.body.id)
            const newDir = path.join(process.cwd(), 'public', 'shoe-images', req.body.id)
            fs.mkdirSync(newDir)
            req.files.map((item, index) => {
                const stringifiedIndex = (index + 1).toString()
                fs.renameSync(item.path, renameFile(item.path, stringifiedIndex).replace('shoe-images', `shoe-images${splitter}${req.body.id}` ))
            })
            res.status(200).json({ message: 'Images have been uploaded', file: req.files })
        } catch (e) {
            res.status(500).json({ message: 'An error has occured' })
        }
    })
