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
  const [closedSurveys, setClosedSurveys] = useState();
  const [openSurveys, setOpenSurveys] = useState();
  const [idleSurveys, setIdleSurveys] = useState();
  const { user } = useContext(AuthContext);

  const fetchData = () => {
    axiosInstace
      .get("/surveys/")
      .then(response => {
        setLoading(false);
        setClosedSurveys(response?.data?.filter(s => s.status === "CLOSED"));
        setOpenSurveys(response?.data?.filter(s => s.status === "ACTIVE"));
        setIdleSurveys(response?.data?.filter(s => s.status === "IDLE"));

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
      {!loading && openSurveys?.length && (
        <>
          <SizedBox height="50px"></SizedBox>
          <Title>Active Surveys</Title>
          <SizedBox height="20px"></SizedBox>
          <SurveyGrid>
            {openSurveys?.map(survey => (
              <SurveyCard
                key={survey.id}
                title={survey.title}
                surveyId={survey.id}
                numQuestions={survey.questions.length}
                status={survey.status}
                refetchData={fetchData}
              />
            ))}
          </SurveyGrid>
        </>
      )}

      {!loading && idleSurveys?.length && (
        <>
          <SizedBox height="50px"></SizedBox>
          <Title>Idle Surveys</Title>
          <SizedBox height="20px"></SizedBox>
          <SurveyGrid>
            {idleSurveys?.map(survey => (
              <SurveyCard
                key={survey.id}
                title={survey.title}
                surveyId={survey.id}
                numQuestions={survey.questions.length}
                status={survey.status}
                refetchData={fetchData}
              />
            ))}
          </SurveyGrid>
        </>
      )}

      {!loading && closedSurveys?.length && (
        <>
          <SizedBox height="50px"></SizedBox>
          <Title>Closed Surveys</Title>
          <SizedBox height="20px"></SizedBox>
          <SurveyGrid>
            {closedSurveys?.map(survey => (
              <SurveyCard
                key={survey.id}
                title={survey.title}
                surveyId={survey.id}
                numQuestions={survey.questions.length}
                status={survey.status}
                refetchData={fetchData}
              />
            ))}
          </SurveyGrid>
        </>
      )}
    </Container>
  );
}
