const mongoose = require('mongoose')
const express = require('express');
// const { urlencoded } = require('express');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

const models = require('./models')

app.get('/', (req, res) => {
    res.send(`Hello you're Home`)
})

app.use('/boardgames', require('./controllers/BoardGameController'))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
})