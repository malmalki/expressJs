const express = require("express");
const app = express();
const session = require('express-session');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({
   secret: 'keyboardkitteh',
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
 }))
 

 app.get('/' , (req , res) => {
   if ("counter" in req.session == false ){
      req.session.counter = 1
   }else{
      req.session.counter += 1;
   }
  
   res.render('index', { counter:  req.session.counter})
});
app.get('/byone' , (req , res) => {
   if ("counter" in req.session == false ){
      req.session.counter = 1
   }else{
      req.session.counter += 1;
   }
  
   res.render('index', { counter:  req.session.counter})
});

app.get('/bytwo' , (req , res) => {
   if ("counter" in req.session == false ){
      req.session.counter = 1
   }else{
      req.session.counter += 2;
   }
  
   res.render('index', { counter:  req.session.counter})
});

app.get('/reset' , (req , res) => {
   if ("counter" in req.session == true ){
      req.session.counter = 0
   }
   res.redirect('/')
});

app.use(express.static(__dirname + "/static"));

app.use(express.static(__dirname + "/static/images"));

app.listen(8000, () => console.log("listening on port 8000"));