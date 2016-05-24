myApp.factory('CustomerFactory', function($http){

	var customers = {};
	
	customers.create = function(input, callback) {

		$http.post('/customer', input).success(callback).error(function() {
			alert('Customer Name already taken');
		});
	}

	customers.index = function(callback) {
		$http.get('/customer').success(callback);
	}

	customers.remove = function(id, callback) {
		$http.delete('/customer/' + id).success(callback);
	}


	customers.update = function(id, input, callback) {
		// console.log(id, input);
		$http.put('/customer/' + id, input).success(callback);
	}

	customers.show = function(id, callback) {

		$http.get('/customer/'+id).success(callback);
	}



	return customers;
})

myApp.factory('ProductFactory', function($http){

	var products = {};

	products.index = function(callback) {
		$http.get('/product').success(callback);	
	} 

	products.create = function(input, callback) {
		$http.post('/product', input).success(callback);
	}

	return products;
})

myApp.factory('OrderFactory', function($http){
	var orders = {};

	orders.index = function(callback) {
		$http.get('/order').success(callback);
	}

	orders.create = function(input, callback) {
		$http.post('/order', input).success(callback);
	}

	orders.remove = function(id, callback) {
		$http.delete('/order/' + id).success(callback);
	}

	return orders;
})

















