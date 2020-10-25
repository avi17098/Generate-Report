import { Router } from 'express';
const router = Router();
import * as controller from '../controller/feedback.controller';

router.route('/getAllFeedback')
    .get(controller.getFeedback);

export { router as feedbackRouter }