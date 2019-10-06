const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get("/cats", (req, res) => {
   // hard-coded user data
   var catArry = [
       {name: "Michael", pic: "/images/cat.jpg"}, 
       {name: "Jay", pic: "/images/cat1.jpg"}, 
   ];
   res.render('cats', {cats: catArry});
});

// app.get("/Michael", (req, res) => {
//    // hard-coded user data
//    var catArry = [
//        {name: "Michael", pic: "/images/cat.jpg"}, 
//        {name: "Jay", pic: "/images/cat1.jpg"}, 
//    ];
//    res.render('cats', {cats: catArry});
// });

app.get("/Michael", (req, res) => {
   // hard-coded user data
      var dets={name: "Michael",food:"spaghetti", pic: "/images/cat.jpg", age: 2, sleeping_spot : "under the bed"}
   res.render('details', {cat: dets});
});

app.get("/Jay", (req, res) => {
   // hard-coded user data
      var dets={name: "jay",food:"tona", pic: "/images/cat1.jpg", age: 3, sleeping_spot : "on the sofa"}
   res.render('details', {cat: dets});
});


app.use(express.static(__dirname + "/static"));

app.use(express.static(__dirname + "/static/images"));

app.listen(8000, () => console.log("listening on port 8000"));