const { initializeDatabase } = require("./db/db.connect")
const Event = require("./models/event.model")
const fs = require("fs")
initializeDatabase()

const jsonData = fs.readFileSync("events.json", "utf-8")
const eventsData = JSON.parse(jsonData)



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

seedData(eventsData)