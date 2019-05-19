var mysql = require("mysql");
var inquirer = require("inquirer");

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

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    startScreen()

    // checkStock()
    // connection.end()
})

function startScreen() {
    console.log("Here are our products: \n");
    connection.query(
        "SELECT * FROM products", function (err, res) {
            if (err) throw err;
            console.log(res);
            // connection.end();
            inquirer
                .prompt([
                    {
                        name: "item",
                        type: "input",
                        message: "Please pick a product using it's Item Id.",
                        validate: function (value) {
                            if (isNaN(value) === false) {
                                return true;
                            }
                            return false;
                        }

                    }
                ])
            // .then(function (answer) {
            //     var chosenItem;
            //     for (var i = 0; i < results.length; i++) {
            //         if (results[i].item_name === answer.choice) {
            //             chosenItem = results[i];
            //         }
            //     }
            // }}

            // )
        })


    // function checkStock() {
    //     // query the database for all items being auctioned
    //     connection.query("SELECT * FROM products", function (err, results) {
    //         if (err) throw err;
    //         // once you have the items, prompt the user for which they'd like to bid on
    //         inquirer
    //             .prompt([
    //                 {
    //                     name: "choice",
    //                     type: "input",
    //                     choices: function () {
    //                         var choiceArray = [];
    //                         for (var i = 0; i < results.length; i++) {
    //                             choiceArray.push(results[i].item_id);
    //                         }
    //                         return choiceArray;
    //                     },
    //                     message: "You chose" + item_id + product_name + "/n",
    //                     message: "How many would you like?"
    //                 },

    //             ])

    //     }
