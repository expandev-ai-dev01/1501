import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

import { config } from '@/config';
import { logger } from '@/utils/logger';
import { errorMiddleware, notFoundMiddleware } from '@/middleware';
import apiRoutes from '@/routes';

const app: Application = express();

// Core Middleware
app.use(helmet());
app.use(cors(config.api.cors));
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
const morganFormat = config.env === 'development' ? 'dev' : 'combined';
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

// API Routes with versioning
app.use('/api', apiRoutes);

// 404 Handler for routes not found
app.use(notFoundMiddleware);

// Centralized Error Handling
app.use(errorMiddleware);

const server = app.listen(config.api.port, () => {
  logger.info(`Server running on port ${config.api.port} in ${config.env} mode`);
});

// Graceful Shutdown
const signals = ['SIGTERM', 'SIGINT'];

const gracefulShutdown = (signal: string) => {
  process.on(signal, () => {
    logger.info(`${signal} received, closing server gracefully...`);
    server.close(() => {
      logger.info('Server closed.');
      process.exit(0);
    });
  });
};

signals.forEach(gracefulShutdown);

export default app;
