import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from '@common';
import styles from './page-5.style';

class Page5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSpace} />

        <Text style={styles.login}>
          LOGIN
        </Text>

        <View style={styles.titleTopSpace} />

        <Text style={styles.title}>
          {'YOUR AI \n YOUR DATA'}
        </Text>

        <View style={styles.titleBottomSpace} />

        <View>
          <Text style={styles.play}>
            That's Right.
          </Text>
        </View>

        <View style={styles.playBottomSpace} />

        <Text style={styles.description}>
          {'A new A.I. system is created for every user. \n Own & Control Your Data!'}
        </Text>

        <View style={styles.buttonTopSpace} />

        <View style={styles.buttonContainer}>
          <Button
            title='Register to CONTROL'
            onPress={this.props.onRegisterPress}
          />
        </View>

        <View style={styles.buttonBottomSpace} />
      </View>
    );
  }
}

export default Page5;
