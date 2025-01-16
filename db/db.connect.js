const mongoose = require("mongoose")
require("dotenv").config()


const mongoUri = process.env.MONGODB

const initializeDatabase = async() => {

    await mongoose.connect(mongoUri)
        .then(() => console.log("Database is connected"))
        .catch((error) => console.log("Cant connect to db", error))


}

module.exports = { initializeDatabase }