import { CHANGE_NUM, CHANGE_OP, CLEAR } from '../actions/change';

const calculatorReducer = (state = {i: 0, x: "", y: ""}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case CHANGE_NUM:
      nextState[action.name] = action.num
      return nextState;
    case CHANGE_OP:
      nextState.i = action.i;
      return nextState;
    case CLEAR:
      return {i: 0, x: "", y: ""};
    default:
      return state;
  }
};

export default calculatorReducer;
