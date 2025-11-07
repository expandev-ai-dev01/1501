import { Request, Response } from 'express';
import { successResponse } from '@/utils/responseHandler';

/**
 * @summary
 * Checks the health of the API.
 *
 * @api {get} /api/v1/external/health Health Check
 * @apiName GetHealth
 * @apiGroup Health
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Boolean} success Indicates if the request was successful.
 * @apiSuccess {Object} data The response data.
 * @apiSuccess {String} data.status The current status of the API.
 * @apiSuccess {String} data.timestamp The server timestamp.
 */
export const getHealth = (req: Request, res: Response): void => {
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
  };
  res.status(200).json(successResponse(healthCheck));
};
