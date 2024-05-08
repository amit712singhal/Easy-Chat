import { connect } from "http2";
import app from "./app.js";
import { connecttodatabase } from "./db/connection.js";

//connections & listeners
const PORT = process.env.PORT || 5000;
connecttodatabase()
  .then(() => {
    app.listen(5000, () => console.log("Server Open & Connected to Database"));
  })

  .catch((err) => console.log(err));
