import { Request, Response } from 'express';
import { errorResponse } from '@/utils/responseHandler';
import { HTTP_STATUS } from '@/constants';

export const notFoundMiddleware = (req: Request, res: Response): void => {
  res
    .status(HTTP_STATUS.NOT_FOUND)
    .json(errorResponse(`Route '${req.method} ${req.originalUrl}' not found.`, 'NOT_FOUND'));
};
