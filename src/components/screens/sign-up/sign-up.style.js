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
  confirmPasswordSpace: {
    flex: 0.5,
  },
  buttonTopSpace: {
    flex: 4
  },
  buttonBottomSpace: {
    flex: 5
  },
  passwordConditionsContainer: {
    height: 42,
    justifyContent: 'space-between'
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
  passwordVisibilityBtn: {
    letterSpacing: 2,
    right: 32,
    marginTop: -25,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  agreementContainer: {
    flexDirection: 'row'
  },
  passwordConditionContainer: {
    flexDirection: 'row'
  },
  namesInputContainer: {
    flexDirection: 'row'
  },
  passwordCondition: {
    fontSize: 10,
    color: COLOR.TEXT_DARK,
    letterSpacing: 0.5
  },
  agreementTopSpace: {
    flex: 3
  },
  showPassword: {
    fontSize: 12
  },
  agreement: {
    fontSize: 12,
    letterSpacing: 0.38
  }
});

export default styles;
