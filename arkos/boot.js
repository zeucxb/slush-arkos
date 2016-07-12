module.exports = app => {
	app.listen(app.get('port'), () => {
		console.log(`API rodando na porta ${app.get('port')}`);
	});
};