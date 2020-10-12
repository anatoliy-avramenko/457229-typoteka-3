'use strict';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => someArray.sort(() => Math.random() - 0.5);

module.exports = {
  getRandomInt,
  shuffle,
};
