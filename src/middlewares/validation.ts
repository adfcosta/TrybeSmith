import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import { statusSwitchCase } from '../utils/statusCode';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const productSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),

});

const newUserSchema = Joi.object({
  username: Joi.string().required().min(3),
  classe: Joi.string().required().min(3),
  level: Joi.number().required().min(1).strict(),
  password: Joi.string().required().min(8),
});

const loginValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const { error } = loginSchema.validate({
    username,
    password,
  });
  if (error) {
    console.log(error.details[0]);
    const errorType = error.details[0].type;
    const splitErrorType = errorType.split('.')[1];
    const errorCode = statusSwitchCase(splitErrorType);
    return res.status(errorCode).json({ message: error.message });
  }
  next();
};

export const productValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = productSchema.validate({
    name,
    amount,
  });
  if (error) {
    console.log(error.details[0].type);
    const errorType = error.details[0].type;
    const splitErrorType = errorType.split('.')[1];
    const errorCode = statusSwitchCase(splitErrorType);
    return res.status(errorCode).json({ message: error.message });
  }
  next();
};

export const newUserValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const { error } = newUserSchema.validate({
    username,
    classe,
    level,
    password,
  });
  if (error) {
    const errorType = error.details[0].type;
    const splitErrorType = errorType.split('.')[1];
    const errorCode = statusSwitchCase(splitErrorType);
    return res.status(errorCode).json({ message: error.message });
  }
  next();
};

export default loginValidation;