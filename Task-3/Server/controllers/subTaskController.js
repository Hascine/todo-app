const { Task, Subtask } = require('../models');

class SubTaskController {
  static async getSubTasks(req, res, next) {
    try {
      // i want the data from the task include subtask
      const { TaskId } = req.params;
      const subTasks = await Task.findByPk(TaskId, {
        include: {
          model: Subtask,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      });
      res.status(200).json(subTasks);
    } catch (err) {
      next(err);
    }
  }

  static async postSubTask(req, res, next) {
    try {
      const { TaskId } = req.params;
      const { title } = req.body;
      const newData = { TaskId, title };
      const newSubTask = await Subtask.create(newData);
      res.status(201).json(newSubTask);
    } catch (err) {
      next(err);
    }
  }

  static async putSubTask(req, res, next) {
    try {
      const { id } = req.params;
      const subTask = await Subtask.findByPk(id);
      if (!subTask) {
        throw { name: 'SubTaskNotFound' };
      }

      const { title } = req.body;

      await subTask.update(
        {
          title,
        },
        {
          where: { id },
        }
      );
      res.status(200).json(subTask);
    } catch (err) {
      next(err);
    }
  }

  static async deleteSubTask(req, res, next) {
    try {
      const { id } = req.params;
      const subTask = await Subtask.findByPk(id);
      if (!subTask) {
        throw { name: 'SubTaskNotFound' };
      }

      await subTask.destroy({ where: { id } });
      res.status(200).json({ message: 'Subtask success to delete' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SubTaskController;
