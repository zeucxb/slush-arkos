const mongoose = require('mongoose');
const config = require('./mongo_config');

module.exports = app => {

    // CONFIG
	mongoose.connect(config.mongoURI[app.settings.env], err => {
        if(err) {
            console.log('Error connecting to the database. ' + err);
        } else {
            console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
        }
    });
	
	mongoose.connection.on('connected', () => {
		console.log('Mongoose conectado');
	});
	
	mongoose.connection.on('disconnected', () => {
		console.log('Mongoose desconectado');
	});
	
	mongoose.connection.on('error', error => {
		console.log('Mongoose erro de conexão: ' + error);
	});
	
	process.on('SIGINT', () => {
		mongoose.connection.close(() => {
			console.log('Mongoose desconectado por termino da aplicação');
			process.exit(0);
		});
	});

    // ABSTRACT
    let mongoDB = {};

    mongoDB.create = (modelName, obj, callback) => {
        const model = app.models[modelName];

        model.create(obj, (err, result) => {
            callback(err, result);
        });
    };

	mongoDB.find = (modelName, obj, callback) => {
        const model = app.models[modelName];

        model.find(obj, (err, result) => {
            callback(err, result);
        });
    };

	mongoDB.findOne = (modelName, obj, callback) => {
        const model = app.models[modelName];

        model.findOne(obj, (err, result) => {
            callback(err, result);
        });
    };

	return mongoDB;
};