const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const server = express();

server.use(morgan("dev"));
server.use(helmet());

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log("I'll be your server tonight, can I get your drinks started?");
});
