import { Outlet } from 'react-router-dom';

/**
 * @component RootLayout
 * @summary The main layout for the application, containing the shell for all pages.
 * @domain core
 * @type layout-component
 */
export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* A global header could go here */}
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      {/* A global footer could go here */}
    </div>
  );
};
