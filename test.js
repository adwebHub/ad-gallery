const axios = require('axios');
const fs = require('fs');

const username = 'ppapapanagiotou@adweb.gr'; // Replace with your WordPress username
const applicationPassword = '1ppC stRF CMmo iW6A pUgU htF5'; // Replace with your WordPress application password

async function uploadMedia() {
    try {
        const filePath = './image.jpg'; // Replace with the path to your image file

        const fileData = fs.readFileSync(filePath);

        const config = {
            headers: {
                'Authorization': `Basic ${Buffer.from(`${username}:${applicationPassword}`).toString('base64')}`,
                'Content-Type': 'image/jpeg',
                'Content-Disposition': 'attachment; filename=image.jpg', // Replace 'image.jpg' with the desired filename
            },
        };

        const response = await axios.post('https://canvas.adweb.gr/wp-json/wp/v2/media', fileData, config);
        const responseData = response.data;

        console.log('Response:', responseData);
    } catch (error) {
        console.error('Error:', error);
    }
}

uploadMedia();
