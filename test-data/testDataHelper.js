const fs = require("fs");

// Helper function to read data from the JSON file
function readTestData(filePath) {
  const rawData = fs.readFileSync(filePath); // Reads the JSON file
  return JSON.parse(rawData); // Converts raw data into JSON format
}

module.exports = { readTestData };
