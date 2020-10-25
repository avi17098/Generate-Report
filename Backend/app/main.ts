import './model/feedback.model';
import './model/report.model';
import './model/customer.model';
import './model/agent.model';

import { Router } from 'express';
import {reportRouter} from './router/report.routes';
import { feedbackRouter } from './router/feedback.routes'; 
const router = Router();

router.use('/reports', reportRouter);
router.use('/feedback', feedbackRouter);

router.get('/', (req, res) => {
    res.send('api components works');
});

export { router as api }