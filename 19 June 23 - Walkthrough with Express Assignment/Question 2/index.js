// Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express

const express = require('express');
const app = express();
const port = 3000;


let counter = 0;


app.use(express.json());


app.get('/', (req, res) => {
    res.json({ counter });
});


app.get('/increment', (req, res) => {
    counter += 1;
    res.json({ counter });
});


app.get('/decrement', (req, res) => {
    counter -= 1;
    res.json({ counter });
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
