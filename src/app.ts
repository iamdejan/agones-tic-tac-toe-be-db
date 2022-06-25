import cors from "cors";
import express from "express";
import handleRoutes from "./handlers";
import connectToDatabase from "./utils/mongo.utility";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

connectToDatabase();

handleRoutes(app);

app.listen(3002, () => {
  console.log("listening on *:3002");
});
