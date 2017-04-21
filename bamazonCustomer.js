var mysql = require("mysql");
var inquirer = require("inquirer");
var query = "Select * from products";

var connection = mysql.createConnection(){
	host: "localhost",
	port: 5432,
	user: "root",
	password: "pu55ypause!",
	database: "bamazon"
};

connection.connect(function(err){
	if(err){
		console.log(err);
	} else{
		console.log("Welcome to Bamazon!");
	};
});

connection.query(query, function(error, response){
	if (error){
		console.log(error)
	} else {

		console.log("Products for Sale:");
		console.log("=======================\n\n");
		for(var i = 0; i < response.length; i++){
			console.log(response[i].product_name + "\tID Number: " + (response[i].item_id);
			console.log("\n\nWithin the " + response[i].department_name + " department");
			console.log("Only " + response[i].stock_quantity + " left at $" + response[i].price + "each!");
		};
	};
});