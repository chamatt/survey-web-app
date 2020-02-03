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
  Body,
  OptionAction,
  SurveyName
} from "./styles";
import SizedBox from "../../components/SizedBox";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { debounce } from "lodash";

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
  const [questions, setQuestions] = useState([{ ...defaultValue }]);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const [options, setOptions] = useState([]);
  const [questionTitle, setQuestionTitle] = useState("");

  useEffect(() => {
    setOptions(questions[selectedQuestion]?.options || []);
  }, [selectedQuestion]);

  useEffect(() => {
    setQuestionTitle(questions[selectedQuestion]?.title || "");
  }, [selectedQuestion]);

  const createNewQuestion = () => {
    setQuestions([...questions, { ...defaultValue }]);
  };

  const handleSelected = i => {
    setSelectedQuestion(i);
  };

  const updateOptions = (index, newOptions) => {
    const newQuestions = [...questions];
    newQuestions[index].options = newOptions || options;
    setQuestions(questions);
  };

  const updateQuestionTitle = (index, newTitle) => {
    const newQuestions = [...questions];
    newQuestions[index].title = newTitle || questionTitle;
    setQuestions(questions);
  };

  const handleOptionsChange = (e, index) => {
    const { value } = e.target;
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleQuestionTitleChange = e => {
    const { value } = e.target;
    setQuestionTitle(value);
  };

  const addNewOption = () => {
    const newOptions = [...options, "Option"];
    setOptions(newOptions);
  };
  const deleteOption = index => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const deleteQuestion = index => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
    setSelectedQuestion(0);
  };

  useEffect(() => {
    const doDebounce = debounce(
      () => updateOptions(selectedQuestion, options),
      100
    );
    doDebounce();
  }, [options]);

  useEffect(() => {
    const doDebounce = debounce(
      () => updateQuestionTitle(selectedQuestion, questionTitle),
      100
    );
    doDebounce();
  }, [questionTitle]);

  console.log(questions);

  return (
    <Container>
      <Header
        createSurvey={false}
        leftButtons={[
          <Button color="primary">Save And Publish</Button>,
          <Button color="purple">Save</Button>
        ]}
      />

      <SurveyName>
        <QuestionTitleInput placeholder="Survey Name"></QuestionTitleInput>
      </SurveyName>
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
              <QuestionTitleInput
                // onBlur={() => updateQuestionTitle(selectedQuestion)}
                onChange={handleQuestionTitleChange}
                value={questionTitle}
                // label="Question"
                placeholder="question"
              ></QuestionTitleInput>
              <QuestionAction>
                <Button
                  color="danger"
                  onClick={() => deleteQuestion(selectedQuestion)}
                >
                  <I className="material-icons left">cancel</I>
                  Delete Question
                </Button>
              </QuestionAction>
            </QuestionTitleInputContainer>
            {options.map((op, index) => {
              return (
                <OptionInputContainer>
                  <I className="material-icons left">menu</I>
                  <OptionInput
                    placeholder="Option"
                    value={op}
                    onChange={e => handleOptionsChange(e, index)}
                    // onBlur={() => updateOptions(index)}
                  ></OptionInput>

                  <OptionAction onClick={() => deleteOption(index)}>
                    <I className="material-icons left">cancel</I>
                  </OptionAction>
                </OptionInputContainer>
              );
            })}
            <Button rightIcon="add" onClick={addNewOption}>
              Add
            </Button>
          </Card>
        </QuestionCard>
      </Body>
    </Container>
  );
}
