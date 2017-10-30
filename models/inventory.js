var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/inventory');
var db = mongoose.connection;

var InventorySchema=mongoose.Schema({
	item:{
		type:String,
		index:true
	},
	quantity:{
		type:String
	},
	price:{
		type:String
	}

});

var Inventory = module.exports = mongoose.model('Inventory', InventorySchema);

module.exports.createItem = function(newInventory, callback){
newInventory.save(callback);
};
module.exports.listItems=function(callback){
Inventory.find({},callback);
};


