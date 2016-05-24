var mongoose = require('mongoose');
var moment = require('moment');

var CustomerSchema = new mongoose.Schema({
	name: { type: String,  required: true, index: { unique: true }},
	moment: {type: String}, 
	created_at: {type: Date, default: new Date}

});

mongoose.model('Customer', CustomerSchema);