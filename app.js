const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const {ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode,} = require('http-status-codes');
const faker = require('faker');

const app = express();
const port = process.env.APP_PORT || 3000;
const url = process.env.APP_URL || 'http://localhost';

app.use(morgan(`tiny`));

app.get('/', (req, res, next) => {
    res.send( " Day 1 of expressjs #100DaysOfCode")
    res.status(StatusCodes.OK)
})

app.get('/products', (req, res, next) => {
    const product = {
        id: faker.datatype.number(),
        name: faker.name.findName(),
        image: faker.image.imageUrl(),
        address: faker.address.streetAddress(),
        employer: faker.company.companyName()
    }
    res.send(product)
    res.status(StatusCodes.OK)
})
app.post(`/products`, (req, res) => {
    const newProduct = req.body;

    res.send(newProduct);
})
app.listen(port, () => {
        console.log(`listening at ${url}:${port}`)
    }
)