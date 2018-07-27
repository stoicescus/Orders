const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();
let port = 3001;

let allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

/* use middleware to format the response body */
app.use(bodyParser.json());

/* use middleware to enable cors and allow crossdomain requests to get through */
app.use(allowCrossDomain);

/* define mock routes */
app.get('/order/:id', (req, res) => {
    let id = req.params.id;
    let filepath = `./mock_files/order${id}.json`;

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});

app.get('/product/:id', (req, res) => {
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
    });
});

app.get('/customers', (req, res) => {
    let filepath = `./mock_files/customers.json`;

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Started mock server on port ${port}`);
});

module.exports = {
    app
};