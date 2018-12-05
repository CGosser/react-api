import React from 'react';
import PropTypes from 'prop-types';

function Results(props){
  return (
    <div>
      <h1>{props.temp}</h1>
      <h1>{props.city}</h1>
    </div>
  );
}

export default Results;
