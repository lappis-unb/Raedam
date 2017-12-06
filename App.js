import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, H1, Icon } from 'native-base';
import * as firebase from "firebase";
import { config } from "./secrets";
import { styles } from "./style";

firebase.initializeApp(config);


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.main}>
        <View style={styles.view}>
        <Icon name="car" style = {styles.icon}/>
          <Text style={styles.title} >Raedam</Text>
          <Form>
            <Item style={styles.item}>
              <Input
                floatingLabel
                style={styles.input}
                placeholder="E-mail"
                onChangeText={(text) => this.handleFieldOnChange('email', text)}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                secureTextEntry
                style={styles.input}
                placeholder="Senha"
                onChangeText={(text) => this.handleFieldOnChange('password', text)} />
            </Item>
          </Form>
          <Button 
          style={styles.registerButton} 
          full
          onPress={() => doRegister(this.state.email, this.state.password)}>
            <Text style={styles.registerText}>Register</Text>
          </Button>
          <Text>{this.state.email}</Text>
          <Text>{this.state.password}</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const doRegister = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorMessage);
  });
}


const checkLogin = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      console.log(displayName);
      console.log(email);
      console.log(uid);
    } else {
      // User is signed out.
      // ...
    }
  });

}

