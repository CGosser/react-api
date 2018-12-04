import * as types from './../constants/ActionTypes';

export function fetchTemp(city) {
  return function (dispatch) {
    return fetch('api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d7fbecc4eb1bb2db7cdc61ed78c345bf').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json)) {
      console.log('CHECK OUT THIS SWEET API:', json)
    }
  };
} ;
