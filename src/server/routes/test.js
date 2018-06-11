const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Test = require('../models/test')

router.get('/', (req, res, next) => {
  res.status(200).send('success')
})

router.post('/', (req, res, next) => {
  const test = new Test({
    _id: new mongoose.Types.ObjectId(),
    message: req.body
  })
  test.save().then(result => {
    console.log(result)
    res.status(200).json({
      say: 'done',
      message: test,
      result
    })
  })
    .catch(err => console.log(err))
})

module.exports = router
