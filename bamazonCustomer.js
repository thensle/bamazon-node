var mysql = require("mysql");
var inquirer = require("inquirer");
var query = "Select * from products";

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "pu55ypause!",
	database: "bamazon"
});

connection.connect(function(err){
	if(err){
		console.log(err);
	} else{
		console.log("Welcome to Bamazon!");
		console.log("\n\nProducts for Sale:");
		console.log("=======================\n\n");
		itemsDisplay();
	};
});

function itemsDisplay(){
	var productId = [];

	connection.query(query, function(error, response){
		if (error){
			console.log(error);
		} else {
			for(var i = 0; i < response.length; i++){
				var descriptor = "";

				console.log(response[i].product_name + " ID Number: " + response[i].item_id);
				console.log("Within the " + response[i].department_name + " department");
				console.log("Only " + response[i].stock_quantity + " left at $" + response[i].price + " each!\n\n");

				descriptor = response[i].product_name + " - " + response[i].item_id;
				productId.push(descriptor);
			};

			customerPrompt1(productId);
		};
	});
};

function customerPrompt1(productInfo){
	var checkout = "CheckOut my Cart";
	var options = productInfo.push(checkout);

	inquirer.prompt([
		{
			name: "productName",
			type: "list",
			message: "Select the product you'd like to purchase - OR - select the 'CheckOut' option",
			choices: productInfo
		}
	]).then(function(data){
		if(data.productName === "CheckOut my Cart"){
			checkout();
		} else {
			quantity(data.productName);		
		};
	});
};

function quantity(product){
	var state = "selected";
	inquirer.prompt([
		{
			name: "quantity",
			type: "input",
			message: "How many of " + product + " would you like to purchase?",
			validate: function(input){
				if(typeof input != "number" && input % 0 === false){
					console.log("\n\n That's not a valid quantity number! Try again.");
					
					setTimeout(function(){
						quantity(product);
					}, 3000);
				};
			};
		}
	]).then(function(data){
		var quantity = data;
		
	};

function checkout(){};