var mySQL = require("mysql");
require("dotenv").config();

var connection;


if (process.env.JAWSDB_URL) {
  connection = mySQL.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mySQL.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "burgers_db"
  });
}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
