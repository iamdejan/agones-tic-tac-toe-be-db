import express from "express";
import http from "http2";
import handleRoutes from "./handlers";
import connectToDatabase from "./utils/mongo.utility";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const server = http.createServer(app);

connectToDatabase();

handleRoutes(app);

app.listen(3002, () => {
  console.log("listening on *:3002");
});
