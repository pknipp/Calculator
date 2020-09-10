export const ADD_FRUIT = 'ADD_FRUIT';
export const CHANGE_NUM = 'CHANGE_NUM';
export const CHANGE_OP = 'CHANGE_OP';
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

export const changeOp = i => ({type: CHANGE_OP, i});

// export const sellFruit = (fruit) => ({
//   type: SELL_FRUIT,
//   fruit,
// });

// export const sellOut = () => ({
//   type: SELL_OUT,
// });
