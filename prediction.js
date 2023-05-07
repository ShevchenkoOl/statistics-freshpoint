function makePrediction(data, params) {
    const windowSize = params.windowSize || 3;
  
    const predictions = [];
  
    for (let i = 0; i < data.length; i++) {
      let sum = 0;
  
      for (let j = i; j < i + windowSize && j < data.length; j++) {
        sum += data[j];
      }
  
      predictions.push(sum / windowSize);
    }
  
    return predictions;
  }
  
  module.exports = { makePrediction };
  