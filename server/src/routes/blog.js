import { Router } from 'express';
import peopleRouter from './people';
import userRouter from './blog'
let router = Router();

router.use('/people', peopleRouter);
router.use('/blog', userRouter);


export default router;