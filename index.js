const fs = require("fs/promises");
const path = require("path");

const rawData = path.join(__dirname, "weekly-sales.json");

const readWeeklySalesData = async () => {
  const data = await fs.readFile(rawData);
  return JSON.parse(data);
};

const weeklySales = async (statistics) => {
  await fs.writeFile(rawData, JSON.stringify(statistics, null, 2));
};

const rollingAverage = (data, windowSize) => {
  const result = [];
  for (let i = windowSize; i < data.length; i++) {
    const sum = data
      .slice(i - windowSize, i)
      .reduce((acc, cur) => acc + cur.value, 0);
    const average = sum / windowSize;
    result.push({ timestamp: data[i].timestamp, value: average });
  }
  return result;
};
(async () => {
  const data = await readWeeklySalesData();
  const windowSize = 3;
  const forecast = rollingAverage(data, windowSize);
  console.log(forecast);
})();
