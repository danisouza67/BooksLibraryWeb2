var http = require("http");
const axios = require("axios").default;

//create a server object:
http
  .createServer(function(req, res) {
    res.write( users.join("\n")); //display the list of users on the page
    res.write("\n\n" + emails.join("\n"))
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

let users, emails = [];

(async function getNames() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    users = data.map(user => user.name);
    emails = data.map(email => email.email)
  } catch (error) {
    console.log(error);
  }
})();

// app.use(logger('dev'));
