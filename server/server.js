require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(knexLogger(knex));
app.use(morgan('dev'));
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
