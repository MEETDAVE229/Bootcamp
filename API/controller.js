const createHttpError = require("http-errors");
const mongoDBConnection = require("./index");
const { authSchema } = require("./validation");
const createdata = async (req, res) => {
  const { id, name, contact } = req.body;
  try {
    const result = await authSchema.validateAsync(req.body);

    const MongoClient = await mongoDBConnection.mongoDB();
    const response = await MongoClient.db("navigcollection")
      .collection("pract")
      .insertOne({
        id: result.id,
        name: result.name,
        contact: result.contact,
      });
    res.status(200).send(response);
    const exist = await response.findOne({ id: result.id });
    if (exist) {
      throw createError.Conflict(`${result.id} is already been registered`);
    }
  } catch (error) {
    if (error.isJoi === true) {
      res.status(422).send(error);
    }
    res.status(500).send(error);
  }
};
module.exports = createdata;
