import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { Icon } from "native-base";
import { connect } from "react-redux";
import Login from "./screens/Login";
import Home from "./screens/Home";

const Root = createStackNavigator(
  {
    Home: Home
  },
  {
    headerMode: "none"
  }
);

class App extends Component {
  render() {
    if (this.props.auth.isLogin) {
      return <Root />;
    }
    return <Login />;
  }
}

export default connect(state => ({
  auth: state.auth
}))(App);
