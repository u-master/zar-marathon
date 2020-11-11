import React from 'react';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import LegendariesPage from './pages/Legendaries';
import DocumentationPage from './pages/Documentation';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

interface IAccMenu {
  [link: string]: () => JSX.Element;
}

const GENERAL_MENU: IGeneralMenu[] = [
  { title: 'Home', link: '/', component: () => <HomePage /> },
  { title: 'Pokédex', link: '/pokedex', component: () => <PokedexPage /> },
  { title: 'Legendaries', link: '/legendaries', component: () => <LegendariesPage /> },
  { title: 'Documentation', link: '/documentation', component: () => <DocumentationPage /> },
];

const routes = GENERAL_MENU.reduce(
  (acc: IAccMenu, { link, component }: IGeneralMenu) => ({ ...acc, [link]: component }),
  {},
);

export default routes;
export { GENERAL_MENU };
