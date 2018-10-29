const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

//input helper function titles below to export
module.exports = {
  find,
  findByID,
  add,
  remove,
  update
};

//write helper functions below
function find() {
  return db("notes");
}

function findByID(id) {
  return db("notes").where({ id: id });
}

function add(note) {
  return db("notes")
    .insert(note)
    .into("notes");
}

function remove(id) {
  return db("notes")
    .where({ id })
    .del();
}

function update(id, changes) {
    return db('notes')
    .where({id:id})
    .update(changes);
}