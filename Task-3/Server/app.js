require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authentication = require('./middlewares/authentication');
const errorHandler = require('./middlewares/errorHandler');

const TaskController = require('./controllers/taskController');
const SubTaskController = require('./controllers/subTaskController');
const UserController = require('./controllers/userController');

// User
app.post('/login', UserController.postLogin);

app.use(authentication);

// Task
app.get('/task', TaskController.getTasks);
app.post('/task', TaskController.postTask);
app.put('/task/:id', TaskController.putTask);
app.delete('/task/:id', TaskController.deleteTask);

// SubTask
app.get('/task/:TaskId/subtask', SubTaskController.getSubTasks);
app.post('/task/:TaskId/subtask', SubTaskController.postSubTask);
app.put('/subtask/:id', SubTaskController.putSubTask);
app.delete('/subtask/:id', SubTaskController.deleteSubTask);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
