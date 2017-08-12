require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const IO_PORT     = process.env.IO_PORT || 3001;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(knexLogger(knex));
app.use(morgan('dev'));
app.use(express.static('public'))
app.set("view engine", "ejs");

//Home page
app.get("/", (req, res) => {
  res.render("index");
});

server.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

io.on('connect', function (socket) {
  console.log("a user connected!");
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

io.listen(IO_PORT, () => {
  console.log("Socket.io listening on port " + IO_PORT);
});
