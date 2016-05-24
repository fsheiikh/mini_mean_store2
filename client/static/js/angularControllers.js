myApp.controller('CustomersController', function(CustomerFactory,$routeParams){

	var self = this;

	this.customers;
	this.each;

	this.create = function(input) {
		input = {name: input.name, moment: moment().format("MMM Do YYYY")}

		CustomerFactory.create(input, self.index)
	}

	this.index = function(){
		CustomerFactory.index(function(data){
			// console.log(data)
			self.customers = data;
			self.newCustomer = {};

		})
	}

	this.remove = function(id) {
		CustomerFactory.remove(id, self.index)
	}

	this.update = function(id, input) {
		console.log(id, input);
		CustomerFactory.update(id, input, self.index);
		
	}

	this.show = function(id){
		
		CustomerFactory.show(id, function(data){
			self.each = data;
			console.log(self.each)
			
		});
	}

	this.show($routeParams.id);
	// console.log(self.each)
	this.index();

})

myApp.controller('ProductsController', function(ProductFactory){

	var self = this;

	this.products;

	this.index = function(){
		ProductFactory.index(function(data){
			// console.log(data) <-- works!
			self.products = data;
			self.newProduct = {};
		})
	}

	this.create = function(input) {
		ProductFactory.create(input, self.index)
	}

	self.index();
})

myApp.controller('OrdersController', function(OrderFactory, ProductFactory, CustomerFactory){
	var self = this;

	this.orders;

	CustomerFactory.index(function(data){
		self.customers = data;
	})

	ProductFactory.index(function(data){
		self.products = data;
	})

	this.index = function(){
		OrderFactory.index(function(data){
			self.orders = data;
			self.newOrder = {};
		})
	}

	this.create = function(input){
		OrderFactory.create(input, self.index);

	}

	this.remove = function(id){
		OrderFactory.remove(id, self.index);
	}

	

	self.index();

})
















