import { Navigation } from 'react-native-navigation';
import React from 'react';
import Welcome from './welcome';
import Register from './register';
import SignUp from './sign-up';

import { VideoPlayer, WebView } from '@common';

import { SCREENS } from '@constants';

export function registerScreens(store, Provider) {
  Navigation.registerComponent(SCREENS.WELCOME, () => Welcome);
  Navigation.registerComponent(SCREENS.VIDEO_PLAYER, () => VideoPlayer);
  Navigation.registerComponent(SCREENS.SIGN_UP, () => SignUp);
  Navigation.registerComponent(SCREENS.REGISTER, () => Register);
  Navigation.registerComponent(SCREENS.WEBVIEW, () => WebView);
}
