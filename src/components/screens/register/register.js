import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button, Touchable, RadioButton, TextInput, Screen } from '@common';
import ValidationComponent from 'react-native-form-validator';
import { COLOR } from '@constants';
import styles from './register.style';

export default class App extends ValidationComponent {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      phone: '',
      password: '',
      policyAgreement: false,
      showPassword: true,
      characterCheck: false,
      numberCheck: false,
      caseCheck: false,
    };
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  }

  postUser = () => {
  }

  getParams = () => {
    const {
      firstName,
      lastName,
      email,
    } = this.state;
    return {
      params: {
        firstName,
        lastName,
        email,
      }
    };
  }

  render() {
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

        <View style={styles.namesInputContainer}>
          <TextInput
            style={{ flex: 1 }}
            placeholder='First Name'
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor='white'
            onChangeText={firstName => this.onChangeText('firstName', firstName)}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder='Last Name'
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor='white'
            onChangeText={lastName => this.onChangeText('lastName', lastName)}
          />
        </View>

        <View style={styles.inputSpace} />

        <TextInput
          placeholder='Email'
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          keyboardType={'email-address'}
          onChangeText={email => this.onChangeText('email', email)}
        />

        <View style={styles.inputSpace} />

        <TextInput
          placeholder='Phone'
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          keyboardType={'number-pad'}
          onChangeText={phone => this.onChangeText('phone', phone)}
        />


        <View style={styles.buttonTopSpace} />

        <View style={styles.buttonContainer}>
          <Button
            title='Create Account'
            onPress={() => {}}
          />
        </View>

        <View style={styles.buttonBottomSpace} />
      </Screen>
    );
  }
}
