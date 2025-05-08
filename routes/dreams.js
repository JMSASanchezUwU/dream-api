import express from 'express';
import { getDreams, createDream } from '../controllers/dreamController.js';

const router = express.Router();

router.get('/', getDreams);
router.post('/', createDream);

export default router;