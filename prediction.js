const { forecastSales } = require('./utils');
const salesData = require('./weekly-sales.json');

const sales = salesData.map(sale => [new Date(sale.timestamp), sale.value]);

const forecast = forecastSales(sales);
console.log(forecast);

