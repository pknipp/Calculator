export const ADD_FRUIT = 'ADD_FRUIT';
export const CHANGE_NUM = 'CHANGE_NUM';
export const SELL_FRUIT = 'SELL_FRUIT';
export const SELL_OUT = 'SELL_OUT';

// export const addFruit = (fruit) => ({
//   type: ADD_FRUIT,
//   fruit,
// });

export const changeNum = (num, name) => {
  const newState = {type: CHANGE_NUM};
  newState[name] = num;
  return newState;
};

// export const sellFruit = (fruit) => ({
//   type: SELL_FRUIT,
//   fruit,
// });

// export const sellOut = () => ({
//   type: SELL_OUT,
// });
