import React, { Component } from 'react';
import { View } from 'react-native';
import { Screen } from '@common';
import { Text, Button, Touchable, RadioButton, TextInput } from '@common';
import { Notification } from '@helpers';
import ValidationComponent from 'react-native-form-validator';
import { COLOR } from '@constants';
import styles from './sign-up.style';
import { Navigation } from 'react-native-navigation';
import { SCREENS } from '@constants';

export default class App extends ValidationComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      confirmPassword: '',
      caseCheck: false,
      numberCheck: false,
      characterCheck: false,
      policyAgreement: false,
      showPassword: true,
      showConfirmPassword: true,
    };
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  }

  handlePassword = (key, value) => {
    const { password } = this.state;
    this.setState({ [key]: value }, () => {
        if (password === '') {
        this.setState({
          numberCheck: false,
          characterCheck: false,
          caseCheck: false,
          });
      } else if (this.state.password.length >= 8) {
        this.setState({
          characterCheck: true
          });
      } else if (/\d/.test(this.state.password)) {
        this.setState({
          numberCheck: true
        });
      } else if (password.toUpperCase() !== password && password.toLowerCase() !== password) {
        this.setState({
          caseCheck: true
        });
      }
    });
  }

  onCreatePress = () => {
    if (!this.state.policyAgreement) {
      Notification.error({
        title: 'Must agree to terms & conditions'
      });
      return;
    }
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREENS.REGISTER
      }
    });
  }

  getParams = () => {
    const {
      userName,
      password,
      confirmPassword,
    } = this.state;
    return {
      params: {
        userName,
        password,
        confirmPassword,
      }
    };
  }

  openTermsAndConditions = () => {
    Navigation.showModal({
			component: {
        name: SCREENS.WEBVIEW,
        passProps: {
          onClosePress: () => Navigation.dismissModal(this.props.componentId),
          source: { uri: 'https://www.google.com' }
        },
				options: {
					screenBackgroundColor: 'transparent',
					modalPresentationStyle: 'overCurrentContext',
					topBar: {
						visible: false,
						animate: true,
					},
				}
			},
		});
  }

  render() {
    const { password, numberCheck, characterCheck, caseCheck } = this.state;

    return (
      <Screen
        style={styles.container}
      >
        <View style={styles.topSpace} />

        <Text
          style={styles.login}
          onPress={() => {}}
        >
          LOGIN
        </Text>

        <View style={styles.loginBottomSpace} />

        <Text style={styles.title}>
          {'Hello!\nRegister now'}
        </Text>

        <View style={styles.descriptionTopSpace} />

        <Text style={styles.description}>
          {'All Data Protected on Your Private\nBlockchain.'}
        </Text>

        <View style={styles.descriptionBottomSpace} />

        <TextInput
          placeholder='Username'
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          onChangeText={userName => this.onChangeText('userName', userName)}
        />

        <View style={styles.inputSpace} />

        <TextInput
          placeholder='Password'
          secureTextEntry={this.state.showPassword}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          onChangeText={password => this.handlePassword('password', password)}
        />

        <Touchable
          style={styles.passwordVisibilityBtn}
          onPress={() => this.setState({ showPassword: !this.state.showPassword })}
        >
          <Text style={styles.showPassword}>{this.state.showPassword ? 'Show' : 'Hide'}</Text>
        </Touchable>

        <View style={styles.inputSpace} />

        <TextInput
          placeholder='Confirm Password'
          secureTextEntry={this.state.showConfirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          onChangeText={confirmPassword => this.handlePassword('confirmPassword', confirmPassword)}
        />

        <Touchable
          style={styles.passwordVisibilityBtn}
          onPress={() => this.setState({ showConfirmPassword: !this.state.showConfirmPassword })}
        >
          <Text style={styles.showPassword}>
            {
              this.state.showConfirmPassword
              ?
              'Show'
              :
              'Hide'
            }
          </Text>
        </Touchable>

        {
          password
          ?
          <View style={styles.passwordConditionsContainer}>
            <View style={styles.passwordConditionContainer}>
              <RadioButton
                onPress={() => {}}
                selected={this.state.characterCheck}
                height={12}
                width={12}
                defaultColor={characterCheck ? COLOR.BUTTON_BACKGROUND : COLOR.PASSWORD_INVALID}
              />

              <Text style={styles.passwordCondition}>
                {'8 characters'}
              </Text>
            </View>

            <View style={styles.passwordConditionContainer}>
              <RadioButton
                onPress={() => {}}
                selected={this.state.caseCheck}
                height={12}
                width={12}
                defaultColor={caseCheck ? COLOR.BUTTON_BACKGROUND : COLOR.PASSWORD_INVALID}
              />

              <Text style={styles.passwordCondition}>
                {'1 uppercase and 1 lowercase'}
              </Text>
            </View>

            <View style={styles.passwordConditionContainer}>
              <RadioButton
                onPress={() => {}}
                selected={this.state.numberCheck}
                height={12}
                width={12}
                defaultColor={numberCheck ? COLOR.BUTTON_BACKGROUND : COLOR.PASSWORD_INVALID}
              />

              <Text style={styles.passwordCondition}>
                {'1 number'}
              </Text>
            </View>
          </View>
          :
          <View style={styles.passwordConditionsContainer} />
        }

        <View style={styles.agreementTopSpace} />

        <View style={styles.agreementContainer}>
          <RadioButton
            onPress={() => this.setState({ policyAgreement: !this.state.policyAgreement })}
            selected={this.state.policyAgreement}
            height={24}
            width={24}
            defaultColor={'white'}
          />

          <Text
            style={styles.agreement}
            onPress={this.openTermsAndConditions}
          >
            {'By checking the box you consent to Legal.\n(Links to terms, privacy, etc.)'}
          </Text>
        </View>

        <View style={styles.buttonTopSpace} />

        <View style={styles.buttonContainer}>
          <Button
            title='Create Account'
            onPress={this.onCreatePress}
          />
        </View>

        <View style={styles.buttonBottomSpace} />

      </Screen>
    );
  }
}
