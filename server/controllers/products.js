var mongoose = require('mongoose');

var Product = mongoose.model('Product');

module.exports = {

	index: function(req, res){
		Product.find({}).exec(function(err, results){
			if(err){
				console.log(err);
			}
			else{
				res.json(results);
			}
		})
	},

	create: function(req, res){
		var newProduct = new Product(req.body);

		newProduct.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				res.json(true);
			}
		})

	}




}