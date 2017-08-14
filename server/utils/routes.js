const helper = require('./helper');
const express = require('express');
const router = express.Router();

class Routes{

  constructor(app){
		this.app = app;
	}

  appRoutes(knex){
    this.app.get("/", (req, res) => {
      res.render("index");
    });
  }

  routesConfig(knex){
		this.appRoutes(knex);
	}

}

module.exports = Routes;
