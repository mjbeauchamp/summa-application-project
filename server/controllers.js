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
                // req.session.userid = createdUser[0].id
                res.status(200).send(createdUser);
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong"});
                console.log(err)
            });
    }
}