const express = require("express");
const app = express();
const session = require('express-session');


app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({
   secret: 'keyboardkitteh',
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
 }))
 

 app.get('/' , (req , res) => {
   res.render('index')
});

app.post('/result' , (req , res) => {
   
   var name = req.body.name;
   var loc = req.body.loc;
   var lan = req.body.lan;
   var comment = req.body.comment;
   console.log( name);
   res.render('result' , {name : name , loc : loc , lan : lan , comment :comment})
});





app.use(express.static(__dirname + "/static"));

app.use(express.static(__dirname + "/static/images"));

app.listen(8000, () => console.log("listening on port 8000"));