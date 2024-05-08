import { connect, disconnect } from "mongoose";

async function connecttodatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Cannot connect to Mongo_DB");
  }
}

async function disconnectfromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Cannot disonnect to Mongo_DB");
  }
}

export { connecttodatabase, disconnectfromDatabase };
