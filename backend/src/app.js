import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import subcatogoryRouter from './routes/subcatogary.routes.js'
import categoryRouter from './routes/category.routes.js'
import productRouter from './routes/product.routes.js'
//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/subcatogory", subcatogoryRouter)
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/product", productRouter)
// http://localhost:8000/api/v1/users/register
export { app }