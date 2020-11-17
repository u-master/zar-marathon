import React, { useState } from 'react';
import config from '../../config';

import styles from './Pokedex.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

interface IPokemonsData {
  pokemons: IPokemon[];
  total: number;
}

const apiGetPokemons = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;

const usePokemons = () => {
  const [data, setData] = useState<IPokemonsData>({ pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const getPokemons = async () => {
    try {
      const response = await fetch(apiGetPokemons);
      const result = await response.json();
      setData(result);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  getPokemons();
  return { data, isLoading, isError };
};

const PokedexPage: React.FC = () => {
  const {
    data: { pokemons, total },
    isLoading,
    isError,
  } = usePokemons();

  if (isLoading) return <div>Data Loading... Please wait!</div>;

  if (isError) return <div>Error data fetching :(</div>;

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.pokedexWrapper}>
        <Heading size="h2" className={styles.heading}>
          {total} <span className={styles.bold}>Pokemons</span> for you to choose your favorite
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
};

export default PokedexPage;
