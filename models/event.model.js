const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    dress: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    speakers: [{
        name: { type: String, required: true },
        position: { type: String, required: true },
        profilePic: { type: String, required: true }

    }],
    eventType: {
        type: String,
        required: true
    }

}, { timestamps: true })


const Event = mongoose.model("Event", eventSchema)

module.exports = Event