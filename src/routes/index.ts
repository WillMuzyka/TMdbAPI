import { Router } from 'express';
import MoviesController from '../controllers/MoviesController';

const router = Router();
const moviesController = new MoviesController();

router.get('/movie/:id', moviesController.index);

export default router;
