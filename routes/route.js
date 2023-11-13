import express from 'express';
import { createBusiness } from '../controllers/business.js';

const router = express.Router();

router.post('/business', createBusiness);

export default router;
