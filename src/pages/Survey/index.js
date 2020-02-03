import React, { useState, useEffect } from "react";
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
import useFetch from "react-fetch-hook";
import axios from "axios";

const mock = {
  questions: [
    {
      options: ["option 1", "option 2", "option 3"],
      createdAt: "2020-01-31T17:35:37.332Z",
      id: "5e3465747081ea606ddff593",
      title: "question title",
      __v: 0
    },
    {
      options: ["option 1", "option 2", "option 3"],
      createdAt: "2020-01-31T17:35:37.332Z",
      id: "5e3465747081ea606ddff594",
      title: "question title 2",
      __v: 0
    }
  ],
  status: "ACTIVE",
  createdAt: "2020-01-31T17:35:37.330Z",
  deletedAt: null,
  id: "5e3465747081ea606ddff595",
  title: "survey title",
  createdBy: {
    createdAt: "2020-01-31T16:52:41.315Z",
    deletedAt: null,
    id: "5e345b5a42b8e14ce562a192",
    username: "brenoscakz123231er",
    email: "brenoscalze31231r1@gmail.com",
    password: "$2a$10$7oH/lH4wAJh.KVHMTdd0qOJ.Yi5b3S3Mp.seMcAQuchybM3vYOphS",
    role: "coordinator",
    name: "Breno",
    __v: 0
  },
  __v: 0
};

export default function Survey({ history, match }) {
  const [selections, setSelections] = useState({});
  // const { questions, ...survey } = mock;
  const { isLoading, data } = useFetch(
    `https://nextly-survey.herokuapp.com/surveys/${match.params.surveyId}`
  );

  if (isLoading) {
    return <Container></Container>;
  }

  const { questions, ...survey } = data;

  console.log(questions, survey);

  const goToNextPage = () => {
    const nextPageId = getNextPage(getQuestionId(match.url), questions);
    console.log({ nextPageId });
    console.log(getQuestionId(match.url), questions, nextPageId);
    if (nextPageId) {
      history.push(
        `${getUrlWithoutLastPart(match.url)}/${getNextPage(
          getQuestionId(match.url),
          questions
        )}`
      );
    } else {
      history.push(`/survey/${match.params.surveyId}/complete`);
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

    console.log(requestBody);

    axios
      .post("https://nextly-survey.herokuapp.com/entries", requestBody)
      .then(() => {
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Header />
      <Route exact path={`/survey/:surveyId`}>
        <Card>
          <BackLink onClick={() => history.goBack()}>Back to surveys</BackLink>
          <Head>
            <Question>Take a Quick Survey</Question>
            <SizedBox height="20px"></SizedBox>
            <VectorContainer src={bermuda_welcome} />
            <SizedBox height="20px"></SizedBox>
            <div>{questions.length} QUESTIONS</div>
            <div> {0.25 * questions.length} MINUTES</div>
          </Head>

          <Buttons>
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
          </Buttons>
        </Card>
      </Route>

      {questions.map(question => (
        <Route
          exact
          path={`${getUrlWithoutLastPart(match.path)}/${question.id}`}
        >
          <Card>
            <BackLink onClick={() => history.goBack()}>
              Previous Question
            </BackLink>
            <Question>{question.title}</Question>
            <SizedBox height="20px" />
            {question.options.map(text => (
              <AnswerItem
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
      ))}

      <Route exact path={`/survey/:surveyId/complete`}>
        <Card center>
          <BackLink onClick={() => history.goBack()}>
            Previous Question
          </BackLink>

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
              onClick={() => history.push("/surveys")}
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
  const currentPageNumber = arr
    .map((el, i) => (el.id === id ? i : null))
    .filter(el => el);

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
