// Build a Server Using Http Module NodejS with api endpoints for Getting Products Data


const http = require('http');


const menProducts = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Men's Product ${i + 1}`,
    price: (Math.random() * 100).toFixed(2)
}));

const womenProducts = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Women's Product ${i + 1}`,
    price: (Math.random() * 100).toFixed(2)
}));


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.end(JSON.stringify({ message: "We:come to Men & Women Dummy Data" }));
            break;
        case '/men':
            res.statusCode = 200;
            res.end(JSON.stringify(menProducts));
            break;
        case '/women':
            res.statusCode = 200;
            res.end(JSON.stringify(womenProducts));
            break;
        case '/other':
            res.statusCode = 404;
            res.end(JSON.stringify({ message: "Page not found" }));
            break;
        default:
            res.statusCode = 404;
            res.end(JSON.stringify({ message: "Page not found" }));
            break;
    }
});


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
