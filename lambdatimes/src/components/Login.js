import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends Component {
  state = { username: "", password: "" };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  onLogUser = username => localStorage.setItem("usernameLA", username);
  render() {
    return (
      <Form onSubmit={() => this.onLogUser(this.state.username)}>
        <FormGroup>
          <Label>Username</Label>
          <Input
            onChange={e => this.handleChange(e)}
            name="username"
            placeholder="Your Username here"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            onChange={e => this.handleChange(e)}
            name="password"
            placeholder="Your Password here"
            type="password"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
