import express from "express"
import cors from "cors"
import schoolRoutes from "./routes/schools.routes"
import categoryRoutes from "./routes/categories.routes"
import "dotenv/config"

const app = express()

app.use(express.json())

app.use("/v1/schools", schoolRoutes)
app.use("/v1/categories", categoryRoutes)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})