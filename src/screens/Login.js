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

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    axios
      .post(
        "https://us-central1-react-native-project-cfd3e.cloudfunctions.net/auth",
        {
          email: this.state.email,
          password: this.state.password
        }
      )
      .then(res => {
        data = res.data;
        if (data.status === "success") {
          this.props.navigation.navigate("Home");
        } else {
          Alert.alert("Failed");
        }
      })
      .catch(e => console.log(e));
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
                value={this.state.email}
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

export default Login;
