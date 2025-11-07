import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { config } from '@/config';
import { logger } from '@/utils/logger';
import { errorResponse } from '@/utils/responseHandler';
import { HTTP_STATUS } from '@/constants';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  logger.error(err.stack || err.message);

  if (err instanceof ZodError) {
    const errorDetails = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(errorResponse('Validation failed', 'VALIDATION_ERROR', errorDetails));
    return;
  }

  const statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = 'An unexpected error occurred on the server.';
  const code = 'INTERNAL_SERVER_ERROR';

  const response = errorResponse(
    message,
    code,
    config.env === 'development' ? err.stack : undefined
  );

  res.status(statusCode).json(response);
};
