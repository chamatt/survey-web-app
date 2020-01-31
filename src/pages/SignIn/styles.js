import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgroundColor};
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  /* text-transform: uppercase; */
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: center;
`;

export const VectorContainer = styled.div`
  object-fit: contain;
  width: 200px;
`;

export const Img = styled.img`
  width: 100%;
`;
