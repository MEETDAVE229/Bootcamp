import { mongoDBConnection } from "./index";
import { authSchema } from "./validation";

export const createdata = async (req: any, res: any) => {
  const { id, name, contact } = req.body;
  try {
    const result = await authSchema.validateAsync(req.body);

    const MongoClient = new mongoDBConnection();
    const response = await MongoClient.db("navigcollection")
      .collection("pract")
      .insertOne({
        id: result.id,
        name: result.name,
        contact: result.contact,
      });
    res.status(200).send(response);
  } catch (error) {
    if (error.isJoi === true) {
      res.status(422).send(error);
    }
    res.status(500).send(error);
  }
};
