import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Touchable, Text } from '../';

import styles from './button.style';

class Button extends Component {
  render() {
    return (
      <Touchable
        style={[styles.container, this.props.style]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.titleStyle, this.props.titleStyle]}>
          {this.props.title}
        </Text>
      </Touchable>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export { Button };
