import styled from "styled-components";
import BaseContainer from "../../components/BaseContainer";
import TCard from "../../components/Card";
import TButton from "../../components/Button";
import Input from "../../components/Input";

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

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 600px;
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;

  text-overflow: ellipsis;
`;
export const SideBarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-left: ${props => props.theme.colors.secondary};
  &:hover {
    background-color: ${props => `${props.theme.colors.secondary}0f`};
    cursor: pointer;
  }

  ${props =>
    props.selected
      ? `border-left: 4px solid ${props.theme.colors.secondary};
        color: ${props.theme.colors.secondary};
  font-weight: bold;`
      : `border-left: 4px solid ${props.theme.colors.secondary}44;
      color: ${props.theme.colors.secondary}44;
  font-weight: normal;`}
`;
export const QuestionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;
export const QuestionNumber = styled.p`
  font-size: 1.3em;
  margin: 0;
`;
export const QuestionTitle = styled.p`
  font-size: 1.3em;
  margin: 0;
`;
export const QuestionAction = styled.div``;

export const QuestionCard = styled.div`
  display: flex;
  flex: 4;
  min-height: 600px;
`;

export const Card = styled(TCard)`
  width: 100%;
`;

export const Button = styled(TButton)`
  margin: 15px !important;
  width: auto;
`;

export const QuestionTitleInput = styled(Input)`
  font-size: 30px !important;
  line-height: 30px !important;
  height: 60px !important;
  display: flex;
  flex: 1;

  & input {
    font-size: 30px;
    line-height: 30px;
  }
  & + label {
    font-size: 30px;
    line-height: 10px;
    pointer-events: none;
    padding-bottom: 5px;
  }
`;

export const OptionInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OptionInput = styled.input`
  color: ${props => props.theme.colors.secondary};

  background-color: transparent;
  border: none !important;
  box-shadow: none !important;
  margin-bottom: 0 !important;

  &:focus {
    border: none !important;
    box-shadow: none !important;
  }
`;

export const I = styled.i`
  color: ${props => props.theme.colors.secondary} !important;

  ${props =>
    props.danger &&
    `
    color: ${props.theme.colors.danger} !important;
  `}
`;

export const QuestionTitleInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionAction = styled.div`
  cursor: pointer;
`;

export const SurveyName = styled.div`
  margin-top: 30px;
`;

export const SurveyInput = styled(QuestionTitleInput)`
  border-bottom: none !important;
  margin-bottom: 0 !important;
  text-align: center;
`;
