import React, { useContext } from "react";

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
import AuthContext from "../../contexts/auth";
import axiosInstace from "../../services/api";
import SizedBox from "../../components/SizedBox";

const SurveyCard = ({
  history,
  title = "IT Executive Compensation Study",
  description,
  numQuestions,
  status,
  refetchData = () => {},
  surveyId = "123"
}) => {
  const { user } = useContext(AuthContext);
  const isIdle = status?.toUpperCase() === "IDLE";
  const isActive = status?.toUpperCase() === "ACTIVE";
  const isAdmin = user?.data?.role?.toUpperCase() === "COORDINATOR";
  const changeSurveyStatus = status => {
    axiosInstace
      .put("/surveys/status/" + surveyId, { status })
      .then(refetchData)
      .catch(console.log);
  };

  return (
    <SurveyContainer>
      <Heading>
        {/* <ImgContainer>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr0hAkIFYIpAqMCCRIRfZDs5lzfY6FllALV6Wy1FXL9xca6WFZ" />
        </ImgContainer> */}
        <TitleContainer>
          <Category>
            <i className="material-icons left">event_note</i>Survey
          </Category>
          <Title>{title}</Title>
        </TitleContainer>
      </Heading>
      <Body>
        <Description>
          {numQuestions} questions ({0.25 * numQuestions} minutes)
        </Description>
      </Body>
      <Footer>
        {isIdle ? (
          <Button
            color={"primary"}
            rounded
            onClick={() => changeSurveyStatus("ACTIVE")}
          >
            {"Open Survey"}
          </Button>
        ) : (
          <Button
            color={isActive ? "purple" : "green"}
            rounded
            onClick={() => history.push(`/survey/${surveyId}`)}
          >
            {isActive ? "Take Survey" : "See Results"}
          </Button>
        )}
        {isAdmin && isActive && (
          <>
            <SizedBox height="15px" />
            <Button
              color={"red"}
              rounded
              onClick={() => changeSurveyStatus("CLOSED")}
            >
              {"Close Survey"}
            </Button>
          </>
        )}
      </Footer>
    </SurveyContainer>
  );
};

export default withRouter(SurveyCard);
