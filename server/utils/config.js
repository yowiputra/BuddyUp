const express = require("express");
const path= require('path');

const method=config.prototype;

function config(app){

	// Setting .ejs as the default template extension
	app.set('view engine', 'ejs');

	// Telling express where it can find the templates
	app.set('views', (__dirname + '/../views'));

	//Files
	app.use(express.static(path.join('public')));

}

method.get_config=function(){
	return this;
}

module.exports = config;
