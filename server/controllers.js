module.exports = {
    get_users: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_users()
            .then(users => {
                res.status(200).send(users)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send({errorMessage: "Oops! Something went wrong."})
            })
    },
    create_user: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, username, email, password} = req.body;

            dbInstance.create_user([name, username, email, password])
            .then(createdUser => {
                req.session.user = createdUser[0]
                console.log(req.session.user)
                res.status(200).send(createdUser);
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong"});
                console.log(err)
            });
    },
    login: (req, res) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;
        //I need to pull this "hash" argument from the database using the username

                        dbInstance.get_user([username, password])
                            .then(user => {
                                req.session.user = user[0]
                                console.log(req.session.user)
                                res.status(200).send(req.session.user);
                            })
                            .catch(err => {
                                res.status(500).send({errorMessage: "Oops! Something went wrong"});
                                console.log(err)
                        });
    },

    logout: (req, res, next) => {
        req.session.destroy();
        console.log('You successfully logged out!')
        console.log(req.session)
        res.status(200).send(req.session);
    }
}