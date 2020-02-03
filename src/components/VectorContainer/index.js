import React from "react";

import { Container, Img } from "./styles";

export default function VectorContainer({
  size = "200px",
  clickable,
  ...rest
}) {
  return (
    <Container size={size} clickable={clickable}>
      <Img {...rest} />
    </Container>
  );
}
