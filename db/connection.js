const { Pool } = require("pg")
 
const connection = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'thecourse',
})

module.exports = connection