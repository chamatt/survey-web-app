import React, { useState } from "react";

import { Container, Card, Question, Buttons } from "./styles";
import AnswerItem from "../../components/AnswerItem";
import Button from "../../components/Button";
import themes from "../../themes";
import SizedBox from "../../components/SizedBox";
import BackLink from "../../components/BackLink";
import Header from "../../components/Header";

export default function Survey({ history }) {
  const [selected, setSelected] = useState();

  return (
    <Container>
      <Header />
      <Card>
        <BackLink onClick={() => history.goBack()}>Back to Login</BackLink>
        <Question>What's your mother maidem name?</Question>
        <SizedBox height="20px" />
        {[0, 1, 2, 3].map(id => (
          <AnswerItem
            id={id}
            selected={selected === id}
            onClick={setSelected}
          ></AnswerItem>
        ))}
        <Buttons>
          <Button
            large
            color="secondary"
            textColor={themes.colors.textNormal}
            rightIcon="chevron_right"
          >
            Next
          </Button>
        </Buttons>
      </Card>
    </Container>
  );
}
