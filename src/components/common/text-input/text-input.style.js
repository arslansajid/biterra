import { StyleSheet } from 'react-native';
import { COLOR } from '@constants';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.TEXT_INPUT_UNDERLINE,
    color: COLOR.TEXT_INPUT,
    paddingVertical: 8,
    width: '100%',
    height: 35
  }
});

export default styles;
