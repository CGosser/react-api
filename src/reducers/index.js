import { combineReducers } from 'redux';
import getTempReducer from './getTempReducer';

const rootReducer = combineReducers({
  currentTemp: getTempReducer
});

export default rootReducer;
