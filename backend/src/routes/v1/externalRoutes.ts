import { Router } from 'express';
import { getHealth } from '@/api/v1/external/health/controller';

const router = Router();

/**
 * @route GET /api/v1/external/health
 * @description Health check endpoint
 * @access Public
 */
router.get('/health', getHealth);

export default router;
