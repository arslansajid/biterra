import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from '@common';
import styles from './page-3.style';

class Page3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSpace} />

        <Text style={styles.login}>
          LOGIN
        </Text>

        <View style={styles.titleTopSpace} />

        <Text style={styles.title}>
          PLAN
        </Text>

        <View style={styles.titleBottomSpace} />

        <Text style={styles.description}>
          {'Automate your finanaces with a \n"smart" Financial Plan.'}
        </Text>

        <View style={styles.buttonTopSpace} />

        <View style={styles.buttonContainer}>
          <Button
            title='Register to PLAN'
            onPress={this.props.onRegisterPress}
          />
        </View>

        <View style={styles.buttonBottomSpace} />
      </View>
    );
  }
}

export default Page3;
