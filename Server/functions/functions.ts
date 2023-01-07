import { Request, Response } from "express"
import { pool } from "./../config/db"
let nameoftable = "xasanboy"
export const getMethod = async (req: Request, res: Response) => {
    try {
        const users = (await pool.query(`SELECT * FROM ${nameoftable}`)).rows
        res.status(200).json({ message: users })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
// Post
export const postMethod = async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, password } = req.body
        const user = (await pool.query(`SELECT * FROM ${nameoftable} WHERE name = $1 AND email = $2 AND password = $3`, [name, email, password])).rows
        if (user.length == 0) {
            pool.query(`INSERT INTO ${nameoftable} (name,lastname,email,password) VALUES ($1,$2,$3,$4)`, [name, lastname, email, password])
            return res.status(201).json({ message: "Created!" })
        }
        res.status(200).json({ message: "Your account is already exist!" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
// Delete by id
export const deleteMethod = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        pool.query(`DELETE FROM ${nameoftable} WHERE id = $1`, [id])
        res.status(200).json({ message: "Deleted!" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
// Edit by id
export const editMethod = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}