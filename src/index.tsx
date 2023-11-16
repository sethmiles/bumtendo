import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { UiContextProvider } from './context/UiContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { EditingPage } from './pages/EditingPage';
import { ArtworkPage } from './pages/ArtworkPage';

const root = ReactDOM.createRoot(
  document.getElementsByTagName('body')[0] as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/editing',
    element: <EditingPage />,
  },
  {
    path: '/artwork',
    element: <ArtworkPage />,
  },
]);

root.render(
  <React.StrictMode>
    <UiContextProvider>
      <RouterProvider router={router} />
    </UiContextProvider>
  </React.StrictMode>
);
