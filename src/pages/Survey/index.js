import React, { useState } from "react";

import { Container, Card, Question, Buttons } from "./styles";
import AnswerItem from "../../components/AnswerItem";
import Button from "../../components/Button";
import themes from "../../themes";
import SizedBox from "../../components/SizedBox";

export default function Survey() {
  const [selected, setSelected] = useState();

  return (
    <Container>
      <Card>
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
          <Button color="secondary" textColor={themes.colors.textNormal}>
            Previous
          </Button>
          <Button large color="purple">
            Next
          </Button>
        </Buttons>
      </Card>
    </Container>
  );
}
