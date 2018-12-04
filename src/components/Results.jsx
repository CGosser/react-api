import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initialState } from './../constants/InitialState';

function Results(){
  return (
    <div>
      <h1>{city}</h1>
      <h1>{temp}</h1>
    </div>
  );
}

Results.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.string
}

const mapStateToProps = state => {
  let weatherInfo;
  const weather = state;
  weatherInfo = {
    city: weather.city,
    temp: weather.temp
  };
}

export default connect()(Results);
