import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Login from "./screens/Login";
import Home from "./screens/Home";

const Root = createStackNavigator(
  {
    Login: Login
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

class App extends Component {
  render() {
    if (this.props.auth.isLogin) {
      return <Home />;
    }
    return <Root />;
  }
}

export default connect(state => ({
  auth: state.auth
}))(App);
