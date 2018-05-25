let express = require("express"),
    app = express(),
    mongoose = require('mongoose'),
    session = require('express-session'),
    flash = require('express-flash'),
    bodyParser = require('body-parser'),
    path = require('path'),
    routes = require('./server/config/routes.js');

require('./server/config/mongoose.js');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, '/client/dist/client' )));
// Setting our Body Parser
app.use(bodyParser.json());
// Setting up Session
app.use(session({
    secret: 'yufh676r476578hs',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

routes(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
