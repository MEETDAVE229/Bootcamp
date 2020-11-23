var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (error, databases) {
  if (error) {
    throw error;
  }
  var nodtst = databases.db("navigcollection");

  nodtst.collection("pract").findOne({ name: "xyz" }, function (err, result) {
    if (err) throw err;
    console.log(`record found of ${result.name}`);
    databases.close();
  });
});
