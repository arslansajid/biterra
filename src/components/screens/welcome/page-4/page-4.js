import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from '@common';
import styles from './page-4.style';

class Page4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSpace} />

        <Text style={styles.login}>
          LOGIN
        </Text>

        <View style={styles.titleTopSpace} />

        <Text style={styles.title}>
          REWARD
        </Text>

        <View style={styles.titleBottomSpace} />

        <Text style={styles.description}>
          {'Tokenized Rewards for healthy financial \n behavior and completing challenges'}
        </Text>

        <View style={styles.buttonTopSpace} />

        <View style={styles.buttonContainer}>
          <Button
            title='Register to REWARD'
            onPress={this.props.onRegisterPress}
          />
        </View>

        <View style={styles.buttonBottomSpace} />
      </View>
    );
  }
}

export default Page4;
