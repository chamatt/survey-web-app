import React, { useState, useEffect } from "react";

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
  QuestionTitleInputContainer,
  Body
} from "./styles";
import SizedBox from "../../components/SizedBox";
import Input from "../../components/Input";
import Header from "../../components/Header";

const mock = [
  {
    title: "Question 1",
    options: ["option 1", "option 2", "option 3"]
  }
];

const defaultValue = {
  title: "Question Name",
  options: ["option 1"]
};

export default function CreateSurvey() {
  const [questions, setQuestions] = useState([defaultValue]);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(questions[selectedQuestion]?.options || []);
  }, [selectedQuestion]);

  useEffect(() => {
    setOptions(questions[selectedQuestion].options);
  }, []);

  const createNewQuestion = () => {
    setQuestions([...questions, defaultValue]);
  };

  const handleSelected = i => {
    setSelectedQuestion(i);
  };

  const handleOptionsChange = (e, index) => {
    const { value } = e.target;
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  useEffect(() => {
    const newQuestions = [...questions];
    newQuestions[selectedQuestion].options = options;
    setQuestions(questions);
  }, [options]);

  return (
    <Container>
      <Header />

      <Body>
        <SideBar>
          <Button rightIcon="add" onClick={createNewQuestion}>
            New Question
          </Button>
          {questions?.map((question, i) => (
            <SideBarItem
              selected={selectedQuestion === i}
              onClick={() => handleSelected(i)}
            >
              <QuestionItemContainer>
                {/* <QuestionNumber>1 - </QuestionNumber> */}
                <QuestionTitle>{question.title}</QuestionTitle>
              </QuestionItemContainer>
            </SideBarItem>
          ))}
          <SizedBox height="10px;"></SizedBox>
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
            {options.map(op => {
              return (
                <OptionInputContainer>
                  <I className="material-icons left">menu</I>
                  <OptionInput
                    placeholder="Option"
                    value={op}
                    onChange={(e, i) => handleOptionsChange(e, i)}
                  ></OptionInput>
                </OptionInputContainer>
              );
            })}
          </Card>
        </QuestionCard>
      </Body>
    </Container>
  );
}
