// use express for routing
var express = require('express')
  , http = require ('http')
  , app = module.exports = express()
  , server = http.createServer(app);

var routes = require('./routes');
var api = require('./routes/api_temp');

//  , passport = require('passport')
// connect to mongoDB
var databaseUrl = "inqueue";
var collections = ["q"];
app.db = require('mongojs').connect(databaseUrl, collections);

// hack to figure out routing for now...
//app.api = "ec2-54-244-184-198.us-west-2.compute.amazonaws.com/api";


// set up static routes
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'secret' }));
    app.use(express.static(__dirname + '/public'));
//    app.use(passport.initialize());
//    app.use(passport.session());
    app.use(app.router);
});

// set up routes in the routes/ folder
// all the js files in routes
app.get('/', routes.index);

// API Routes
app.get('/api/ping/', api.ping);

//require('./routes/passport')(passport, config);

// start server
// aws -> 80 default http connection
// sudo nohup node server.js ------> log in as admin to run for AWS
server.listen(1111);
console.log('Listening on port 1111');
