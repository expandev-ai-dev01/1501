import dotenv from 'dotenv';

dotenv.config();

const getCorsOrigins = (): string[] => {
  const origins = process.env.CORS_ORIGINS;
  if (origins) {
    return origins.split(',');
  }
  // Default for development
  return ['http://localhost:5173', 'http://localhost:3001'];
};

export const config = {
  env: process.env.NODE_ENV || 'development',
  api: {
    port: parseInt(process.env.PORT || '3000', 10),
    version: process.env.API_VERSION || 'v1',
    cors: {
      origin: getCorsOrigins(),
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
};
