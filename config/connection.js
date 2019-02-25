// {
//   "development": {
//     "username": "root",
//     "password": "root",
//     "database": "bamazon_db",
//     "host": "localhost",
//     "port": 3306,
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//       "use_env_variable":"JAWSDB_URL",
//       "dialect":"mysql" 
//   }
// }
var mysql = require("mysql");
var connection
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db",
  // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon_db'
  })
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;