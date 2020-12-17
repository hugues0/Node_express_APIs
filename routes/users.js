import express from 'express';
import jwt from 'jsonwebtoken';

import { createUser, getUser, getUsers, deleteUser, updateUser } from '../controlers/userscontroller.js';
import { auth } from '../middlewares/auth.js';
import users from '../users.json';

const router = express.Router();



router.get('/', auth, getUsers);

router.post('/', createUser);

router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

router.post('/login',auth);



export default router;