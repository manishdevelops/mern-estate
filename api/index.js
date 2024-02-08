const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes.js');
const authRouter = require('./routes/authRoutes.js');

dotenv.config();

const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Connected to MONGODB');
}).catch((err) => {
    console.log(err);
});

app.listen(3001, () => {
    console.log('serving running on port 3001...');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);