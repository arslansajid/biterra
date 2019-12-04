import React, { Component } from 'react';
import { WebView as NativeWebView, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Screen, Text } from '../';
import styles from './web-view.style';

class WebView extends Component {
  render() {
    return (
      <Screen
        navigator={this.props.navigator}
      >
        <View style={styles.closeButtonContainer}>
          <Text onPress={() => Navigation.dismissModal(this.props.componentId)}>
            Close
          </Text>
        </View>

        <NativeWebView
          {...this.props}
        />
      </Screen>
    );
  }
}

export { WebView };
