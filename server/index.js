const express = require('express');
const app = express()
app.get('/', async (req, res) => {
  res.send('index')
})
app.listen(9090, function () {
  console.log('server is listing at 9090} ');
})