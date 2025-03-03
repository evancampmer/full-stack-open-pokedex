const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

/* eslint no-console: ['error', { allow: ['log'] }] */

// eslint-disable-next-line no-unused-vars
app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
