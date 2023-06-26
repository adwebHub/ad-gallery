const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 5000;
console.log(process)
if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
} else {
    app.use(express.static('build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}


app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server is running on port: ', port);
})