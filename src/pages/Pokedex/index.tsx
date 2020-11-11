import React from 'react';

import pokemons from '../../pokemons';
import styles from './Pokedex.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

const PokedexPage: React.FC = () => (
  <div className={styles.root}>
    <Header />
    <div className={styles.pokedexWrapper}>
      <Heading size="h2" className={styles.heading}>
        800 <span className={styles.bold}>Pokemons</span> for you to choose your favorite
      </Heading>
      <div className={styles.cards}>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default PokedexPage;
