const toCapitalizeFirstLetter = (str: string) => {
  const res = str.split('');
  if (res.length) res[0] = res[0].toUpperCase();
  return res.join('');
};

export default toCapitalizeFirstLetter;
