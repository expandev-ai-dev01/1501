import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary The main landing page of the application.
 * @domain core
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to the TODO list App</h1>
      <p className="text-lg text-gray-600 mb-8">
        This is the foundational structure for your new React application.
      </p>
      <Button size="lg" onClick={() => alert('Button clicked!')}>
        Get Started
      </Button>
    </div>
  );
};

export default HomePage;
