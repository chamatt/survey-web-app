import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { Container, Card, Question, Buttons, Head } from "./styles";
import AnswerItem from "../../components/AnswerItem";
import Button from "../../components/Button";
import themes from "../../themes";
import SizedBox from "../../components/SizedBox";
import BackLink from "../../components/BackLink";
import Header from "../../components/Header";
import VectorContainer from "../../components/VectorContainer";
import done_vector from "../../assets/img/task-done.png";
import bermuda_welcome from "../../assets/img/bermuda-welcome.png";
import api from "../../services/api";
import AuthContext from "../../contexts/auth";
import { toast } from "react-toastify";
import { URL_ROOT, URL_SURVEYS, URL_SURVEY } from "../../utils/constants";

export default function Survey({ history, match }) {
  const [selections, setSelections] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const { user } = useContext(AuthContext);
  const fetchData = () => {
    setIsLoading(true);
    api
      .get(`/surveys/${match.params.surveyId}`)
      .then(response => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch(({ response }) => {
        setIsLoading(false);
      });
  };
  useEffect(fetchData, [user]);

  if (isLoading) {
    return <Container></Container>;
  }

  const { questions, ...survey } = data;

  const goToNextPage = () => {
    const nextPageId = getNextPage(getQuestionId(match.url), questions);
    if (nextPageId) {
      history.push(
        `${getUrlWithoutLastPart(match.url)}/${getNextPage(
          getQuestionId(match.url),
          questions
        )}`
      );
    } else {
      history.push(`${URL_SURVEY}/${match.params.surveyId}/complete`);
    }
  };

  const submitSurvey = () => {
    const requestBody = {
      survey: survey.id,
      answers: []
    };

    requestBody.answers = Object.entries(selections).map(
      ([question, answer]) => ({
        question,
        answer
      })
    );

    api
      .post("/entries", requestBody)
      .then(() => {
        toast.success("☑ Survey submitted successfuly!");
        history.push(URL_ROOT);
      })
      .catch(err => {
        toast.error("Error submiting survey: " + err?.response?.data?.message);
      });
  };

  return (
    <Container>
      <Header />
      <Route exact path={`/survey/:surveyId`}>
        <Card>
          <BackLink onClick={() => history.goBack()}>Back to surveys</BackLink>
          <Head>
            <Question>Take a quick survey</Question>
            <SizedBox height="20px"></SizedBox>
            <VectorContainer src={bermuda_welcome} />
            <SizedBox height="20px"></SizedBox>
            <div>
              {questions?.length} QUESTION{questions?.length !== 1 ? "S" : ""}
            </div>
            <div>
              {" "}
              {0.25 * questions?.length} MINUTE
              {questions?.length !== 4 ? "S" : ""}
            </div>
          </Head>
          <p className="center">
            {!isLoading && data.taken && "You already completed this survey"}
          </p>
          {!isLoading && (
            <Buttons>
              {data.taken ? (
                <Button
                  large
                  block
                  color="secondary"
                  textColor={themes.colors.textNormal}
                  leftIcon="chevron_left"
                  onClick={() => history.goBack()}
                >
                  Go back
                </Button>
              ) : (
                <Button
                  large
                  block
                  color="secondary"
                  textColor={themes.colors.textNormal}
                  rightIcon="chevron_right"
                  onClick={() =>
                    history.push(
                      `/survey/${match.params.surveyId}/questions/${questions[0].id}`
                    )
                  }
                >
                  Start Now
                </Button>
              )}
            </Buttons>
          )}
        </Card>
      </Route>

      {questions?.map((question, i) => {
        return (
          <Route
            key={question.id}
            exact
            path={`${getUrlWithoutLastPart(match.path)}/${question.id}`}
          >
            <Card>
              <BackLink onClick={() => history.goBack()}>
                {i > 0 ? "Previous Question" : "Go back"}
              </BackLink>
              <Question>{question.title}</Question>
              <SizedBox height="20px" />
              {question.options.map(text => (
                <AnswerItem
                  key={text}
                  questionId={question.id}
                  answerId={text}
                  text={text}
                  selected={selections[question.id] === text}
                  selections={selections}
                  onSelect={setSelections}
                ></AnswerItem>
              ))}
              <Buttons>
                <Button
                  large
                  block
                  disabled={!selections[getQuestionId(match.url)]}
                  color="secondary"
                  textColor={themes.colors.textNormal}
                  rightIcon="chevron_right"
                  onClick={goToNextPage}
                >
                  Next
                </Button>
              </Buttons>
            </Card>
          </Route>
        );
      })}

      <Route exact path={`/survey/:surveyId/complete`}>
        <Card center>
          <BackLink onClick={() => history.goBack()}>Go back</BackLink>

          <Head>
            <Question>Survey Completed</Question>
            <SizedBox height="20px"></SizedBox>
            <VectorContainer src={done_vector} />
            <SizedBox height="20px"></SizedBox>
          </Head>
          <Buttons>
            <Button
              large
              color="danger"
              leftIcon="cancel"
              onClick={() => history.push(URL_SURVEYS)}
            >
              Cancel
            </Button>
            <SizedBox width="40px" />
            <Button
              large
              color="secondary"
              textColor={themes.colors.textNormal}
              leftIcon="check_circle"
              onClick={submitSurvey}
            >
              Submit
            </Button>
          </Buttons>
        </Card>
      </Route>
    </Container>
  );
}

function getUrlWithoutLastPart(url) {
  return url
    .split("/")
    .slice(0, -1)
    .join("/");
}

function getNextPage(id, arr) {
  const currentPageNumber = arr.findIndex(el => el.id === id);

  const nextPage = arr[currentPageNumber + 1];
  if (nextPage?.id) return nextPage.id;
  return null;
}

function getQuestionId(url) {
  return url
    .split("/")
    .slice(-1)
    .join("");
}
