const express = require('express')
const app = express()
const port = 3000


app.use('/',require('./routes'))
app.use('/doctors', require('./routes/doctors'))
app.use('/appointments', require('./routes/appointments'))






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

module.exports = app;