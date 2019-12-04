import { StyleSheet } from 'react-native';
import { COLOR } from '@constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30
  },
  topSpace: {
    flex: 2.5
  },
  loginBottomSpace: {
    flex: 1
  },
  descriptionTopSpace: {
    flex: 2.5
  },
  descriptionBottomSpace: {
    flex: 5
  },
  inputSpace: {
    flex: 1
  },
  buttonTopSpace: {
    flex: 20
  },
  buttonBottomSpace: {
    flex: 5
  },
  title: {
    fontSize: 30,
    letterSpacing: 2,
    lineHeight: 33,
    fontWeight: '600',
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '600'
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 15
  },
  login: {
    fontSize: 12,
    letterSpacing: 2,
    alignSelf: 'flex-end',
    right: 32
  },
  namesInputContainer: {
    flexDirection: 'row'
  }
});

export default styles;
