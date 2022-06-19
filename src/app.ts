import express from "express";
import http from "http2";

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.listen(3002, () => {
  console.log('listening on *:3002');
});
