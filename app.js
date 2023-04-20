const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection')
const bodyParse = require('body-parser')
const mysql = require('mysql')
const routes = require('./routes/routes')
const app = express();
app.set('port', 8080)

app.set('views', __dirname + '/views');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended:false}))
// app.use(express(json));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password:'',
    port: 3308,
    database: 'papeleria_test'
}));

app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'))
});

app.use('/', routes)
app.get('/', (req, res) =>{
    res.render('home')
})