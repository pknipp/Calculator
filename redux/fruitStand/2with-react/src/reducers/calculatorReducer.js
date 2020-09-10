import { CHANGE_NUM, CHANGE_OP } from '../actions/change';

const calculatorReducer = (state = [], action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case CHANGE_NUM:
      nextState[action.name] = action.num
      return nextState;
    case CHANGE_OP:
      nextState.i = action.i;
      return nextState;
    default:
      return state;
  }
};

export default calculatorReducer;
