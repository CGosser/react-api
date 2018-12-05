import constants from './../constants';
const { initialState, types } = constants;

const getCityReducer = (state = initialState.city, action) => {
  switch (action.type) {

  default:
    return state;
  }
};

export default getCityReducer;
