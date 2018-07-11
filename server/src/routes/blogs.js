import { Router } from 'express';
import Table from '../table';
let router = Router();

let blogList = new Table('blogs');

router.get('/', async(req, res) => {
    let blogs = await blogList.getAll();
    res.json(blogs);
 });

export default router;