const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes.js');
const authRouter = require('./routes/authRoutes.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

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

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});