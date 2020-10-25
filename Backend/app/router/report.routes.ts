import { Router } from 'express';
const router = Router();
import * as controller from '../controller/report.controller';

router.route('/getAllReport')
    .get(controller.getReports);

export { router as reportRouter }