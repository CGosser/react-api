import constants from './../constants';
const { initialState, types } = constants;

const getTempReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
  case types.GET_TEMP:
    return state;
  default:
    return state;
  }
};

export default getTempReducer;
