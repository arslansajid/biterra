import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { COLOR } from '@constants';
import styles from './loader.style';

class Loader extends Component {
  render() {
    if (this.props.loading) {
      return (
        <ActivityIndicator
          size={this.props.small ? 'small' : 'large'}
          color={COLOR.LOADER_ACTIVITY_INDICATOR}
          animating
          style={[styles.container, this.props.style]}
        />
      );
    }
    return null;
  }
}

export { Loader };
