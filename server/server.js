const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
// const authControllers = require('./controllers/auth-controllers');
// const sqControllers = require('./controllers/sqcontrollers');
// const storeControllers = require('./controllers/store-controllers');
const session = require('express-session');

const app = express();

app.use(bodyParser.json());

let {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;

// massive(CONNECTION_STRING).then(db => {
//     console.log('db set')
//     app.set('db', db);
// })

// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }))

//"Database"
let text = ["I'm user 1!", "I'm user 2!"]




//ENDPOINTS

app.get('/users', function(req, res){
    res.send(text[0]);
});





app.listen(SERVER_PORT, () => {
    console.log(`Server docked in port ${SERVER_PORT}`)
});