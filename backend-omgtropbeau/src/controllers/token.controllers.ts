import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWTSECRETKEY } from '../config/secret_config';
import bcrypt from 'bcrypt';

import User from '../models/user.model';
import Token from '../models/token.model';

import { InvalidRequest, DatabaseError, NoResultError, UnauthorizedError } from '../middlewares/error.middleware';
import { SuccessRequested } from '../middlewares/success.middleware';

import { getUserByEmail } from '../services/user.services';
import { postToken } from '../services/token.services';

async function loginController(req: Request, res: Response) {
  if (!req.body) { // check if the request is empty
    return InvalidRequest(req, res, new Error('Request body is empty!'));
  }
  // check if the request have email and password
  if (!req.body.email || !req.body.password) {
    return InvalidRequest(req, res, new Error('Email or password is missing!'));
  }

  const user = await getUserByEmail(req.body.email)
    .catch((err: any) => {
      return DatabaseError(req, res, err);
    });

  if (user === null) {
    return NoResultError(req, res, new Error('User not found!'));
  }

  const { password, id, email } = user as User;


  const isMatch = await bcrypt.compare(req.body.password, password);

  if (!isMatch) {
    return UnauthorizedError(req, res, new Error('Invalid password!'));
  }

  const payload: JwtPayload = {
    id: id,
    email: email
  };

  const token = jwt.sign(payload, JWTSECRETKEY, { expiresIn: '1h' });

  const tokenModel = new Token({
    token: token,
    userId: id,
    expiredAt: new Date(Date.now() + 3600000)
  });

  const postedToken = await postToken(tokenModel)
    .catch((err: any) => {
      return DatabaseError(req, res, err);
    });

  return SuccessRequested(req, res, { token: token });
}

export {
  loginController
}