import express from "express";

const app = express();

//middlewares
app.use(express.json());

//connections & listeners
app.listen(2000, () => console.log("Server Open"));
