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

export const Card = styled(TCard)`
  width: 90%;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${props => props.theme.colors.secondary};

  @media (min-width: 900px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const Question = styled.h2`
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 2.5em;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
