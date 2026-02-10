import express from 'express'
import pets from './routes/petsRouter.js'

const app = express();

app.use(express.json())
app.use("/pets", pets);

export default app;