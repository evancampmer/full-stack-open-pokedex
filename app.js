const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

/* eslint no-console: ['error', { allow: ['log'] }] */

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})


// eslint-disable-next-line no-unused-vars
app.get('/health', (res, req) => {
  res.send('ok')
})
