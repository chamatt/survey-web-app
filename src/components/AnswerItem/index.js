import React from "react";

import { Container, AnswerText, AnswerTextContainer, I } from "./styles";

export default function AnswerItem({
  text,
  selected = false,
  onClick = () => {},
  id
}) {
  return (
    <Container selected={selected} onClick={() => onClick(id)}>
      <AnswerTextContainer>
        <AnswerText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor
          urna, vestibulum eget commodo et, posuere vitae nulla. Morbi congue,
          elit sed facilisis laoreet, justo enim scelerisque nibh?
        </AnswerText>
      </AnswerTextContainer>
      <I className="material-icons" selected={selected}>
        {selected ? "check_box" : "check_box_outline_blank"}
      </I>
    </Container>
  );
}
