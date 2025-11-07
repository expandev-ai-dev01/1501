const getTimestamp = (): string => new Date().toISOString();

export const logger = {
  info: (message: string, ...args: any[]): void => {
    console.log(`[INFO] ${getTimestamp()}: ${message}`, ...args);
  },
  warn: (message: string, ...args: any[]): void => {
    console.warn(`[WARN] ${getTimestamp()}: ${message}`, ...args);
  },
  error: (message: string, ...args: any[]): void => {
    console.error(`[ERROR] ${getTimestamp()}: ${message}`, ...args);
  },
};
