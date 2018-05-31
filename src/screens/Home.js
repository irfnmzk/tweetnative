import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <View>
        <Text> Name : {this.props.user.name} </Text>
        <Text> username : {this.props.user.username} </Text>
        <Text> Followers : {this.props.user.follower} </Text>
        <Text> Following : {this.props.user.following} </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user,
  failed: state.auth.failed,
  errorMessage: state.auth.errorMessage
});

export default connect(mapStateToProps)(Home);
