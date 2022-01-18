const rp = require('request-promise');

module.exports = async function (city) {
  if (!city) {
    throw new Error('Имя города не может быть пустым');
  }

  const KEY = '125067d076d7a01052d6ab356be5c2af';
  const uri = 'http://api.openweathermap.org/data/2.5/weather';
  const options = {
    uri,
    qs: {
      appid: KEY,
      q: city,
      units: 'imperial',
    },
    json: true,
  };

  try {
    const response = await rp(options);
    const celsius = Math.floor((response.main.temp - 32) * 5/9);
    
    return {
      weather: `${response.name}:  ${celsius}`,
      error: null,
    };
  } catch (e) {
    return {
      weather: null,
      error: error.error.message,
    };
  }



}