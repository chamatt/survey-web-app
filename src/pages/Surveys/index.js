import React from "react";

import { Container, SurveyGrid } from "./styles";
import SurveyCard from "../../components/SurveyCard";

export default function Surveys() {
  return (
    <Container>
      <SurveyGrid>
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
      </SurveyGrid>
    </Container>
  );
}
