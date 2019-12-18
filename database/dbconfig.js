const knex = require("knex");

const knexFile = require("../knexfile.js");

const environment = process.env.ENVIRONMENT;
const knexConfig = knexFile[environment];
const database = knex(knexConfig);

module.exports = database;
