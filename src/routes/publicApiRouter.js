import express from 'express';
import { postRegister } from '../public/postRegister.js';

export const publicApiRouter = express.Router();

publicApiRouter.post('/api/register', postRegister);