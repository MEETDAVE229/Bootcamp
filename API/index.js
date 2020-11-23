const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const createdata = require("./controller");
const app = express();

let connectionString = `mongodb://localhost:27017`;
async function mongoDBConnection() {
  try {
    let connectDbMongo = await MongoClient.connect(`${connectionString}`, {
      useNewUrlParser: true,
      poolSize: 50,
      maxPoolSize: 100,
      minSize: 10,
    });
    return connectDbMongo;
  } catch (err) {
    throw err;
  }
}
app.use(express.json());
app.listen(3000, async () => {
  console.log("Server listening at port: 3000");
  await mongoDBConnection();
});
app.post("/create-data", createdata);

app.get("/testRoute", (req, res) => res.end("Hello from Server!"));

module.exports.mongoDB = mongoDBConnection;
