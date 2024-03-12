const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/users');
const usersRoute = require('./routes/usersRoute');
const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// routes middleware

app.use(usersRoute);

// error handlers

app.use((req, res, next) => {
  res.status(404).json({
    message: 'page not found',
  });
});

// server
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
