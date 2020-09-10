import { CHANGE_NUM, CHANGE_OP } from '../actions/change';

const calculatorReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_NUM:
      return action.num;
    case CHANGE_OP:
      return action.i;
    default:
      return state;
  }
};

export default calculatorReducer;
