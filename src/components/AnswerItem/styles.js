import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ffffff0f;
  transition: all 0.1s;
  /* ${props =>
    props.selected
      ? `border: 1px solid ${props.theme.colors.primary};`
      : `border: 1px solid #ffffff0f;`} */

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
  
`;

export const AnswerTextContainer = styled.div`
  flex: 1;
  padding: 15px 5px;
  padding-left: 15px;
  text-transform: capitalize;
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
