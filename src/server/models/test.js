const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  message: String
})

module.exports = mongoose.model('test', testSchema)
