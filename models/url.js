var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var urlSchema = new Schema({
  url: String,
  slang: String,
  type: String
  
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('urlModel', urlSchema);