import styled from "styled-components";

export const Container = styled.div`
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  overflow: hidden;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
