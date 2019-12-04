import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from '@common';
import styles from './page-2.style';

class Page2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSpace} />

        <Text style={styles.login}>
          LOGIN
        </Text>

        <View style={styles.titleTopSpace} />

        <Text style={styles.title}>
          INVEST
        </Text>

        <View style={styles.titleBottomSpace} />

        <Text style={styles.description}>
          {'Create Customizable portfolios to\nSave & Invest.'}
        </Text>

        <View style={styles.buttonTopSpace} />

        <View style={styles.buttonContainer}>
          <Button
            title='Register to INVEST'
            onPress={this.props.onRegisterPress}
          />
        </View>

        <View style={styles.buttonBottomSpace} />
      </View>
    );
  }
}

export default Page2;
