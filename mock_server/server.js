const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

var app = express();

/* use middleware to format the response body */
app.use(bodyParser.json());


/* define mock routes */
app.get('/order_by_id/:id', (req, res) => {
    let id = req.params.id;
    let filepath = `./mock_files/order${id}.json`;

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    })
});

app.get('/product_by_id/:id', (req, res) => {
    let id = req.params.id;
    let filepath = `./mock_files/products.json`;
    let obj_by_id = null;

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        obj_by_id = JSON.parse(data).filter((obj) => {
            return obj.id === id;
        });

        res.send(obj_by_id);
    })
});

app.get('/customers', (req, res) => {
    let filepath = `./mock_files/customers.json`;

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    })
});

app.listen(3000, () => {
    console.log('Started mock server on port 3000');
});

module.exports = {
    app
};