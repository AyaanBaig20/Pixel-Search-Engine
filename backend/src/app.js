import express from "express"
import cookieParser from "cookie-parser"
import AuthRouter from "./routes/auth.routes.js"

let app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/auth",AuthRouter)

export default app
