//Importing dependecies 
const express = require('express')
const path = require('path')

const apiRoutes = require('./routes/api')
const webRoutes = require('./routes/web')

const app = express()

//Defining the path to the mock database
global.mock_db = path.join(__dirname, './data/mock_db.json')

//Middleware to parse incoming requests 
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

//View Engine
//pug location
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//importing the CSS and JS files
app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

//Importing API and web routes
app.use('/api', apiRoutes)
app.use('/', webRoutes)

//Starting the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

