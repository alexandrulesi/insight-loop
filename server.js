const express = require('express');
const app = express();

const routes = require('./src/routes/insights');

app.use(express.json());

app.use('/', routes);

app.listen(5000, () => {
  console.log('App listening on port 5000!');
});
