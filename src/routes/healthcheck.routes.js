import {Router} from 'express';
import { healthCheck } from '../controllers/healthcheck.controllers.js';

const router = Router();

router.route("/").get(healthCheck);
router.route("/gg").get(healthCheck);
router.route("/hp").get(healthCheck);

export default router;