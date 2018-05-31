import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { View, Text } from "react-native";
import Login from "./screens/Login";

const Root = createStackNavigator(
  {
    Login: Login
  },
  {
    initialRouteNames: "Login",
    headerMode: "none"
  }
);

class App extends Component {
  render() {
    return <Root />;
  }
}

export default App;
