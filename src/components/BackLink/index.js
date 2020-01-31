import React from "react";

import { Container, I, BackText } from "./styles";

export default function BackLink({ icon, onClick, children }) {
  return (
    <Container onClick={onClick}>
      <I className="material-icons prefix">chevron_left</I>
      <BackText>{children}</BackText>
    </Container>
  );
}
