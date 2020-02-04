import React, { useContext } from "react";

import {
  Container,
  LeftContainer,
  RightContainer,
  Center,
  Card,
  User,
  LogoutButton
} from "./styles";
import Button from "../Button";
import Avatar from "../Avatar";
import { withRouter } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import axiosInstance from "../../services/api";
import VectorContainer from "../../components/VectorContainer";
import signin_vector from "../../assets/img/flame-sign-up.png";
import user_profile from "../../assets/img/user.jpg";
import { COORDINATOR, URL_ROOT, URL_LOGIN, URL_CREATE } from '../../utils/constants';

function Header({
  history,
  createSurvey = true,
  showUser = true,
  showHome = false,
  leftButtons
}) {
  const { user, setUser } = useContext(AuthContext);
  const isAdmin = user?.data?.role?.toUpperCase() === COORDINATOR;
  const logout = () => {
    localStorage.removeItem("user");
    setUser({ isLoggedIn: false });
    axiosInstance.defaults.headers.common["Authorization"] = undefined;
  };

  const userInfo = !user?.isLoggedIn ? (
    <Card onClick={() => history.push(URL_LOGIN)}>
      <User>Login</User>
      <Avatar
        size="25px"
        src={user_profile}
      ></Avatar>
    </Card>
  ) : (
    <p style={{ color: "white" }}>
      Welcome, {user.data.name}!{" "}
      <LogoutButton onClick={logout}>{" "}Logout</LogoutButton>
    </p>
  );

  return (
    <Container>
      <LeftContainer>
        {showHome ? (
          <LogoutButton onClick={() => history.push(URL_ROOT)}>Home</LogoutButton>
        ) : (
          createSurvey &&
          isAdmin && (
            <Button color="green" onClick={() => history.push(URL_CREATE)}>
              Create New Survey
            </Button>
          )
        )}
        {leftButtons && leftButtons}
      </LeftContainer>
      <Center>
        <VectorContainer
          clickable
          size="50px"
          src={signin_vector}
          onClick={() => history.push(URL_ROOT)}
        ></VectorContainer>
      </Center>
      <RightContainer>{showUser && userInfo}</RightContainer>
    </Container>
  );
}

export default withRouter(Header);
