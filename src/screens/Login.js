import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Form,
  Item,
  Button,
  Input,
  Icon,
  Body,
  Title,
  Label
} from "native-base";
import { StyleSheet, Alert } from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../actions/auth";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidUpdate() {
    console.log(this.props.isLogin);
    if (this.props.isLogin) {
      this.props.navigation.navigate("Home");
    }
  }

  handleSubmit = () => {
    this.props.dispatch(login(this.state));
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content>
          <Form style={styles.FormContainer}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                onChangeText={email => this.setState({ email })}
                value={this.props.email}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                secureTextEntry
              />
            </Item>
            <Button style={styles.Button} onPress={this.handleSubmit} block>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  FormContainer: {
    marginTop: 130
  },
  Button: {
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 10
  }
});

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user
});

export default connect(mapStateToProps)(Login);
