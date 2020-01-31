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

export default function Survey() {
  return (
    <SurveyContainer>
      <Heading>
        <ImgContainer>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr0hAkIFYIpAqMCCRIRfZDs5lzfY6FllALV6Wy1FXL9xca6WFZ" />
        </ImgContainer>
        <TitleContainer>
          <Category>
            <i className="material-icons right">event_note</i>Survey
          </Category>
          <Title>IT Executive Compensation Study</Title>
        </TitleContainer>
      </Heading>
      <Body>
        <Description>
          Eae pessoal tudo bem aqui quem fala é o Edu. Eae pessoal tudo bem
          aqui. quem fala é o Edu Eae pessoal tudo bem aqui quem fala é o Edu
        </Description>
      </Body>
      <Footer>
        <Button color="purple" rounded>
          Take Survey
        </Button>
      </Footer>
    </SurveyContainer>
  );
}
