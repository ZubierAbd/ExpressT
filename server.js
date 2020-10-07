const express = require('express')
const path = require('path')
const app = express();
const membersRouter = require('./routes/api/members')
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000;

const moment = require('moment')

const logger = require('./middleware/logger');
const bodyParser = require('body-parser');




//Initiate middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(logger)
app.use(express.static(path.join(__dirname, 'public'))) //Set public as static
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/members', membersRouter)
//Middle ware functions are functions which have access to req/res 

app.get('/', (req, res) => {
    res.render('index', { title: 'Members' })
})
app.listen(PORT, () => {
    console.log('SERVER LISTENING AT PORT 3000')
})