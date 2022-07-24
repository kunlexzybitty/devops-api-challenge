const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Add routes to express app
app.use('/', routes);

let server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})


module.exports = server;