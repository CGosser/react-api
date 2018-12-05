import React from 'react';
import TempSearch from './TempSearch';
import Results from './Results';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <TempSearch />
        <Results
          city={this.props.city}
          temp={this.props.temp}/>
      </div>
    );
  }
}

App.propTypes = {
  weatherInfo: PropTypes.object
};

const mapStateToProps = state => {
  return {
    city: state.currentCity,
    temp: state.currentTemp
  };
};

export default connect(mapStateToProps)(App);
