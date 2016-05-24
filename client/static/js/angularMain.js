var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: "/partials/customers.html"
	})

	.when('/customers', {
		templateUrl: "/partials/customers.html"
	})
	.when('/customers/update/:id', {
		templateUrl: "/partials/update.html"
	})
	.when('/orders', {
		templateUrl: "/partials/orders.html"
	})
	.when('/products', {
		templateUrl: "/partials/products.html"
	})
	.when('/dashboard', {
		templateUrl: "/partials/dashboard.html"
	})

	.otherwise({
		redirectTo: '/'
	})

})