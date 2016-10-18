var express = require('express')
var router = express.Router()
var User = require('../models/user')

router.get('/new', function (req, res) {
  res.render('user/new')
}).get('/', function (req, res) {
  User.find({}, function (err, allUsers) {
    if (err) throw err
    res.render('user/index', { data: allUsers })
  })
}).get('/:id', function (req, res) {
  res.render('')
}).get('/:id/update', function (req, res) {
  res.render('')
})

// router.post('/', function (req, res) {
//   var newUser = new User({
//     username: req.body.user.username,
//     name: req.body.user.name,
//     email: req.body.user.email
//   })
//
//   newUser.save()
//   res.redirect('/users')
// })

router.post('/', function (req, res) {
  User.create(req.body.user, function (err, newUser) {
    res.json(newUser)
  })
})


module.exports = router
