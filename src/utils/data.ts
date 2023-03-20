export const globalStats = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/stats',
    params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
    headers: {
      'X-RapidAPI-Key': '731a444f99mshc6663ea7b1eed9ep1e91dejsna4075d3b6a0b',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

export const coinsInfos = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '731a444f99mshc6663ea7b1eed9ep1e91dejsna4075d3b6a0b',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };