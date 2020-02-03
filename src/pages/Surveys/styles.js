import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgroundColor};
  max-width: 1200px;
  /* margin: 0 auto; */
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const SurveyGrid = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  /* text-transform: uppercase; */
`;
