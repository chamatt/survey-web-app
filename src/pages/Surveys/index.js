import React from "react";
import useFetch from "react-fetch-hook";

import { Container, SurveyGrid, Title } from "./styles";
import SurveyCard from "../../components/SurveyCard";
import Header from "../../components/Header";
import SizedBox from "../../components/SizedBox";

export default function Surveys() {
  const { isLoading, data } = useFetch(
    "https://nextly-survey.herokuapp.com/surveys"
  );

  console.log(data);
  return (
    <Container>
      <Header />
      <SizedBox height="50px"></SizedBox>

      <Title>Surveys</Title>
      <SizedBox height="20px"></SizedBox>
      <SurveyGrid>
        <SurveyCard surveyId="12312312312" />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
      </SurveyGrid>
    </Container>
  );
}
