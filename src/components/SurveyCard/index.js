import React, { useContext } from "react";

import {
  SurveyContainer,
  Title,
  TitleContainer,
  Category,
  Heading,
  Body,
  Description,
  Footer
} from "./styles";
import Button from "../Button";
import { withRouter } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import axiosInstace from "../../services/api";
import SizedBox from "../../components/SizedBox";
import {
  COORDINATOR,
  IDLE,
  ACTIVE,
  URL_SURVEY,
  CLOSED,
  URL_SURVEYS,
  URL_RESULTS
} from "../../utils/constants";
import { toast } from "react-toastify";

const SurveyCard = ({
  history,
  title = "IT Executive Compensation Study",
  numQuestions,
  status,
  refetchData = () => {},
  surveyId = "123"
}) => {
  const { user } = useContext(AuthContext);
  const isIdle = status?.toUpperCase() === IDLE;
  const isActive = status?.toUpperCase() === ACTIVE;
  const isAdmin = user?.data?.role?.toUpperCase() === COORDINATOR;
  const changeSurveyStatus = status => {
    return axiosInstace
      .put(`${URL_SURVEYS}/status/` + surveyId, { status })
      .then(refetchData);
  };

  const handleChangeStatusToActive = () => {
    changeSurveyStatus(ACTIVE)
      .then(() => toast.success("Survey moved to active."))
      .catch(() => toast.error("Error moving survey to active."));
  };
  const handleChangeStatusToClosed = () => {
    changeSurveyStatus(CLOSED)
      .then(() => toast.success("Survey moved to closed."))
      .catch(() => toast.error("Error moving survey to closed."));
  };

  return (
    <SurveyContainer>
      <Heading>
        <TitleContainer>
          <Category>
            <i className="material-icons left">event_note</i>Survey
          </Category>
          <Title>{title}</Title>
        </TitleContainer>
      </Heading>
      <Body>
        <Description>
          {numQuestions} question{numQuestions !== 1 ? "s" : ""} ({0.25 * numQuestions} minute{numQuestions !== 4 ? "s" : ""})
        </Description>
      </Body>
      <Footer>
        {isIdle ? (
          <Button
            color={"primary"}
            rounded
            onClick={handleChangeStatusToActive}
          >
            {"Open Survey"}
          </Button>
        ) : (
          <Button
            color={isActive ? "purple" : "green"}
            rounded
            onClick={() =>
              isActive
                ? history.push(`${URL_SURVEY}/${surveyId}`)
                : history.push(`${URL_RESULTS}/${surveyId}`)
            }
          >
            {isActive ? "Take Survey" : "See Results"}
          </Button>
        )}
        {isAdmin && isActive && (
          <>
            <SizedBox height="15px" />
            <Button color={"red"} rounded onClick={handleChangeStatusToClosed}>
              {"Close Survey"}
            </Button>
          </>
        )}
      </Footer>
    </SurveyContainer>
  );
};

export default withRouter(SurveyCard);
