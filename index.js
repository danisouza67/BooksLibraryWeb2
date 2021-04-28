const http = require("http"),
axios = require("axios"), 
logger = require("morgan"),
cors = require("cors"),
express = require("express"),
bodyParser = require("body-parser");
mongoose = require('mongoose');

var app = express();
var port = 8000;


app.use(bodyParser.json())
app.use(logger('tiny'));
app.use(require('./routes'));




let users, mass = [];

(async function getNames() {
  try {
    const { data } = await axios.get(
      "https://swapi.dev/api/people/"
    );
    users = data.results.map(char => char.name);
    mass = data.results.map(char => char.mass)
  } catch (error) {
    console.log(error);
  }
})();


//Mongoooooose-----
// mongoose.connect('mongodb://27017-cyan-donkey-z8s39evd.ws-eu03.gitpod.io');

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, {userNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));
//-------------



app.listen(port, (err) => {
    console.log("Listening on port: " + port);
})
// app.use(logger('dev'));
