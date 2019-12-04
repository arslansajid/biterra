import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  topSpace: {
    flex: 1.5
  },
  loginBottomSpace: {
    flex: 2.5
  },
  logoTopSpace: {
    flex: 2
  },
  logoBottomSpace: {
    flex: 2
  },
  playBottomSpace: {
    flex: 1
  },
  buttonTopSpace: {
    flex: 1
  },
  buttonBottomSpace: {
    flex: 3
  },
  welcome: {
    fontSize: 30,
    letterSpacing: 2,
    lineHeight: 33
  },
  title: {
    fontSize: 30,
    letterSpacing: 2,
    lineHeight: 33,
    fontWeight: '600'
  },
  play: {
    fontSize: 12,
    letterSpacing: 2,
    marginLeft: 10
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center'
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 55
  },
  login: {
    fontSize: 12,
    letterSpacing: 2,
    alignSelf: 'flex-end',
    right: 32
  },
  playContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
