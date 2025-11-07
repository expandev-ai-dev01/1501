import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary A page displayed when a route is not found (404).
 * @domain core
 * @type page-component
 * @category error-handling
 */
export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl mt-4 mb-8 text-gray-600">Page Not Found</p>
      <Button asChild>
        <Link to="/">Go back to Home</Link>
      </Button>
    </div>
  );
};

// Add a type assertion for the asChild prop on Button if needed, or extend ButtonProps
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    asChild?: boolean;
  }
}

export default NotFoundPage;
