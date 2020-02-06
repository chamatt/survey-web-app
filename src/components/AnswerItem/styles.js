import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ffffff0f;
  transition: all 0.1s;

  &:hover {
    background-color: rgba(100, 100, 110, 0.1);
    i {
      color: ${props => props.theme.colors.primary};
    }
  }

  ${props =>
    props.selected &&
    `
    background-color: ${props.theme.colors.secondary} !important;
    color: ${props.theme.colors.textNormal};
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    `}

  ${props =>
    props.percentage &&
    `background-image: linear-gradient(90deg, ${
      props.theme.colors.secondary
    }44 ${parseInt(props.percentage * 100 - -1)}%, transparent ${parseInt(
      props.percentage * 100
    )}%, transparent  ${parseInt(101 - props.percentage * 100)}%);
        border-right: none;
        `}
`;

export const AnswerTextContainer = styled.div`
  flex: 1;
  padding: 15px 5px;
  padding-left: 15px;
`;

export const AnswerText = styled.p`
  font-size: 1.3rem;
  user-select: none;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }

  ${props =>
    props.selected &&
    `
    color: ${props.theme.colors.textNormal};
    `}
`;

export const I = styled.i`
  user-select: none;
  padding: 20px;
  font-size: 2rem;
  ${props => props.selected && `color: ${props.theme.colors.primary};`}
`;

export const ResultPercentage = styled.div`
  padding-right: 10px;
`;
