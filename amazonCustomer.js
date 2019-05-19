var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

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
    showProducts()
 
})

var showProducts = function () {
    console.log("Here are our products: \n");
    var query = "Select * FROM products";
    connection.query(query, function (err, res) {
        {
            if (err) throw err;

            var displayTable = new Table({
                head: ["Item ID", "Product Name", "Department", "Price", "Qty"],
                colWidths: [10, 20, 20, 8, 12]
            });
            for (var i = 0; i < res.length; i++) {
                displayTable.push(
                    [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
                );
            }
            console.log(displayTable.toString());
            // connection.end();
            inquirer.prompt([
                    {
                        name: "item",
                        type: "input",
                        message: "Please pick a product using it's Item Id. \n",
                        validate: function (value) {
                            if (isNaN(value) === false) {
                                return true;
                            }
                            return false;
                        }
                    },
                    {
                        name: "Quantity",
                        type: "input",
                        message: "How many would you like to purchase?",
                        filter: Number
                    }
                ]).then(function(answers){
                    var stockLeft = answers.Quantity;
                    var itemID = answers.item;
                    orderOutput(itemID, stockLeft);
                });
        }

    });
}
// Tells the customer if there is enough product to order
// If there is enough there total is calculated and outputed
function orderOutput(item, numOrdered){
	connection.query('Select * FROM products WHERE item_id = ' + item, function(err,res){
		if(err){console.log(err)};
		if(numOrdered <= res[0].stock_quantity){
			var finalPrice = res[0].price * numOrdered;
            
            console.log("Your total cost for " + numOrdered + " " + res[0].product_name + "(s)" + " is " + "$" + finalPrice + "\n");

			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + numOrdered + "WHERE item_id = " + item);
		} else{
			console.log("Insufficient quantity of " + res[0].product_name + "to complete your order.");
		};
		
    });
};


