import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';
import { AppRouter } from './router';

/**
 * @component AppProviders
 * @summary A component that composes all the global providers for the application.
 * @domain core
 * @type provider-component
 */
export const AppProviders = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};
