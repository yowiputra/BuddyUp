require('dotenv').config();

const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const http        = require("http");
const knexConfig  = require("./knexfile");
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const knex        = require("knex")(knexConfig[ENV]);
const io          = require('socket.io');

const config = require('./utils/config');
const socketEvents = require('./utils/socket');
const routes = require('./utils/routes');

class Server {

  constructor(){
    this.PORT = process.env.PORT || 3000;

    this.app = express();
    this.http = http.Server(this.app);
    this.socket = io(this.http);
  }

  appConfig(){
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(knexLogger(knex));
    this.app.use(morgan('dev'));
    new config(this.app);
  }

  includeRoutes(){
    new routes(this.app).routesConfig(knex);
    new socketEvents(this.socket).socketConfig();
  }

  appExecute(){
    this.appConfig();
    this.includeRoutes();
    this.http.listen(this.PORT, () => {
      console.log(`Listening on port: ${this.PORT}`);
    });
  }

}

const app = new Server();
app.appExecute();
