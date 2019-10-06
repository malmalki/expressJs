const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (request, response) => {
   response.redirect('/index.html')
});
app.get('/cats', (request, response) => {
   response.render('cats')
});
app.get('/cars', (request, response) => {
   response.render('cars')
});
app.get('/cars/new', (request, response) => {
   response.render('form')
});



app.use(express.static(__dirname + "/static"));

app.use(express.static(__dirname + "/static/images"));

app.listen(8000, () => console.log("listening on port 8000"));