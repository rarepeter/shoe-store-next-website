import nextConnect from 'next-connect'

const shoeHandler = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Something went wrong. ${error.message}` })
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method ${req.method} is not allowed.` })
    }
})

export default shoeHandler