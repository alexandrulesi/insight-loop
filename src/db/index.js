const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.PGURI,
});

// const mysql = require('mysql');
// const db = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
// });

async function getInsight() {
  await client.connect();
  const res = await client.query(
    'SELECT description, source FROM public.insights'
  );
  await client.end();
  return res.rows[0];
}

module.exports = { getInsight };
