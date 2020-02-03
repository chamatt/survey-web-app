import styled from "styled-components";
import BaseContainer from "../../components/BaseContainer";

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  flex-direction: row;
  background-color: ${props => props.theme.colors.backgroundColor};
  max-width: 1200px;
  width: 100%;
`;
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 600px;
  flex: 1;
  background-color: #ff00000f;
`;
export const SideBarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-left: ${props => props.theme.colors.secondary};
`;
export const QuestionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  color: ${props => props.theme.colors.secondary};
`;
export const QuestionNumber = styled.p`
  font-size: 1.3em;
  margin: 0;
`;
export const QuestionTitle = styled.p`
  font-size: 1.3em;
  margin: 0;
  font-weight: bold;
`;
export const QuestionAction = styled.div``;

export const QuestionCard = styled.div`
  display: flex;
  flex: 4;
  background-color: green;
  min-height: 600px;
  background-color: #00ff000f;
`;
