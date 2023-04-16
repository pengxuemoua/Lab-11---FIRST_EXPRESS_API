// server.js will be the code that will start the server

let express = require('express')  // require 'express' library

// require the new route file that has been created in routes.js
let routes = require('./routes/routes') // access routes dir, routes.js file

let path = require('path')

let app = express() //create web app

let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist') // express server, serving vueApp code
let vueApp = express.static(pathToVueApp)
app.use('/', vueApp)

// tell app to use the route we created
app.use('/api', routes)

// start the server running. Have app listen to requests on a particular port.
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})
