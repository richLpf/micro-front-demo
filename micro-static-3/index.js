const express = require('express')
const cors = require('cors')
const app = express()
const port = 10300

app.use(cors())
app.use('/', express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})