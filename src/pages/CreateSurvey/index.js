import React from "react";

import {
  Container,
  SideBar,
  SideBarItem,
  QuestionNumber,
  QuestionCard,
  QuestionItemContainer,
  QuestionTitle,
  QuestionAction
} from "./styles";
import Card from "../../components/Card";

export default function CreateSurvey() {
  return (
    <Container>
      <SideBar>
        <SideBarItem>
          <QuestionItemContainer>
            <QuestionNumber>1 - </QuestionNumber>
            <QuestionTitle>Section 1</QuestionTitle>
          </QuestionItemContainer>
          <QuestionAction />
        </SideBarItem>
      </SideBar>

      <QuestionCard>
        <Card>sjdfskladjfk</Card>
      </QuestionCard>
    </Container>
  );
}
