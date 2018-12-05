import { combineReducers } from 'redux';
import getTempReducer from './getTempReducer';
import getCityReducer from './getCityReducer';

const rootReducer = combineReducers({
  currentTemp: getTempReducer,
  currentCity: getCityReducer
});

export default rootReducer;
