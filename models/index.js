const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT;

// Database Name
const dbName = process.env.DB_NAME;

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  //assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});