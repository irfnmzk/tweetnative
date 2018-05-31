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
import { StyleSheet, KeyboardAvoidingView } from "react-native";

class Login extends Component {
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
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
            <Button style={styles.Button} block>
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
