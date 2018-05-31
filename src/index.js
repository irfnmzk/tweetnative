import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { View, Text } from "react-native";
import Login from "./screens/Login";
import Home from "./screens/Home";

const Root = createStackNavigator(
  {
    Login: Login,
    Home: Home
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
