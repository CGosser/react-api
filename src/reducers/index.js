import { combineReducers } from 'redux';
import getTempReducer from './getTempReducer';

const rootReducer = combineReducers({
  currentTemp: getTempReducer
});

console.log(rootReducer);

export default rootReducer;
