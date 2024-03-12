const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
