import React, { useState } from "react";

import {
  Container,
  SideBar,
  SideBarItem,
  QuestionNumber,
  QuestionCard,
  QuestionItemContainer,
  QuestionTitle,
  QuestionAction,
  Card,
  Button,
  QuestionTitleInput,
  OptionInput,
  OptionInputContainer,
  I,
  QuestionTitleInputContainer
} from "./styles";
import SizedBox from "../../components/SizedBox";
import Input from "../../components/Input";

const mock = [
  {
    title: "Question 1",
    options: ["option 1", "option 2", "option 3"]
  }
];

export default function CreateSurvey() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState();
  return (
    <Container>
      <SideBar>
        {[0, 1, 2, 3].map(() => (
          <SideBarItem>
            <QuestionItemContainer>
              {/* <QuestionNumber>1 - </QuestionNumber> */}
              <QuestionTitle>Question 1</QuestionTitle>
            </QuestionItemContainer>
          </SideBarItem>
        ))}
        <SizedBox height="10px;"></SizedBox>
        <Button rightIcon="add">New Question</Button>
      </SideBar>

      <QuestionCard>
        <Card>
          <QuestionTitleInputContainer>
            <QuestionTitleInput label="Question"></QuestionTitleInput>
            <QuestionAction>
              <Button color="danger">
                <I className="material-icons left">cancel</I>
                Delete Question
              </Button>
            </QuestionAction>
          </QuestionTitleInputContainer>
          {[0, 1, 2, 3].map(() => {
            return (
              <OptionInputContainer>
                <I className="material-icons left">menu</I>
                <OptionInput placeholder="Option"></OptionInput>
              </OptionInputContainer>
            );
          })}
        </Card>
      </QuestionCard>
    </Container>
  );
}
