import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    height: 37,
    backgroundColor: COLOR.BUTTON_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: '100%'
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: '600',
    color: COLOR.BUTTON_TEXT,
    letterSpacing: 2.0
  }
});

export default styles;
