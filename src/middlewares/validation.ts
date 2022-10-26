import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

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
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
  next();
};

export default loginValidation;