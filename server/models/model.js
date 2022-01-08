const { Pool } = require('pg');

const myURI = "postgres://uqtgujrt:weLv_2FCN_1jieKOuQhqXt60XWuK8gTc@kashin.db.elephantsql.com/uqtgujrt";

const URI = process.env.PG_URI || myURI;

// connects URI to database
const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}; 