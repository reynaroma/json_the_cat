const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  // Check if breed name is provided
  /*if (!breedName) {
    console.log('Please provide a breed name.');
    process.exit(1);
  }*/
  // Construct the API endpoint URL with the specified breed name
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      // Check if breed data is found
      if (data.length === 0) {
        callback(new Error('Breed not found!'), null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };