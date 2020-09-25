import { connect } from 'react-redux';
import { changeNum, changeOp, clear } from '../actions/change';
import Calculator from './Calculator';

const msp = ({calculator: {x, y, i}}) => {
//  const {x, y, i} = state;
  return { x, y, i};
}
const mdp = dispatch => ({ changeNum, changeOp, clear });

export default connect(msp, mdp)(Calculator);
