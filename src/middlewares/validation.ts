import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import { statusSwitchCase } from '../utils/statusCode';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const loginValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const { error } = loginSchema.validate({
    username,
    password,
  });
  if (error) {
    console.log(error.details[0].type);
    const errorType = error.details[0].type;
    const errorCode = statusSwitchCase(errorType);
    return res.status(errorCode).json({ message: error.message });
  }
  next();
};

export default loginValidation;