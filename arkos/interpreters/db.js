module.exports = app => {
    let db = {};

    db.save = (modelName, obj, callback) => {
        app.drivers.mongo.create(modelName, obj, (err, response) => {
            callback(err, response);
        });
    };

	db.get = (modelName, obj, callback) => {
        app.drivers.mongo.find(modelName, obj, (err, response) => {
            callback(err, response);
        });
    };

    db.getAll = (modelName, callback) => {
        app.drivers.mongo.find(modelName, {}, (err, response) => {
            callback(err, response);
        });
    };

    db.getOne = (modelName, obj, callback) => {
        app.drivers.mongo.findOne(modelName, obj, (err, response) => {
            callback(err, response);
        });
    };

    db.getById = (modelName, _id, callback) => {
        app.drivers.mongo.findOne(modelName, {_id}, (err, response) => {
            callback(err, response);
        });
    };

	return db;
};