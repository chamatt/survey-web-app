import styled from "styled-components";
export const Container = styled.div`
  object-fit: contain;
  width: ${props => (props.size ? props.size : "200px")};
  ${props => props.clickable && "cursor: pointer"}
`;

export const Img = styled.img`
  width: 100%;
`;
