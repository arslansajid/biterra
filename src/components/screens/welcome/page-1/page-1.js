import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import { Text, Button, Touchable, Loader } from '@common';
import { SCREENS } from '@constants';
import styles from './page-1.style';

const VIMEO_ID = 320587693;

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  _onPressPlay = () => {
    this.setState({ loading: true });

    axios.get(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      .then(response => {
        this.setState({ loading: false });
        const vimeoVideoUri = response.data.request.files.progressive[1].url;

        Navigation.showOverlay({
          component: {
            name: SCREENS.VIDEO_PLAYER,
            passProps: {
              uri: vimeoVideoUri
            },
            options: {
              overlay: {
                interceptTouchOutside: true
              }
            }
          }
        });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSpace} />

        <Text
          style={styles.login}
          onPress={() => {}}
        >
          LOGIN
        </Text>

        <View style={styles.loginBottomSpace} />

        <Text style={styles.welcome}>
          WELCOME TO
        </Text>

        <Text style={styles.title}>
          BITERRA CAPITAL
        </Text>

        <View style={styles.logoTopSpace} />

        <Animatable.Image
          ref={refreshIconRef => { this.refreshIconRef = refreshIconRef; }}
          source={require('@images/logo.png')}
          animation='rotate'
          easing='linear'
          iterationCount='infinite'
          duration={4000}
          useNativeDriver
        />

        <View style={styles.logoBottomSpace} />

        <Touchable
          onPress={this._onPressPlay}
          style={styles.playContainer}
        >
          <Image
            source={require('@images/play.png')}
          />

          <Text style={styles.play}>
            PLAY VIDEO
          </Text>
        </Touchable>

        <View style={styles.playBottomSpace} />

        <Text style={styles.description}>
          {'Take Control of Your Finances.\nTake Control of Your Future.'}
        </Text>

        <View style={styles.buttonTopSpace} />

        <View style={styles.buttonContainer}>
          <Button
            title='Register'
            onPress={this.props.onRegisterPress}
          />
        </View>

        <View style={styles.buttonBottomSpace} />

        <Loader loading={this.state.loading} />
      </View>
    );
  }
}

export default Page1;
