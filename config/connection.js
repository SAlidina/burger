// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "y0sc9a7v8b7jpqwh",
    password: "ukzad4lzvdeqan5y",
    database: "a8x0rgm43szxm5up"
  });
}




// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;