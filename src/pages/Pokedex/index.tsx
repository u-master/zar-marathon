import React from 'react';
import useData from '../../hook/getData';

import styles from './Pokedex.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

interface IPokemonsData {
  pokemons: IPokemon[];
  total: number;
}

const PokedexPage: React.FC = () => {
  const { data, isLoading, isError } = useData<IPokemonsData>('getPokemons');

  if (isLoading) return <div>Data Loading... Please wait!</div>;

  if (isError) return <div>Error data fetching :(</div>;

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.pokedexWrapper}>
        <Heading size="h2" className={styles.heading}>
          {data?.total} <span className={styles.bold}>Pokemons</span> for you to choose your favorite
        </Heading>
        <div className={styles.cards}>
          {data?.pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PokedexPage;
