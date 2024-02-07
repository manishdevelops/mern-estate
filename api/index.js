const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Connected to MONGODB');
}).catch((err) => {
    console.log(err);
});

app.listen(3001, () => {
    console.log('serving running on port 3000...');
});