var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var moment = require('moment');

module.exports = {

	 index: function(req, res){
	 	Customer.find({}).exec(function(err, results){
	 		if(err){
	 			console.log(err)
	 		}
	 		else{
	 			res.json(results);
	 		}
	 	})
	 },

	 create: function(req, res){
	 	// var newCustomer = new Customer(req.body);

	 	 var customer = new Customer();

 			 customer.name     = req.body.name;
  			 customer.moment = moment().format("MMM Do YYYY");	
  			 customer.created_at = new Date();
  			 customer.verify   = false;

	 	customer.save(function(err, results){
	 		if (err) {
		      console.log(err);
		      if (err.code == 11000) {
		      	console.log('username or email already taken');
		      	res.status(400);
		        res.json({ success: false, message: 'username or email already taken'})
		      } else {
		        return res.send(err);
		      }
		    } 
		    else {
		    	res.json({ success: true, message: 'User created'})
		    }	    
		})	
	 },

	 delete: function(req, res){
	 	Customer.remove({_id: req.params.id}, function(err){
	 		if(err){
	 			console.log(err);
	 		}
	 		else{
	 			res.json(true);
	 		}
	 	})
	 },

	 update: function(req, res) {

	 	Customer.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name}}, {new: true}, function(err){
	 		if(err){
	 			console.log(err)
	 		}
	 		else{
	 			console.log("done");
	 			res.json(true);

	 		}
	 	})
	},
	
	show: function(req, res) {
		// console.log(req.params.id);
	 	Customer.findById(req.params.id).exec(function(err, results){
	 		if(err){
	 			console.log(err)
	 		}
	 		else{
	 			console.log(results)
	 			res.json(results);

	 		}
	 	})
	}  	
}






















