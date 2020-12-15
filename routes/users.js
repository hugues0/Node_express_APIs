import express from 'express';
import jwt from 'jsonwebtoken';

import { createUser, getUser, getUsers, deleteUser, updateUser, userLogin } from '../controlers/userscontroller.js';

const router = express.Router();



router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

router.post ('/login',userLogin);


export default router;