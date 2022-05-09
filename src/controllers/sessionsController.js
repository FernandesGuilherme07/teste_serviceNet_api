import jwt from 'jsonwebtoken';
import User from '../models/User';
import { checkPassword } from '../utils/bcrypt';
import authConfig from '../config/auth';

class SessionController {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) return res.status(401).json({ error: 'User / Password invalid.' });

      if (!checkPassword(user, password)) {
        return res
          .status(401)
          .json({ error: 'User / Password invalid.' });
      }
      const { id } = user;

      return res.status(200).json({
        user: {
          id,
          email,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      console.log({ erro: error });
      return res.status(401).json({ error: 'token invalide' });
    }
  }
}

export default new SessionController();
