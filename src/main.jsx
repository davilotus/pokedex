import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App.jsx';
import { FavoritesProvider } from './providers/FavoritesContext.jsx';
import { Favorites } from './routes/Favorites/Favorites.jsx';
import { NotFound } from './routes/NotFound.jsx';
import { Pokemon } from './routes/Pokemon/Pokemon.jsx';

import { GlobalStyles } from './global-styles.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '/pokemon',
    element: <Pokemon />,
  },
  {
    path: '/pokemon/:slug',
    element: <Pokemon />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>
);
