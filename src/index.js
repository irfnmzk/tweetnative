import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
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
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
