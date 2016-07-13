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
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;

            if(firstname && lastname) {
                app.interpreters.db.save('user', {firstname, lastname}, (err, user) => {
                    app.helpers.request(res, true, user);
                });
            } else {
                app.helpers.request(res, false, 'Bad Request', 400);
            }
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