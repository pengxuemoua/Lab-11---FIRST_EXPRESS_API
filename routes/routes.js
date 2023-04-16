// routing is matching up different requests to a server with code that runs in respond to that request
// and creates a response 

// this app will only have 1 route, and there will be a router to deal with a request

let express = require('express') // require the 'express' library, similar to a python import
let router = express.Router() // create a router

// create route handler
router.get('/', function(req, res, next) { // router.get means to configure a route that is a get request...
    //...that fetches data, and the path is a "/"
    // the function() will run to provide a response; 3 arguments req-request, res-respone, next(won't be used in this app)

    //req = request client made
    //res = response the server will send back

    res.json({ 'message': 'Hello, I am an Azure App!' }) // respond with json object with a message

})

module.exports = router 
// with module.exports, another file will be able to include/require...
//...this file. And it will be able to access the router object in this file. 

