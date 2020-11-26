import React from 'react';
import useData from '../../hook/getData';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading, isError } = useData<IPokemon>('getPokemon', { id });

  if (isLoading) return <div>Data Loading... Please wait!</div>;

  if (isError) return <div>Error data fetching :(</div>;

  return (
    <div>
      <Header />
      <div>Poke name is {data?.name}</div>;
      <Footer />
    </div>
  );
};

export default Pokemon;
