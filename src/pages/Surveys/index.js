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
        {!isLoading &&
          data?.map(survey => (
            <SurveyCard
              title={survey.title}
              surveyId={survey.id}
              numQuestions={data.length}
            />
          ))}
      </SurveyGrid>
    </Container>
  );
}
