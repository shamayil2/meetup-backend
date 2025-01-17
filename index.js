const { initializeDatabase } = require("./db/db.connect")
const express = require("express")
const cors = require("cors")
const Event = require("./models/event.model")
const fs = require("fs")
initializeDatabase()
const app = express()
app.use(express.json())

corsOptions = {
    origin: "*",
    credentials: true
}

app.use(cors(corsOptions))

const jsonData = fs.readFileSync("events.json", "utf-8")
const eventsData = JSON.parse(jsonData)

const getData = async() => {
    try {

        const allEvents = await Event.find()
        return allEvents

    } catch (error) {
        console.log(error)
    }
}

app.get("/events", async(req, res) => {
    try {

        const allEvents = await getData()
        if (allEvents.length !== 0) {
            res.json(allEvents)
        } else {
            res.status(404).json({ error: "Cannot Find Events" })
        }


    } catch (error) {
        res.status(500).json({ error: "Cannot get Events." })
    }
})

const getEventById = async(eventId) => {
    try {
        const eventObj = await Event.findById(eventId)
        return eventObj
    } catch (error) {
        console.log(error)
    }
}

app.get("/events/:eventId", async(req, res) => {
    try {
        const event = await getEventById(req.params.eventId)
        if (!event) {
            res.status(404).json({ error: "Event Not Found" })
        } else {
            res.json(event)
        }


    } catch (error) {
        res.status(500).json({ error: "Cannot get the event" })
    }
})

const seedData = async(eventsData) => {
    try {

        for (const event of eventsData) {
            const eventNew = new Event(event)
            const savedEvent = await eventNew.save()
            console.log(savedEvent)

        }


    } catch (error) {
        console.log("Cant seed data", error)
    }

}

// seedData(eventsData)


const PORT = 3000
const date = "2025-03-17T14:30:00.000Z"

app.listen(PORT, () => {
    console.log("Server is running on Port:", PORT)
})