const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
const controllers = require('./controllers');
const session = require('express-session');

const app = express();

app.use(bodyParser.json());

let {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;

massive(CONNECTION_STRING).then(db => {
    console.log('db set')
    app.set('db', db);
})

// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }))

//"Database"
let id = 1
let text = ["I'm user 1!", "I'm user 2!"]




//ENDPOINTS

app.get('/users', controllers.get_users);
app.post('/users', controllers.create_user);




app.listen(SERVER_PORT, () => {
    console.log(`Server docked in port ${SERVER_PORT}`)
});