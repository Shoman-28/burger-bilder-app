const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');
// corss origin Resource Sharing

const app =express();

app.use(cors());
app.use(express.json);

app.use('/user', userRouter);
app.use('/order', orderRouter);

module.exports=app;