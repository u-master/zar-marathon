import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';

import NotFoundPage from './pages/NotFound';

const App = () => {
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
};

export default App;

// import { BrowserRouter, Route } from 'react-router-dom';
// <BrowserRouter>
//   <Route path="/" exact component={HomePage} />
//   <Route path="/pokedex" component={PokedexPage} />
// </BrowserRouter>
