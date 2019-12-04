import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager'
import { persistStore } from 'redux-persist';
import { configureStore } from '@redux/store';
import { registerScreens } from './components/screens';
import { SCREENS } from '@constants';

class App {
  constructor() {
    if (Platform === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setToolbarPreviousNextButtonEnable(false);
    }
    // initialize redux store
    this.store = configureStore();
    global.store = this.store;

    // register screens for react-native-navigation
    registerScreens(this.store, Provider);

    if (this.store.getState()._persist) {
      this._startApp(this.store);
    } else {
      persistStore(this.store, null, () => {
        this._startApp(this.store);
      });
    }
  }

  _startApp = () => {
    // Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: SCREENS.WELCOME
                }
              }
            ],
            options: {
              topBar: {
                visible: false,
                height: 0
              }
            }
          }
        }
      });
    // });
  }
}

export default App;
