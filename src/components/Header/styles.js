import styled from "styled-components";
import TCard from "../Card";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  min-width: 100%;
  margin-top: 30px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Card = styled(TCard)`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const User = styled.p`
  margin: 0;
  padding-right: 15px;
  padding-left: 15px;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
`;

export const LogoutButton = styled.span`
  cursor: pointer;
  color: red;
`;
