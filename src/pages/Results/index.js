import React, { useState, useEffect } from "react";

import { Container, Title, Description } from "./styles";
import axiosInstance from "../../services/api";

import Header from "../../components/Header";

export default function Survey({ history, match }) {
  const [data, setData] = useState();
  const mount = data =>
    data?.questions?.map(question => {
      return (
        <>
          <p>{"Question: " + question.title}</p>
          {question?.options?.map((option, i) => (
            <p>
              {option}: {question.result[i]}
            </p>
          ))}
        </>
      );
    });

  useEffect(() => {
    axiosInstance
      .get(`/surveys/${match.params.id}/result`)
      .then(response => {
        console.log(response);
        setData(response?.data);
      })
      .catch(console.log);
  }, [match.params.id]);

  return (
    <Container>
      <Header />
      {data && (
        <>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
          {mount(data)}
        </>
      )}
    </Container>
  );
}
