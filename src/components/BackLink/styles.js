import styled from "styled-components";
import themes from "../../themes";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const BackText = styled.p`
  color: ${props => themes.colors.secondary};
`;

export const I = styled.i`
  color: ${props => props.theme.colors.secondary};
`;
