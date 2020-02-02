import React from "react";

import { Container, Img } from "./styles";

export default function VectorContainer({ size = "200px", ...rest }) {
  return (
    <Container size={size}>
      <Img {...rest} />
    </Container>
  );
}
