import connectToDB from "../../backend/functions/connectToDB"
import shoeHandler from "../../backend/handlers/shoeHandler"
import Shoe from "../../backend/schemas/Shoe"


export default shoeHandler
  .get(async (req, res) => {
    connectToDB()
    const data = Shoe.find()

  })