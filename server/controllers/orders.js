var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');
var Order = mongoose.model('Order');
var moment = require('moment');

module.exports = {
	index: function(req, res){
		Order.find({})
		.populate('_product')
		.populate('_customer')
		.exec(function(err, results){
			if(err){
				console.log(err)
			}
			else{
				// console.log(results);
				res.json(results)
			}
		})
	},

	create: function(req, res){
		Customer.findById(req.body._customer, function(err, customer){
			if(err){
				console.log(err)
			}
			else{
				Product.findById(req.body._product, function(err, product){
					if(err){
						console.log(err)
					}
					else{
						var newOrder = new Order(req.body);
						newOrder.moment = moment().format("MMM Do YYYY");
						newOrder._customer = customer._id;
						newOrder._product = product._id;
						//check code^

						newOrder.save(function(err){
							if(err){
								console.log(err)
							}
							else{
								product.quantity -=req.body.quantity;
								product.save(function(err){
									if(err){
										console.log(err)
									}
									else{
										res.json(true);
									}
								})



							}
						})
					}
				})
			}
		})
	},

	delete: function(req, res){
		Order.remove({_id: req.params.id}, function(err){
			if(err){
				console.log(err)
			}
			else{
				res.json(true);
			}
		})
	}


}