const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userreg = require('./bb_user_reg.js');
app.use('/images', express.static('images'));
app.use(bodyParser.urlencoded({ extended: false }))

const hostname = '127.0.0.1'
const port = 3000

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/main.html')
})

app.get('/bb_user_reg', (req,res) => {
  res.sendFile(__dirname + '/public/bb_user_reg.html')
})

app.post('/bb_user_reg', (req,res) => {
  userreg(req)
})

app.get('/bb_inst_reg', (req,res) => {
  res.sendFile(__dirname + '/public/bb_inst_reg.html')
})

app.get('/bb_user_login', (req,res) => {
  res.sendFile(__dirname + '/public/bb_user_login.html')
})

app.get('/bb_inst_login', (req,res) => {
  res.sendFile(__dirname + '/public/bb_inst_login.html')
})

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/main.html')
})

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})