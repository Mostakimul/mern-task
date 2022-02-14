const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
// databse connection
const connectDB = require('./config/db');
connectDB();

// app initialization
const app = express();

// routes
app.use('/api/tasks', require('./routes/taskRoutes'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
