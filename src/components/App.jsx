import React from 'react';
import TempSearch from './TempSearch';
import Results from './Results';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TempSearch />
        <Results data={this.props}/>
      </div>
    );
  }
}

App.propTypes = {
  weatherInfo: PropTypes.object
};

const mapStateToProps = state => {
  return {
    city: state.currentTemp.city,
    temp: state.currentTemp.temp
  };
};

export default connect(mapStateToProps)(App);

// import React from 'react';
// import TempSearch from './TempSearch';
// import Results from './Results';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
//
// class App extends React.Component {
//
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div>
//         <TempSearch editState={this.props.editState}/>
//         <Results data={this.props}/>
//       </div>
//     );
//   }
// }
//
// App.propTypes = {
//   weatherInfo: PropTypes.object
// };
//
// const mapStateToProps = state => {
//   return {
//     city: state.currentTemp.city,
//     temp: state.currentTemp.temp
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     editState: () => { dispatch({type: 'EDIT_STATE'}); }
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
