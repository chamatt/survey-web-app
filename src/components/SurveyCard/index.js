import React from "react";

import {
  SurveyContainer,
  Title,
  TitleContainer,
  Category,
  Heading,
  ImgContainer,
  Img,
  Body,
  Description,
  Footer
} from "./styles";
import Button from "../Button";
import { withRouter } from "react-router-dom";

const SurveyCard = ({
  history,
  title = "IT Executive Compensation Study",
  description = "Eae pessoal tudo bem aqui quem fala é o Edu. Eae pessoal tudo bem",
  surveyId = "123"
}) => {
  return (
    <SurveyContainer>
      <Heading>
        <ImgContainer>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr0hAkIFYIpAqMCCRIRfZDs5lzfY6FllALV6Wy1FXL9xca6WFZ" />
        </ImgContainer>
        <TitleContainer>
          <Category>
            <i className="material-icons left">event_note</i>Survey
          </Category>
          <Title>{title}</Title>
        </TitleContainer>
      </Heading>
      <Body>
        <Description>
          Eae pessoal tudo bem aqui quem fala é o Edu. Eae pessoal tudo bem
          aqui. quem fala é o Edu Eae pessoal tudo bem aqui quem fala é o Edu
        </Description>
      </Body>
      <Footer>
        <Button
          color="purple"
          rounded
          onClick={() => history.push(`/survey/${surveyId}`)}
        >
          Take Survey
        </Button>
      </Footer>
    </SurveyContainer>
  );
};

export default withRouter(SurveyCard);
