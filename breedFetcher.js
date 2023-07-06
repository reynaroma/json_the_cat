const request = require('request');
// Get the breed name from command-line arguments
const breedName = process.argv[2];

// Check if breed name is provided
if (!breedName) {
  console.log('Please provide a breed name.');
  process.exit(1);
}

// Construct the API endpoint URL with the specified breed name
const url = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}typo`;

request(url, (error, response, body) => {
  if (error) {
    console.log('Request failed:', error);
  } else {
    const data = JSON.parse(body);

    // Check if breed data is found
    if (data.length === 0) {
      console.log('Breed not found!');
    } else {
      console.log('Description:', data[0].description);
    }
  }
});

//console.log('Body content:', data);
//console.log('Description:', data[0].description)
//console.log('statusCode:', response && response.statusCode);
//console.log('Type of body:', typeof data);