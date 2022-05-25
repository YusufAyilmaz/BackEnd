const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const loaders = require("./loaders");
const cors = require("cors");

config();
loaders();

const app = express();

app.use(helmet());
app.use(express.json());

app.use(
  cors({ origin: ["http://localhost:8080","http://localhost:8405"], methods: ["GET"], credentials: true })
);

module.exports = app;
