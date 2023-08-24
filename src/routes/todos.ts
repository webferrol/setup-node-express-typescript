import express from 'express'

const router = express.Router()

router.get(
  '/',
  (_req, res) => {
    res.send('Hi todos')
  }
)

export {
  router as todosRouter
}
