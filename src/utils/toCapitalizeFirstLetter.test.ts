import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('"ololo" capitalized', () => {
    expect(toCapitalizeFirstLetter('ololo')).toEqual('Ololo');
  });

  test('Empty strig capitalize', () => {
    expect(toCapitalizeFirstLetter('')).toEqual('');
  });
});
