const express = require('express');
const bodyParser = require('body-parser');
const { makePrediction } = require('./prediction');

const app = express();

app.use(bodyParser.json());

app.post('/predict', (req, res) => {
  const { params, data } = req.body;

  const prediction = makePrediction(data, params);

  res.json({ data: prediction });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
