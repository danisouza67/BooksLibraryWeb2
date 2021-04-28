const http = require("http"),
axios = require("axios"), 
logger = require("morgan"),
cors = require("cors"),
express = require("express"),
bodyParser = require("body-parser");

var app = express();
var port = 8000;


app.use(bodyParser.json())
app.use(logger('tiny'));
app.use(require('./routes'));


//create a server object:
// http
//   .createServer(function(req, res) {
//     //   users.forEach(users => {
//     //       res.write( "Name: " + users.join("\n"));
//     //   });
//     res.write( "Name: " + users.join("\n")); //display the list of users on the page
//     res.write("\n\nMass: " + mass.join("\n"))
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

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

app.listen(port, (err) => {
    console.log("Listening on port: " + port);
})
// app.use(logger('dev'));
