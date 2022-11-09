const express = require('express') 
var path = require('path')
const router = express.Router()
var userreg = require('./bb_user_reg.js');
var instreg = require('./bb_inst_reg.js');
var userlog = require('./bb_user_login.js');
var instlog = require('./bb_inst_login.js');


var app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/images', express.static(__dirname + '/public/images'))


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


const hostname = '127.0.0.1'
const port = 3000

app.get('/', (req,res) => {
    res.render('main')
})

app.get('/bb_user_reg', (req,res) => {
  res.render('bb_user_reg')
  console.log("User reg page")
})

app.post('/bb_user_reg', (req,res) => {
  userreg(req,res)
})

app.get('/bb_inst_reg', (req,res) => {
  res.render('bb_inst_reg')
  console.log("Inst reg page")
})

app.post('/bb_inst_reg', (req,res) => {
  instreg(req,res)
})

app.get('/bb_user_login', (req,res) => {
  res.render('bb_user_login')
  console.log("User login page")
})

app.post('/bb_user_login', (req,res) => {
  userlog(req,res)
})

app.get('/bb_inst_login', (req,res) => {
  res.render('bb_inst_login')
})

app.post('/bb_inst_login', (req,res) => {
  instlog(req,res)
})

app.get('/bb_find', (req, res) => {
  res.render('bb_find')
})

app.get('/bb_inst_port', (req, res) => {
  // req.session.destroy();
  res.redirect('bb_inst_port');
})

app.get('/logout', (req, res) => {
  // req.session.destroy();
  res.redirect('/');
})

// app.get('/bb_map', (req, res) => {
//   // req.session.destroy();
//   res.redirect('bb_map');
// })

// app.use((req, res, next) => {
//   res.status(404).send("Sorry can't find that!")
// })

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

module.exports = router