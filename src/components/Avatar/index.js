import React from "react";

import { Container, Img } from "./styles";

export default function Avatar({ src, size, ...rest }) {
  return (
    <Container size={size}>
      <Img src={src} {...rest}></Img>
    </Container>
  );
}
