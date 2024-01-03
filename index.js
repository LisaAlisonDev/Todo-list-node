
const express = require('express')
const db = require("./models");
const bodyparser = require('body-parser');


const path = require('path')
const app = express()
const PORT = 3000
const routes = require("./routes/index.js");


app.set('view engine', 'ejs')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')))
app.use("/", routes);


db.sequelize.authenticate().then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`)
})

module.exports = app