import React from "react";

import { Container } from "./styles";

export default function Card({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
