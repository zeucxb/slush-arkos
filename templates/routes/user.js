module.exports = app => {
    app.route('/users')
        .get((req, res) => {
            app.interpreters.db.getAll('user', (err, users) => {
                if(users) {
                    app.helpers.request(res, true, users);
                } else {
                    app.helpers.request(res, true, 'No users yet.');
                }
            });
        })

        .post((req, res) => {
            app.interpreters.db.save('user', {firstname: 'Eliseu', lastname: 'Codinhoto'}, (err, user) => {
                app.helpers.request(res, true, user);
            });
        });

    app.route('/user/:_id')
        .get((req, res) => {
            const _id = req.params._id;

            app.interpreters.db.getById('user', _id, (err, user) => {
                if(user) {
                    app.helpers.request(res, true, user);
                } else {
                    app.helpers.request(res, false, 'No user found.', 404);
                }
            });
        });
};