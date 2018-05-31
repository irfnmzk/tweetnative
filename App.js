import React, { Component } from "react";
import { Provider } from "react-redux";
import { Text } from "react-native";
import store from "./src/store";
import Content from "./src";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Content />
      </Provider>
    );
  }
}

export default App;
