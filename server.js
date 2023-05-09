const express = require('express');
const bodyParser = require('body-parser');
const { forecastSales } = require('./utils');

const app = express();
app.use(bodyParser.json());

app.post('/predict', (req, res) => {
  const { params, data } = req.body;

  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ error: 'Invalid data provided' });
  }

  // Extract parameter values
  const paramValues = {};
  params.forEach(param => {
    paramValues[param.name] = param.value;
  });

  // Extract data values and format timestamp to ISO format
  const sales = data.map(item => {
    const timestamp = new Date(item.timestamp);
    if (isNaN(timestamp)) {
      throw new Error('Invalid date format');
    }
    return {
      timestamp: timestamp.toISOString(),
      value: item.value
    };
  });

  // Call forecast function
  const result = forecastSales(sales, paramValues);

  // Format output data
  const output = result.map(({ timestamp, value }) => ({
    timestamp: new Date(timestamp).toISOString(),
    value
  }));

  // Send response
  res.json({ data: output });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
