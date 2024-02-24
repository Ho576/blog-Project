import { Router } from "express";
import * as BlogController from './blog.controller.js';
const router = Router();

router.get('/',BlogController.getBlogs);
router.post('/',BlogController.AddBlog);

export default router;