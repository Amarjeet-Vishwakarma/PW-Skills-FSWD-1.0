// Build a Server that Generates Random Number Using Expressconst express = require('express');


const express = require('express');
const app = express();
const port = 3000;

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ random: randomNumber });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
