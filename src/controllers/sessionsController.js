import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import authConfig from '../config/auth';

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ error: 'User / Password invalid.' });

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res
        .status(401)
        .json({ error: 'User / Password invalid.' });
    }
    const { id } = user;
    try {
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
