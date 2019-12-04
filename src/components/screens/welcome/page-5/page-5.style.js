import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  login: {
    fontSize: 12,
    letterSpacing: 2,
    alignSelf: 'flex-end',
    right: 32
  },
  topSpace: {
    flex: 1
  },
  titleTopSpace: {
    flex: 2.5
  },
  titleBottomSpace: {
    flex: 12
  },
  buttonTopSpace: {
    flex: 1
  },
  buttonBottomSpace: {
    flex: 3
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 55
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
    textAlign: 'center'
  },
  play: {
    letterSpacing: 2,
    fontSize: 16,
  },
  playBottomSpace: {
    flex: 1
  },
});

export default styles;
