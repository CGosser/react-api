// import constants from './../constants';
// const { initialState, types } = constants;
//
// const getTempReducer = (state = initialState, action) => {
//   console.log(action);
//   return state;
// };
//
// export default getTempReducer;

import constants from './../constants';
const { initialState, types } = constants;

const getTempReducer = (state = initialState.temp, action) => {
  switch (action.type) {
  // case 'EDIT_STATE':
  //   let newState = {
  //     city: action.city,
  //     temp: state.temp
  //   };
  //   return newState;
  default:
    return state;
  }
};

export default getTempReducer;



// import constants from './../constants';
// const { initialState, types } = constants;
//
// const getTempReducer = (state = initialState, action) => {
//   console.log(action)
//   if (action.type === EDIT_STATE) {
//     console.log ('it worked');
//   } else {
//     console.log('hi')
//   }
// };
//
// export default getTempReducer;
