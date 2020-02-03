import React, { useContext } from "react";

import {
  Container,
  LeftContainer,
  RightContainer,
  Center,
  Card,
  User
} from "./styles";
import Button from "../Button";
import Avatar from "../Avatar";
import { withRouter } from "react-router-dom";
import AuthContext from "../../contexts/auth";

function Header({ history }) {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.data?.role?.toUpperCase() === "COORDINATOR";

  return (
    <Container>
      <LeftContainer>
        {isAdmin && (
          <Button onClick={() => history.push("/create")}>
            Create New Survey
          </Button>
        )}
      </LeftContainer>
      <Center></Center>
      <RightContainer>
        {!user.isLoggedIn ? (
          <Card onClick={() => history.push("/login")}>
            <User>Login</User>
            <Avatar
              size="25px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL"
            ></Avatar>
          </Card>
        ) : (
          <p style={{ color: "white" }}>Welcome {user.data.name}</p>
        )}
      </RightContainer>
    </Container>
  );
}

export default withRouter(Header);
