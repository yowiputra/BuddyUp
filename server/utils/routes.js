const helper = require('./helper');
const express = require('express');
const router = express.Router();

class Routes{

  constructor(app, knex){
		this.app = app;
    this.knex = knex;
	}

  appRoutes(knex){
    this.app.get("/", (req, res) => {
      res.render("index");
    });
  }

  routesConfig(){
		this.appRoutes(this.knex);
	}

}

module.exports = Routes;
