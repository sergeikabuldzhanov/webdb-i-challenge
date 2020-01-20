const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const db = require("./data/dbConfig.js");
//DB helpers
function get(id) {
  if (id) {
    return db("accounts").where({ id });
  }
  return db("accounts");
}

function insert(data) {
    return db('accounts').insert(data);
}

function update(id, data) {
    return db('accounts').where({id}).update(data);
}

function remove(id) {
    return db('accounts').where({id}).del();
}

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

module.exports = server;
