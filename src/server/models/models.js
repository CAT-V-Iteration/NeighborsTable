const { Pool } = require('pg');
// require('dotenv').config()

const POSTGRES = 'postgres://akzzewyw:l3RD87yL2bwAWGSZZ2jd-R82UxPwkwiH@drona.db.elephantsql.com:5432/akzzewyw'
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: POSTGRES
});

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };
