const axios = require('axios');

axios.get('https://canvas.adweb.gr/demo/backend.json')
    .then(response => {
        const data = response.data;
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
    });