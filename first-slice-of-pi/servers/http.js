var express = require('express');
var app = express();
var sensorRoutes = require('./../routes/sensors');
var actuatorRoutes = require('./../routes/actuators');
	cors = require('cors');
	app.use(cors());
	app.use('/pi/sensors', sensorRoutes);
	app.use('/pi/actuators', actuatorRoutes);
	
	app.get('/', function(req, res){
		res.send('Please use /pi');
	});
	app.get('/pi', function(req, res){
		res.send('Hi, welcome home!');
	});
	

module.exports = app;
