var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/route')
var expressLayouts = require('express-ejs-layouts')
var path = require('path')
var mongoose = require('mongoose')

var app = express()

if (process.env.NODE_ENV === 'production') {
  mongoose.connect('mongodb://terencelimsayjian:looneytunes92@ds027295.mlab.com:27295/ter-do-list')
} else {
  mongoose.connect('mongodb://localhost/to-do-list')
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressLayouts)
app.use('/users', routes)

app.listen(process.env.PORT || 3000)
console.log('Server started')
