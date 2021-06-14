const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require('path')
const PORT = process.env.PORT || 5000

var corsOptions = {
  origin: "*"
};
const db = require("./app/models");
(async () => {
  await db.sequelize.sync({
    force: false
  }, () => console.log("[*] DB Sync complete"));
})();

const app = express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(cors(corsOptions))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

require("./app/routes/index")(app);

app
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
