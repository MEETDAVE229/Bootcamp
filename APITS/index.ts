import express from "express";
const MongoClient = require("mongodb").MongoClient;
import { createdata } from "./controller";
const app = express();

let connectionString = `mongodb://localhost:27017`;
export class mongoDBConnection {
  [x: string]: any;
  constructor() {
    try {
      let connectDbMongo = MongoClient.connect(`${connectionString}`, {
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
}
app.use(express.json());
app.listen(3000, async () => {
  console.log("Server listening at port: 3000");
  new mongoDBConnection();
});
app.post("/create-data", createdata);

app.get("/testRoute", (req: any, res: any) => res.end("Hello from Server!"));
