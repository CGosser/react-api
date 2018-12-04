import React from 'react';
import PropTypes from 'prop-types';

function Results(props){
  console.log(props);
  return (
    <div>
      <h1>{props.data.temp}</h1>
      <h1>{props.data.city}</h1>
    </div>
  );
}

export default Results;
