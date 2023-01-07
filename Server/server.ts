import express, { Request, Response } from "express"
const PORT = 8080
const server = express()

server.get("/", (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Hello World" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})