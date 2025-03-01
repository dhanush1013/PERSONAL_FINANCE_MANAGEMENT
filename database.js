const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://221701013:<dhanush@22>@cluster0.wkqe0.mongodb.net/')
        console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB