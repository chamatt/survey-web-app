import React, { useEffect, useState } from "react";

import { Container, SurveyGrid, Title } from "./styles";
import SurveyCard from "../../components/SurveyCard";
import Header from "../../components/Header";
import SizedBox from "../../components/SizedBox";
import axiosInstace from "../../services/api";

export default function Surveys() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    axiosInstace
      .get("/surveys/")
      .then(() => {
        setLoading(false);
      })
      .catch(({ response }) => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Header />
      <SizedBox height="50px"></SizedBox>

      <Title>Surveys</Title>
      <SizedBox height="20px"></SizedBox>
      <SurveyGrid>
        {!loading &&
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
