const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.redirect('/index.html')
});

app.use(express.static(__dirname + "/static"));

app.use(express.static(__dirname + "/static/images"));

app.listen(8000, () => console.log("listening on port 8000"));