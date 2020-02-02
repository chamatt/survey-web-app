import styled from "styled-components";
export const Container = styled.div`
  object-fit: contain;
  width: ${props => (props.size ? props.size : "200px")};
`;

export const Img = styled.img`
  width: 100%;
`;
