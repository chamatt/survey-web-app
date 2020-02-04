import React, { useEffect, useState, useContext } from "react";

import {
  Container,
  SurveyGrid,
  Title,
  EmptyWarning,
  EmptyWarningText
} from "./styles";
import SurveyCard from "../../components/SurveyCard";
import Header from "../../components/Header";
import SizedBox from "../../components/SizedBox";
import axiosInstace from "../../services/api";
import AuthContext from "../../contexts/auth";
import VectorContainer from "../../components/VectorContainer";
import empty_list from "../../assets/img/mirage-list-is-empty.png";
import { CLOSED, IDLE, ACTIVE } from '../../utils/constants';

export default function Surveys() {
  const [loading, setLoading] = useState(true);
  const [closedSurveys, setClosedSurveys] = useState();
  const [openSurveys, setOpenSurveys] = useState();
  const [idleSurveys, setIdleSurveys] = useState();
  const { user } = useContext(AuthContext);

  const fetchData = () => {
    axiosInstace
      .get("/surveys/")
      .then(response => {
        setLoading(false);
        setClosedSurveys(response?.data?.filter(s => s.status === CLOSED));
        setOpenSurveys(response?.data?.filter(s => s.status === ACTIVE));
        setIdleSurveys(response?.data?.filter(s => s.status === IDLE));
      })
      .catch(({ response }) => {
        setLoading(false);
      });
  };

  useEffect(fetchData, [user]);

  return (
    <Container>
      <Header />
      <>
        <SizedBox height="50px"></SizedBox>
        <Title>Active Surveys</Title>
        <SizedBox height="20px"></SizedBox>
        {!openSurveys?.length && (
          <EmptyWarning>
            <VectorContainer src={empty_list} />
            <EmptyWarningText> No Active Surveys Available</EmptyWarningText>
          </EmptyWarning>
        )}
        <SurveyGrid>
          {!loading &&
            openSurveys?.length &&
            openSurveys?.map(survey => (
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
      {!loading && idleSurveys?.length > 0 && (
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
      <>
        <SizedBox height="50px"></SizedBox>
        <Title>Closed Surveys</Title>
        <SizedBox height="20px"></SizedBox>
        {!closedSurveys?.length && (
          <EmptyWarning>
            <VectorContainer src={empty_list} />
            <EmptyWarningText> No Closed Surveys Available</EmptyWarningText>
          </EmptyWarning>
        )}
        <SurveyGrid>
          {!loading &&
            closedSurveys?.length &&
            closedSurveys?.map(survey => (
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
    </Container>
  );
}
