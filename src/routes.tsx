import React from 'react';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import LegendariesPage from './pages/Legendaries';
import DocumentationPage from './pages/Documentation';

// eslint-disable-next-line no-shadow
enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

interface IAccMenu {
  [link: string]: () => JSX.Element;
}

const GENERAL_MENU: IGeneralMenu[] = [
  { title: 'Home', link: LinkEnum.HOME, component: () => <HomePage /> },
  { title: 'Pokédex', link: LinkEnum.POKEDEX, component: () => <PokedexPage /> },
  { title: 'Legendaries', link: LinkEnum.LEGENDARIES, component: () => <LegendariesPage /> },
  { title: 'Documentation', link: LinkEnum.DOCUMENTATION, component: () => <DocumentationPage /> },
];

const routes = GENERAL_MENU.reduce(
  (acc: IAccMenu, { link, component }: IGeneralMenu) => ({ ...acc, [link]: component }),
  {},
);

export default routes;
export { GENERAL_MENU, LinkEnum };
