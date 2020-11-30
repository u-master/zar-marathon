import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Must accept "getPockemons" and empty obj, then return object with fields: pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      pathname: '/api/v1/pokemons',
      host: 'zar.hosthot.ru',
      query: {},
    });
  });

  test('Must accept "getPockemons" and object { name: "Pikachu" }, then return object with fields: pathname, protocol, host and query with name field "Pikachu"', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      pathname: '/api/v1/pokemons',
      host: 'zar.hosthot.ru',
      query: { name: 'Pikachu' },
    });
  });

  test('Must accept "getPockemon" and object { id: 25 }, then return object with fields: pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      pathname: '/api/v1/pokemon/25',
      host: 'zar.hosthot.ru',
      query: {},
    });
  });
});
