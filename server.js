const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
require('dotenv').config() 

const budget = require ('./routes/api/budget')

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// Mongo 

const mongoURI = process.env.MONGOURI

mongoose.connect(mongoURI)
    .then(()=> console.log('Mongoose Connected...'))
    .catch(err => console.log(`Opps theres an error: ${err}`))

// Use Routes

app.use('/api/budgets', budget);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`))