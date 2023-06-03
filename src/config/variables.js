const dotenv = require('dotenv').config();

const DB_URL = `${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_DBNAME}`;
const PORT = process.env.PORT;

module.exports = {DB_URL, PORT}
