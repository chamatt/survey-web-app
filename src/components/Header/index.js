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

function Header({
  history,
  createSurvey = true,
  showUser = true,
  leftButtons
}) {
  const { user, setUser } = useContext(AuthContext);
  const isAdmin = user?.data?.role?.toUpperCase() === "COORDINATOR";
  const logout = () => {
    localStorage.removeItem("user");
    setUser({ isLoggedIn: false });
    axiosInstance.defaults.headers.common["Authorization"] = undefined;
  };

  const userInfo = !user?.isLoggedIn ? (
    <Card onClick={() => history.push("/login")}>
      <User>Login</User>
      <Avatar
        size="25px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL"
      ></Avatar>
    </Card>
  ) : (
    <p style={{ color: "white" }}>
      Welcome {user.data.name}.{" "}
      <LogoutButton onClick={logout}>Logout.</LogoutButton>
    </p>
  );

  return (
    <Container>
      <LeftContainer>
        {createSurvey && isAdmin && (
          <Button onClick={() => history.push("/create")}>
            Create New Survey
          </Button>
        )}
        {leftButtons && leftButtons}
      </LeftContainer>
      <Center></Center>
      <RightContainer>{showUser && userInfo}</RightContainer>
    </Container>
  );
}

export default withRouter(Header);
