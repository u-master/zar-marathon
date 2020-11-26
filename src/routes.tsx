import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import LegendariesPage from './pages/Legendaries';
import DocumentationPage from './pages/Documentation';
import Pokemon, { PokemonProps } from './pages/Pokemon';

// eslint-disable-next-line no-shadow
enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

interface IAccMenu {
  [link: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const GENERAL_MENU: IGeneralMenu[] = [
  { title: 'Home', link: LinkEnum.HOME, component: () => <HomePage /> },
  { title: 'Pokédex', link: LinkEnum.POKEDEX, component: () => <PokedexPage /> },
  { title: 'Legendaries', link: LinkEnum.LEGENDARIES, component: () => <LegendariesPage /> },
  { title: 'Documentation', link: LinkEnum.DOCUMENTATION, component: () => <DocumentationPage /> },
];

const SECOND_ROUTES: IGeneralMenu[] = [
  { title: 'Pokemon', link: LinkEnum.POKEMON, component: ({ id }: PokemonProps) => <Pokemon id={id} /> },
];

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce(
  (acc: IAccMenu, { link, component }: IGeneralMenu) => ({ ...acc, [link]: component }),
  {},
);

export default routes;
export { GENERAL_MENU, LinkEnum };
