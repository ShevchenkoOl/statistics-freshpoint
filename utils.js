const fs = require('fs');

function forecastSales(sales) {
  const rawData = fs.readFileSync('weekly-sales.json');
  const data = JSON.parse(rawData);
  return data;
}

module.exports = {
    forecastSales,
  };
