import React, { useState } from 'react';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';

import styles from './Pokedex.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import Input from '../../components/Input';

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const debounced = useDebounce(searchValue, 500);
  const { data, isLoading, isError } = useData<IPokemonsData>('getPokemons', { name: searchValue }, [debounced]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (isLoading) return <div>Data Loading... Please wait!</div>;

  if (isError) return <div>Error data fetching :(</div>;

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.pokedexWrapper}>
        <Heading size="h2" className={styles.heading}>
          {data?.total} <span className={styles.bold}>Pokemons</span> for you to choose your favorite
        </Heading>
        <div className={styles.controls}>
          <Input value={searchValue} onChange={handleSearchChange} stretch placeholder="Encuentra tu pokémon..." />
        </div>
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
