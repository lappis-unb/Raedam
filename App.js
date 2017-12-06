import {Actions, Scene, Router} from 'react-native-router-flux';
import React from 'react';
import Register from "./screens/register/register";
import Login from "./screens/login/login";

import * as firebase from "firebase";
import { config } from "./secrets";
firebase.initializeApp(config);

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="register" component={Register} title="Registro" hideNavBar={true}/>
    <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
  </Scene>
);

/* ... */

export default class App extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}