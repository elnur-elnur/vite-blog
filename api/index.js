import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// install npm dotenv for environment variables
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected !!!"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Listening on port 3000 !!!!");
});
