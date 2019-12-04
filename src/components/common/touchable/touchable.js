import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Touchable extends Component {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        underlayColor='transparent'
        activeOpacity={0.8}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

Touchable.propTypes = {
  onPress: PropTypes.func.isRequired
};

export { Touchable };
