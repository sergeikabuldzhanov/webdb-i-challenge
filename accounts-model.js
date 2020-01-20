const db = require("./data/dbConfig.js");
//DB helpers
function get(id) {
  if (id) {
    return db("accounts").where({ id }).first();
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

module.exports = {
    get,
    insert,
    update,
    remove
}