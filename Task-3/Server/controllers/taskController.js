const { Task } = require('../models');

class TaskController {
  static async getTasks(req, res, next) {
    try {
      const tasks = await Task.findAll();
      res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  }

  static async postTask(req, res, next) {
    try {
      const { UserId } = req.loginInfo;
      const { title, description, dueDate, TagId } = req.body;
      const newData = {
        UserId,
        title,
        description,
        dueDate: new Date(dueDate),
        TagId,
      };

      const newTask = await Task.create(newData);
      res.status(201).json(newTask);
    } catch (err) {
      next(err);
    }
  }

  static async putTask(req, res, next) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      if (!task) {
        throw { name: 'TaskNotFound' };
      }

      const { title, description, dueDate, TagId } = req.body;

      await task.update(
        {
          title,
          description,
          dueDate: new Date(dueDate),
          TagId,
        },
        {
          where: { id },
        }
      );
      res.status(200).json(task);
    } catch (err) {
      next(err);
    }
  }

  static async deleteTask(req, res, next) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      if (!task) {
        throw { name: 'TaskNotFound' };
      }
      await task.destroy();
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TaskController;
