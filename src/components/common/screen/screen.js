import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR } from '@constants';
import styles from './screen.style';

class Screen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[COLOR.SCREEN_GRADIENT_START, COLOR.SCREEN_GRADIENT_END]}
          start={{ x: 1.0, y: 0.0 }}
          end={{ x: 0.0, y: 1.0 }}
          locations={[0.25, 1]}
          style={styles.background}
        />
        
        <View style={[styles.container, this.props.style]}>
          {this.props.children}
        </View>
      </SafeAreaView>
    );
  }
}

export { Screen };
