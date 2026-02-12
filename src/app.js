import express from 'express'
import cors from 'cors'
import pets from './routes/petsRouter.js'

const app = express();

app.use(express.json())
app.use(cors())
app.use("/pets", pets);

export default app;