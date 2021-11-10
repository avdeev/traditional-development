const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Hello from startup server');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Hello from startup server, ${req.body.name}`);
});

app.listen(3001, () => {
  console.log('Server started at http://localhost:3001');
});
