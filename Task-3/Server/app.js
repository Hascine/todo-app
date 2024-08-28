if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const errorHandler = require('./middlewares/errorHandler');
const UserController = require('./controllers/userController');

app.post('/login', UserController.postLogin);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
