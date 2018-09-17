const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const phones = require('./phones.json');
const iphone = require('./iphone.json');
const galaxy = require('./galaxy.json');

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/phones', (req, res) => {
  res.status(200).send(phones);
  console.log(phones);
});

app.get('/api/phones/iphone', (req, res) => {
  res.status(200).send(iphone);
  console.log(iphone);
});

app.get('/api/phones/galaxy', (req, res) => {
  res.status(200).send(galaxy);
  console.log(galaxy);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
