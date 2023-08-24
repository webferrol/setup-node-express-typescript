import express from 'express' // ES Modules
import dotenv from 'dotenv'
import { todosRouter } from './routes/todos'
dotenv.config()

const PORT = process.env.PORT ?? 3000
const app = express()

// app.use(express.json())

app.get(
  '/',
  (_req, res) => {
    res.send('Hello World!')
  }
)

app.use('/api/todos', todosRouter)

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT} at ${new Date().toLocaleDateString()}`)
})
