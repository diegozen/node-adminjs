import { Request, Router, Response } from 'express';
import { BlogController } from '../../modules/blog/infrastructure/controllers/BlogController';

const router = Router();
const userController = new BlogController();

router.get('/blogs', (req: Request, res: Response) => userController.list(req, res));
router.post('/blogs', (req: Request, res: Response) => userController.create(req, res));
router.get('/blogs/:id', (req: Request, res: Response) => userController.get(req, res));

export default router;
