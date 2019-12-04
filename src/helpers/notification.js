import Snackbar from 'react-native-snackbar';
import { COLOR } from '@constants';

class Notification {
  static error = (options) => {
    Snackbar.show({
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: COLOR.SNACKBAR_ERROR_BACKGROUND,
      color: COLOR.SNACKBAR_ERROR_TEXT,
      ...options
    });
  }
}

export { Notification };
