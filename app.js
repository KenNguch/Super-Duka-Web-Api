const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const {ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode,} = require('http-status-codes');
const {response} = require("express");


const app = express();

const port = process.env.APP_PORT || 3000;
const url = process.env.APP_URL || 'http://localhost';
const prefix = process.env.APP_VERSION ;

//Middleware
app.use(morgan(`tiny`));
app.use( `${prefix}`,router);






app.get('/', (req, res, next) => {
    res.send(port)
    res.status(StatusCodes.OK)

})

app.listen(port, () => {
        console.log(`listening at ${url}:${port}`)
    }
)
