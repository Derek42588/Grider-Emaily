const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'buddy ' });
});

app.get('/greeting', (req, res) => {
  res.send({ denise: 'butt' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
