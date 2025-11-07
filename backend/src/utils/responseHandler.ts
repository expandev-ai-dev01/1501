import { SuccessResponse, ErrorResponse } from '@/types/api';

export const successResponse = <T>(data: T): SuccessResponse<T> => {
  return {
    success: true,
    data,
  };
};

export const errorResponse = (message: string, code: string, details?: any): ErrorResponse => {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
  };
};
