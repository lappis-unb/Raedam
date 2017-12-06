import React from 'react';
import { View, Text } from 'react-native';

export default class Login extends React.Component {
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
      <View style = {{flex:1, justifyContent:"center", alignItems:"center"}}>
          <Text>#Todo</Text>
      </View>
    );
  }
}
