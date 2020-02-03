import React, { useEffect, useState, useContext } from "react";

import { Container, SurveyGrid, Title } from "./styles";
import SurveyCard from "../../components/SurveyCard";
import Header from "../../components/Header";
import SizedBox from "../../components/SizedBox";
import axiosInstace from "../../services/api";
import AuthContext from "../../contexts/auth";

export default function Surveys() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const { user } = useContext(AuthContext);
  const fetchData = () => {
    axiosInstace
      .get("/surveys/")
      .then(response => {
        setLoading(false);
        setData(response.data);

        console.log(response.data);
      })
      .catch(({ response }) => {
        setLoading(false);
      });
  };

  useEffect(fetchData, [user]);

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
              key={survey.id}
              title={survey.title}
              surveyId={survey.id}
              numQuestions={data.length}
              status={survey.status}
              refetchData={fetchData}
            />
          ))}
      </SurveyGrid>
    </Container>
  );
}
