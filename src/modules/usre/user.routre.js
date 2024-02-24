import { Router } from "express";
import * as UserController from './user.controller.js';
const router = Router();

router.get('/',UserController.getUsers);
router.delete('/deleteUser/:id',UserController.deleteUser);
router.patch('/updateUserName/:id',UserController.updateUserName);
router.patch('/updateUserPassword/:id',UserController.updateUserPassword);
router.get('/blogs',UserController.getUsersWithBlogs);

export default router;