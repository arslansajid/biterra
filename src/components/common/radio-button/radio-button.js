import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Touchable, Text } from '..';
import { COLOR } from '../../../constants';

import styles from './radio-button.style';

class RadioButton extends Component {
  render() {
    return (
      <Touchable
        onPress={this.props.onPress}
      >
      <View style={[{
        height: this.props.height,
        width: this.props.width,
        borderRadius: 12,
        borderWidth: 2,
        backgroundColor: this.props.defaultColor,
        borderColor: COLOR.RADIO_BUTTON_BORDER,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }, this.props.style]}>
        {
          this.props.selected ?
            <View style={{
              height: this.props.height,
              width: this.props.width,
              borderRadius: 12,
              backgroundColor: COLOR.BUTTON_BACKGROUND,
            }}/>
            : null
        }
      </View>
      </Touchable>
  );
  }
}

RadioButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  defaultColor: PropTypes.string.isRequired,
};

export { RadioButton };
