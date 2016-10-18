var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String
})

var User = mongoose.model('User', userSchema)

module.exports = User
