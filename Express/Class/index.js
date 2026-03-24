const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.send('Welcome To The Home Page!')
})

app.get('/about', (req, res) => {
  res.send('Welcome To The About Page!')
})

app.get('/contact', (req, res) => {
  res.send('Welcome To The Contact Page!')
})

app.get('/profile', (req, res) => {
  res.send('Welcome To The Profile Page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
