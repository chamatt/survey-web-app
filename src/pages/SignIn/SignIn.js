import React from "react";

import { Container, Title, Buttons, Card } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SizedBox from "../../components/SizedBox";
import VectorContainer from "../../components/VectorContainer";
import signin_vector from "../../assets/img/flame-sign-up.png";

export default function SignIn({ history }) {
  return (
    <Container>
      <VectorContainer src={signin_vector}></VectorContainer>
      <Title>Sign In</Title>
      <Card>
        <form className="col s12">
          <Input
            id="email"
            name="email"
            icon="mail_outline"
            type="email"
            label="Email Address"
          ></Input>
          <Input
            id="password"
            name="password"
            icon="lock_outline"
            type="password"
            label="Password"
          ></Input>
        </form>
        <SizedBox height="20px" />
        <Buttons>
          <Button onClick={() => history.push("/")}>Sign In</Button>
          <SizedBox height="20px" />
          <Button onClick={() => history.push("/register")} color="purple">
            Create Account
          </Button>
        </Buttons>
      </Card>
    </Container>
  );
}
