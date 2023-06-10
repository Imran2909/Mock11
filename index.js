const express = require("express")
const { connection } = require("./config/db")
const { UserRouter } = require("./Routes/User.Route")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Home")
})

app.use("/user", UserRouter)

app.listen(2200, async () => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("Port 2200")
})
