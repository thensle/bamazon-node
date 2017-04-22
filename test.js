var mysql = require("mysql");
var inquirer = require("inquirer");
var argu = "Select * from products";
var product = "";
var purchases = [];

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "pu55ypause!",
	database: "bamazon"
});

stockSearch(1);
// connection.connect(function(err){
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log("Welcome to Bamazon!");
// 		console.log("\n\nProducts for Sale:");
// 		console.log("=======================\n\n");
// 		itemsDisplay();
// 	};
// });

// function itemsDisplay(){
// 	var productId = [];

// 	connection.query(argu, function(error, response){
// 		if (error){
// 			console.log(error);
// 		} else {
// 			for(var i = 0; i < response.length; i++){
// 				var descriptor = "";

// 				console.log(response[i].product_name + " ID Number: " + response[i].item_id);
// 				console.log("Within the " + response[i].department_name + " department");
// 				console.log("Only " + response[i].stock_quantity + " left at $" + response[i].price + " each!\n\n");

// 				descriptor = response[i].product_name + " - " + response[i].item_id;
// 				productId.push(descriptor);
// 			};

// 			customerPrompt1(productId);
// 		};
// 	});
// };

// function customerPrompt1(productInfo){
// 	var checkout = "CheckOut my Cart";
// 	var options = productInfo.push(checkout);

// 	inquirer.prompt([
// 		{
// 			name: "productName",
// 			type: "list",
// 			message: "Select the product you'd like to purchase - OR - select the 'CheckOut' option",
// 			choices: productInfo
// 		}
// 	]).then(function(data){
// 		if(data.productName === "CheckOut my Cart"){
// 			checkout();
// 		} else {
// 			quantity(data.productName);		
// 		};
// 	});
// };

// function quantity(product){
// 	product = product;
// 	inquirer.prompt([
// 		{
// 			name: "quantity",
// 			type: "list",
// 			message: "How many would you like to purchase?",
// 			choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
// 		}
// 	]).then(function(data){
// 		var quantity = parseInt(data.quantity);
// 		stockSearch(quantity);
		
// 		//Need to update database with new inventory stock values
// 			//Need to store all purchasing data in an object (maybe within an array?)
// 		// var cart = {}

// 		// connection.query("UPDATE projects ")

// 	});
// };

function stockSearch(quantity){
	connection.query(argu, function(error, response){
		if (error){
			console.log(error);
		} else {

			console.log("This works!");
		// 	for(var i = 0; i < response.length; i++){
		// 		if(product === response[i].product_name + " - " + response[i].item_id){
		// 			var stock = response[i].stock_quantity;

		// 			if(quantity < stock){
		// 				var order = {
		// 					item: product,
		// 					number: quantity
		// 				};
		// 				console.log("\n\nThere's currently enough of the product to fulfill your order. Thank you!");
		// 				purchases.push(order);
		// 				updateDb(product, quantity);
		// 				console.log(purchases);
		// 				itemsDisplay();
		// 			} else {
		// 				console.log("\n\nSorry, there's currently not enough of this product to fulfill your order!");
		// 				itemsDisplay();
		// 			};
		// 		};
		// 	};
		};
	});
};
// function checkout(){};