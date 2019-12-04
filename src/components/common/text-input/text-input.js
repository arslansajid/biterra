import React, { Component } from 'react';
import { TextInput as InputField } from 'react-native';
import styles from './text-input.style';

class TextInput extends Component {
  render() {
    return (
      <InputField
        {...this.props}
        style={[styles.text, this.props.style]}
      />
    );
  }
}

export { TextInput };
