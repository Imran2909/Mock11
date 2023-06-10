const express = require("express")
const { UserModel } = require("../Models/User.model")
require("dotenv").config()

const UserRouter = express.Router()
UserRouter.use(express.json())

UserRouter.post("/PostData", async (req, res) => {
    let { name, email, destination, travellers, budget } = req.body

    const data = new UserModel({ name, email, destination, travellers, budget })
    await data.save()
    res.send({ "message": "Post added", data })

})

UserRouter.get("/PostData", async (req, res) => {
    const data = await UserModel.find()
    res.send(data)
})

UserRouter.delete("/post/:id", async (req, res) => {
    const ID = req.params.id
    await UserModel.findByIdAndDelete({ "_id": ID })
    res.send("deleted")
})

UserRouter.get("/filter/:id", async (req, res) => {
    const ID = req.params.id
    const data = await UserModel.find({ "destination": ID })
    res.send(data)

})

UserRouter.get("/filter/:des/sort/:id", async (req, res) => {
    const ID = req.params.id
    const des = req.params.des
    if(ID=="asc"){
    if(des==!null){
        const data = await UserModel.find({ "destination": des }).sort({"budget":1})
        res.send(data)
    }
    else{
        const data = await UserModel.find().sort({"budget":1})
        res.send(data)
    }
    }
    else if(ID=="desc"){
    if(des==!null){
        const data = await UserModel.find({ "destination": des }).sort({"budget":-1})
        res.send(data)
    }
    else{
        const data = await UserModel.find().sort({"budget":-1})
        res.send(data)
    }
    }


})





module.exports = {
    UserRouter
}