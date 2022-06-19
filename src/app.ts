import express from "express";
import http from "http2";
import mongoose from "mongoose";

const app = express();
const server = http.createServer(app);

app.get("/healthcheck", (req, res) => {
  res.send({ status: "UP" });
});

const username = "test";
const password = "test";
mongoose.connect(
  `mongodb+srv://${username}:${password}@agonestictactoe.0deyc.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log("connected to MongoDB");
  }
);

app.listen(3002, () => {
  console.log("listening on *:3002");
});
