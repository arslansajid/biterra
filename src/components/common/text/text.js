import React, { Component } from 'react';
import { Text as RCText } from 'react-native';
import styles from './text.style';

class Text extends Component {
  render() {
    return (
      <RCText
        {...this.props}
        style={[styles.text, this.props.style]}
      >
        {this.props.children}
      </RCText>
    );
  }
}

export { Text };
