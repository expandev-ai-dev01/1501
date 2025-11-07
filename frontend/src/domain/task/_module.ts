/**
 * @module task
 * @summary Manages all aspects of tasks, including creation, categorization, prioritization, and completion.
 * @domain functional
 * @dependencies @/core/lib/api, @tanstack/react-query
 * @version 1.0.0
 * @author Artemis
 * @lastModified 2024-07-30
 */

// Public exports will be added here as the domain is developed.
// Example:
// export * from './components/TaskList';
// export * from './hooks/useTaskList';
// export * from './services/taskService';
// export * from './types';

export const moduleMetadata = {
  name: 'task',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: [],
  publicHooks: [],
  publicServices: [],
  publicStores: [],
  dependencies: {
    internal: ['@/core/lib/api', '@/core/hooks'],
    external: ['@tanstack/react-query', 'zod'],
    domains: [],
  },
  exports: {
    components: [],
    hooks: [],
    services: [],
    stores: [],
    types: [],
    utils: [],
  },
} as const;
