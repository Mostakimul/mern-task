const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');

// databse connection
const connectDB = require('./config/db');
connectDB();

// app initialization
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/tasks', require('./routes/taskRoutes'));

// error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
