import { Pool } from "pg"
const pool = new Pool({
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "postgres",
    host: 'localhost'
})