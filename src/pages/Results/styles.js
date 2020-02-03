import styled from "styled-components";
import BaseContainer from "../../components/BaseContainer";
import TCard from "../../components/Card";

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgroundColor};
  max-width: 1200px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  /* text-transform: uppercase; */
`;

export const Description = styled.p`
  color: white;
`;
