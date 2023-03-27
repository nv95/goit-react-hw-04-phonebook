import { Component } from 'react';
import PropTypes from 'prop-types';
import { FiltContainer } from './Filter.styled';

class Filter extends Component {
  setFilterValue = e => {
    let value = e.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  };

  render() {
    return (
      <FiltContainer>
        <h4>Find contacts by name</h4>
        <input onChange={this.setFilterValue}></input>
      </FiltContainer>
    );
  }
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
export default Filter;
