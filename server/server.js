require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const http        = require("http");
const knexConfig  = require("./knexfile");
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const knex        = require("knex")(knexConfig[ENV]);
const socketio    = require('socket.io');
const helmet      = require('helmet');

const userData    = require('./routes/userData.js')
const users       = require('./routes/users.js');
const auth        = require('./routes/auth.js');
const profileUpdate = require('./routes/profileUpdate.js')

// external files
const socketEvent = require('./sockets.js');

// server setup
const app         = express();
const server      = http.Server(app);
const io          = socketio(server);

app.use(bodyParser.json());
app.use(knexLogger(knex));
app.use(morgan('dev'));
app.use(helmet());
app.set('view engine', 'ejs');
app.use(express.static('public'));

// routes setup
// homepage


app.use('/api/userdata', userData);

app.get(/.*/, (req, res) => {
  res.render("index");
});



//registration
app.use('/api/users', users);
app.use('/api/auth', auth);

//profile update
app.use('/api/profileupdate', profileUpdate)

// socket.io listener
socketEvent(io, knex);

// server listener
server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
