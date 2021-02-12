const express = require('express');
const app = express();

const routes = require('./src/routes/insights');

app.use(express.json());

app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
