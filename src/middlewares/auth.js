import { verify } from 'jsonwebtoken';
import config from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token was not provided.' });

  const [, token] = authHeader.split(' ');

  const VerifyJWT = verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    req.userId = decoded.id;
    return next();
  });

  return VerifyJWT();
};
