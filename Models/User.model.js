
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    travellers: { type: Number, required: true },
    budget: { type: Number, required: true }
}, {
    versionKey: false
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = {
    UserModel
}