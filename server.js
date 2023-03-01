const express = require("express");
const ServerlessHttp = require("serverless-http");

const app = express();

app.get("/", async (req, res) => {
  res.send("Hello world");
});

app.get("/get-number", async (req, res) => {
  const num = Math.random() * 100;
  res.send(`This is random number you deserve ${num}`);
});

if (process.env.ENVIRONMENT === "lambda") {
  module.exports = ServerlessHttp(app);
} else {
  app.listen(9000, () => {
    console.log("server started");
  });
}
