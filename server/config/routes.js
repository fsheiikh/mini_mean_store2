
var Order = require('./../controllers/orders');
var Customer = require('./../controllers/customers');
var Product = require('./../controllers/products');

module.exports = function(app) {

	app.get('/customer', Customer.index);

	app.post('/customer', Customer.create);

	app.delete('/customer/:id', Customer.delete);

	app.put('/customer/:id', Customer.update);

	app.get('/customer/:id', Customer.show);



	app.get('/product', Product.index);

	app.post('/product', Product.create);



	app.get('/order', Order.index);

	app.post('/order', Order.create);

	app.delete('/order/:id', Order.delete);

}