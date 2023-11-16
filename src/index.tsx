import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { UiContextProvider } from './context/UiContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from './pages/About';
import { Editing } from './pages/Editing';
import { Artwork } from './pages/Artwork';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/editing',
    element: <Editing />,
  },
  {
    path: '/artwork',
    element: <Artwork />,
  },
]);

root.render(
  <React.StrictMode>
    <UiContextProvider>
      <RouterProvider router={router} />
    </UiContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();