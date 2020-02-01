import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  color: ${props =>
    props.textColor ? props.textColor : props.theme.colors.secondary};
  border-radius: ${props => (props.rounded ? "50px" : "2px")};

  &:hover,
  &:focus,
  &:active {
    background-color: ${props =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary} !important;
    filter: brightness(0.9);
  }

  ${props =>
    props.big &&
    `
    font-size: 1.5rem;
    padding: 15px 50px;
    width: auto;
    height: auto;
  `}
`;
