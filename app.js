const express = require('express');
const cors = require('cors');
// corss origin Resource Sharing

const app =express();

app.use(cors());
app.use(express.json);

module.exports=app;