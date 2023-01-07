import express, { Request, Response } from "express"
import { getMethod, postMethod, deleteMethod, editMethod } from "./functions/functions"
const PORT = 8080
const server = express()
// Get all users
server.get("/", getMethod)

// POst a user
server.post("/user", postMethod)

// Dlete by id
server.get("/user/:id", deleteMethod)

// Edit by id
server.patch("/user/:id", editMethod)


server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})