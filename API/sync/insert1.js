var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, databases) {
  if (err) {
    throw err;
  }
  var nodetestDB = databases.db("navigcollection"); //here
  var customersCollection = nodetestDB.collection("pract");
  var customer = {
    id: 1,
    name: "xyz",
    contact: 3444,
  };

  customersCollection.insertOne(customer, function (error, response) {
    if (error) {
      throw error;
    }

    console.log("1 document inserted");
    databases.close();
  });
});
