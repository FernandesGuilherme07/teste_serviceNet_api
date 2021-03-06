import { verify } from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token was not provided.' });

  const [, token] = authHeader.split(' ');

  try {
    const decoded = promisify(() => verify(token, authConfig.secret));
    req.userId = decoded.id;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: 'invalid token.' });
  }
};
