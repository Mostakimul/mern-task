const express = require('express');
const path = require('path');
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
app.use('/api/users', require('./routes/userRoutes'));

// serve forntend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'),
    ),
  );
} else {
  app.get('/', (req, res) => res.send('Task Manager delevelopment!'));
}

// error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
