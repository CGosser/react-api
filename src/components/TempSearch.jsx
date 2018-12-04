import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function TempSearch({ dispatch }){
  let input;
  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchSongId(input.value.trim()));
        // ...we'll add more custom logic here later...
        console.log('SEARCHED CITY:');
        console.log(input.value.trim());
        //...instead of these console.log()s....
        input.value = '';
      }}>
        <input placeholder="City" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

TempSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(TempSearch);
