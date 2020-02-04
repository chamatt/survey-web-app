import styled from "styled-components";

export const SurveyContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 10px rgba(200, 150, 150, 0.1);
  margin-right: 15px;
  margin-left: 15px;
  padding: 40px;
  border-radius: 15px;
  margin-bottom: 30px;

  @media (min-width: 1025px) {
    width: calc(33% - 30px);
    flex-basis: calc(33% - 30px);
  }
  @media (max-width: 1024px) {
    width: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  @media (max-width: 768px) {
    width: calc(100% - 30px);
    flex-basis: calc(100% - 30px);
  }
`;

export const Title = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.textNormal};
  font-size: 1.3rem;
  margin: 0;
`;

export const ImgContainer = styled.div`
  height: 80px;
  max-width: 150px;
  margin-right: 20px;
`;

export const Img = styled.img`
  object-fit: contain;
  height: 100%;
  border-radius: 15px;
`;

export const Category = styled.p`
  color: ${props => props.theme.colors.textNormal};
  font-size: 1.1rem;
  margin: 0;
`;
export const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Body = styled.div``;

export const Description = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.textNormal};
`;

export const Footer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
