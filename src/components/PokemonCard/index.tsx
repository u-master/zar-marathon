import React from 'react';
import cn from 'classnames';

import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

import styles from './PokemonCard.module.scss';

import Heading from '../Heading';

interface IPokemonCardProps {
  pokemon: IPokemon;
}

// const mapTypeToColor = {
//   stile: '#A1A1A1',
//   dark: '#A1A1A1',
//   rock: '#A1A1A1',
//   grass: '#70A83B',
//   bug: '#70A83B',
//   ice: '#A2CFF0',
//   water: '#A2CFF0',
//   fire: '#F76545',
//   fighting: '#F76545',
//   dragon: '#F76545',
//   normal: '#76AADB',
//   gosth: '#76AADB',
//   poison: '#A974BC',
//   psychic: '#A974BC',
//   fairy: '#A974BC',
//   ghost: '#A974BC',
//   ground: '#9B897B',
//   electric: '#F7C545',
// };

const PokemonCard: React.FC<IPokemonCardProps> = ({
  pokemon: {
    name,
    img,
    types,
    stats: { attack, defense },
  },
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.infoWrap}>
        <Heading size="h3" className={styles.titleName}>
          {toCapitalizeFirstLetter(name)}
        </Heading>
        <div className={styles.statWrap}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{attack}</div>
            Attack
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={styles.labelWrap}>
          {types.map((type) => (
            <span className={cn(styles.label, styles[type])} key={type}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(styles.pictureWrap, styles[types[0]])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
