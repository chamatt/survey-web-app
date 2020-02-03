import React, { useContext, useState } from "react";
import { Container, Title, Buttons, Card, ErrorMessage } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SizedBox from "../../components/SizedBox";
import VectorContainer from "../../components/VectorContainer";
import signin_vector from "../../assets/img/flame-sign-up.png";
import AuthContext from "../../contexts/auth";
import axiosInstance from "../../services/api";

export default function SignIn({ history }) {
  const { setUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState("email@email.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState();

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post("/users/login", {
        email,
        password
      });

      console.log(response);

      axiosInstance.defaults.headers.common = {
        Authorization: `Bearer ${response.data.token}`
      };

      const userData = {
        ...user,
        isLoggedIn: true,
        data: response.data.user,
        token: response.data.token
      };

      setUser(userData);

      localStorage.setItem("user", JSON.stringify(userData));

      history.push("/");
    } catch ({ response }) {
      console.log(response);
      setError(response?.data?.message || "Unexpected error");
    }
  };

  console.log(email, password);

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
            value={email}
            onChange={e => setError() || setEmail(e.target.value)}
          ></Input>
          <Input
            id="password"
            name="password"
            icon="lock_outline"
            type="password"
            label="Password"
            value={password}
            onChange={e => setError() || setPassword(e.target.value)}
          ></Input>
        </form>
        <ErrorMessage>{error}</ErrorMessage>
        <SizedBox height="20px" />
        <Buttons>
          <Button onClick={() => login(email, password)}>Sign In</Button>
          <SizedBox height="20px" />
          <Button onClick={() => history.push("/register")} color="purple">
            Create Account
          </Button>
        </Buttons>
      </Card>
    </Container>
  );
}
