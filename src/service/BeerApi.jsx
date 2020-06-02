import axios from 'axios';
/*
export const AllBeersApi = () => {
  return axios.get('https://ih-beers-api2.herokuapp.com/beers');
};
*/

export const AllBeersApi = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        const allBeers = result.data;
        resolve(allBeers);
      })
      .catch((error) => reject(error));
  });
};

export const SingleBeerApi = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((result) => {
        const singleBeer = result.data;
        resolve(singleBeer);
      })
      .catch((error) => reject(error));
  });
};

export const RandomBeerApi = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((result) => {
        const randomBeer = result.data;
        resolve(randomBeer);
      })
      .catch((error) => reject(error));
  });
};
