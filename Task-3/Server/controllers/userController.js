const { User } = require('../models');
const { compare } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');

class UserController {
  static async postLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(email, password);

      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: 'InvalidEmailPassword' };
      }
      const isValidPassword = compare(password, user.password);
      if (!isValidPassword) {
        throw { name: 'InvalidEmailPassword' };
      }
      const access_token = signToken({ id: user.id, email: user.email });
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
