export const CHANGE_NUM = 'CHANGE_NUM';
export const CHANGE_OP = 'CHANGE_OP';

export const changeNum = (num, name) => ({type: CHANGE_NUM, name, num});
export const changeOp = i => ({type: CHANGE_OP, i });