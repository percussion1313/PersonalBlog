import { Router } from 'express';
import Table from '../table';
let router = Router();

let blogs = new Table('blogs');

router.get('/', async(req, res) => {
    let blogs = await blogs.getAll();
    res.json(blogs);
 });

export default router;