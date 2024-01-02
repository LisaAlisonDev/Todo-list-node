
const express = require('express')
const db = require("./models");

const path = require('path')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))


db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.get('/', function (req, res) {
    res.send('Hello World!');
  })

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`)
})

module.exports = app