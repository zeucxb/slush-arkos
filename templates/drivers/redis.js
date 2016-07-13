const redis = require('redis');

module.exports = () => {
	const redisClient = redis.createClient();

	redisClient.on('connect', () => {
		console.log('Redis conectado');
	});

	let redisDB = {};

	return redisDB;
};