import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTemp } from './../actions/index'

function TempSearch(props){
  console.log(fetchTemp)
  let _city = null;
  function handleClick(e) {
    e.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'EDIT_STATE',
      city: _city.value
    };
    fetchTemp(_city.value);
    dispatch(action);
    _city.value = '';
  }
  return (
    <div>
      <form onSubmit={handleClick}>
        <input ref={(input) => {_city = input;}}/>
        <button>Search</button>
      </form>
    </div>
  );
}

TempSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(TempSearch);
