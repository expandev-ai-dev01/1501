import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@/core/components/ErrorBoundary';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { RootLayout } from '@/pages/layouts/RootLayout';

// Lazy loading of pages for code splitting
const HomePage = lazy(() => import('@/pages/Home'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

/**
 * @router AppRouter
 * @summary Main application routing configuration with lazy loading
 * and hierarchical layouts.
 * @type router-configuration
 * @category navigation
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <div className="w-full h-screen flex items-center justify-center">Something went wrong.</div>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      // Future routes will be added here
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

/**
 * @component AppRouter
 * @summary Router provider component that wraps the entire application
 * with routing capabilities.
 */
export const AppRouter = () => {
  return (
    <ErrorBoundary
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          An unexpected error occurred.
        </div>
      }
    >
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
