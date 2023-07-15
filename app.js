const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'));

const port = 5000;

app.listen(port, () => console.log('Server up: ' + port) );

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/offers', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/offers.html'));
});

app.get('/official_stores', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/official_stores.html'));
});

app.get('/sell', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/sell.html'));
});

app.get('/assistance', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/assistance.html'));
});