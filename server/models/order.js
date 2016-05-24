var mongoose = require('mongoose');
var moment = require('moment');

var OrderSchema = new mongoose.Schema({

	_customer: {type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
	_product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
	quantity: Number,
	created_at: {type: Date, default: new Date},
	moment: String

})

mongoose.model('Order', OrderSchema);