const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'));

const port = 5000;

app.listen(port, () => console.log('Server up: ' + port) );

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
