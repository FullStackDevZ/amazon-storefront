var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "amazon"
});

connection.connect(function (error) {
    if (error !== null) {
        throw new Error("Can't connect", error.message);
    } else {
        console.log('Connected to dataBase at ' + connection.threadId);
        afterConnection();
    }
});

function afterConnection() {

    connection.query('Select * FROM songs', function (error, result) {
        if (error) {
            throw new Error('UnaBle to query the DB', error.message);
        } else {
            console.log(result);
        }

        connection.end();
    });

}