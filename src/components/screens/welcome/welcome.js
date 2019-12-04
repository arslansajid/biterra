import React, { Component } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import SplashScreen from 'react-native-splash-screen';
import { Navigation } from 'react-native-navigation';
import { Screen } from '@common';
import { SCREENS } from '@constants';
import Page1 from './page-1';
import Page2 from './page-2';
import Page3 from './page-3'
import Page4 from './page-4';
import Page5 from './page-5';
import styles from './welcome.style';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    SplashScreen.hide();
  }

  onRegisterPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREENS.SIGN_UP
      }
    });
  }

  render() {
    return (
      <Screen>
        <Swiper
          showsButtons={false}
          activeDot={<View style={styles.activePaginatorDot} />}
        >
          <Page1
            onRegisterPress={this.onRegisterPress}
          />

          <Page2
            onRegisterPress={this.onRegisterPress}
          />

          <Page3
            onRegisterPress={this.onRegisterPress}
          />

          <Page4
            onRegisterPress={this.onRegisterPress}
          />

          <Page5
            onRegisterPress={this.onRegisterPress}
          />
        </Swiper>
      </Screen>
    );
  }
}
