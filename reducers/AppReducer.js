import Constants from './../AppConstants';
import createReducer from './createReducer';
import freezeDeep from './freezeDeep';
const initialState = {
  stuff: true
};

freezeDeep(initialState);

const actionHandlers = {
  [Constants.DO_STUFF]: (_, { payload }) => ({
    stuff: !_.stuff
  })
};

export default createReducer(initialState, actionHandlers);
