const helper = require('./helper');

class Routes{

  constructor(app){
		this.app = app;
	}

  appRoutes(){
    this.app.get("/", (req, res) => {
      res.render("index");
    });
  }

  routesConfig(){
		this.appRoutes();
	}

}

module.exports = Routes;
