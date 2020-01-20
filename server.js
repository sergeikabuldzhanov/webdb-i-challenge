const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//routers
const accountsRouter = require("./accounts-router");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api/accounts", accountsRouter);

function serverErrorCatcher(error,req,res,next) {
    res.status(500).json(error);
}

server.use(serverErrorCatcher);

module.exports = server;
