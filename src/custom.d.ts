/* eslint-disable camelcase */

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;

  export default src;
}

declare module '*.png' {
  const content: any;

  export default content;
}

type IPokemonType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'gosth'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'infoWrap'
  | 'label'
  | 'labelWrap'
  | 'normal'
  | 'pictureWrap'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'root'
  | 'statItem'
  | 'statValue'
  | 'statWrap'
  | 'stile'
  | 'titleName'
  | 'water';

interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: IPokemonType[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}
