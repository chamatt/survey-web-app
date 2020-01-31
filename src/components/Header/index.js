import React from "react";

import {
  Container,
  LeftContainer,
  RightContainer,
  Center,
  Title,
  Card,
  User
} from "./styles";
import Button from "../Button";
import Avatar from "../Avatar";
import { withRouter } from "react-router-dom";

function Header({ history }) {
  return (
    <Container>
      <LeftContainer>
        <Button>Create New Survey</Button>
      </LeftContainer>
      <Center></Center>
      <RightContainer>
        <Card onClick={() => history.push("/login")}>
          <User>Login</User>
          <Avatar
            size="25px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL"
          ></Avatar>
        </Card>
      </RightContainer>
    </Container>
  );
}

export default withRouter(Header);
