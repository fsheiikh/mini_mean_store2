var mongoose = require('mongoose');
var moment = require('moment');
// require('mongodb-moment')(moment)

var ProductSchema = new mongoose.Schema({

	name: String, 
	image: String,
	description: String,
	quantity: Number,
	created_at: {type: Date, default: new Date}

})

mongoose.model('Product', ProductSchema);