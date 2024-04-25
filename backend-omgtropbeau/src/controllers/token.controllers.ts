import { Request, Response } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

import User from '../models/user.model';
import Token from '../models/token.model';

import { getUserByEmail } from '../services/user.services';
import { postToken } from '../services/token.services';

async function loginController(req: Request, res: Response) {
  // check if the request body is empty
  if (!req.body) {
    return res.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  // check if the request have email and password
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      message: 'email and password are required!'
    });
  }

  const user = await getUserByEmail(req.body.email)
    .catch((err: any) => {
      return res.status(500).send({
        message: err.message || 'Some error occurred while retrieving user.'
      });
    });

  if (user === null) {
    return res.status(404).send({
      message: 'User not found!'
    });
  }

  const { password, id, email } = user as User;

  if (password !== req.body.password) {
    return res.status(401).send({
      message: 'Invalid password!'
    });
  }

  const SECRET_KEY: Secret = 'YaF8BZnNLhhpLSN5dF65qxKgbApPwAqs%nUudVo^X^d5PJ&o!44bPThgYiPW%ABG';

  const payload: JwtPayload = {
    id: id,
    email: email
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  const tokenModel = new Token({
    token: token,
    userId: id,
    expiredAt: new Date(Date.now() + 3600000)
  });

  const postedToken = await postToken(tokenModel)
    .catch((err: any) => {
      return res.status(500).send({
        message: err.message || 'Some error occurred while creating the Token.'
      });
    });

  return res.status(200).send({ JWTtoken: token });
}

export {
  loginController
}