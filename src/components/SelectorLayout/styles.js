import styled from "styled-components";

export const Loader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

export const Heading = styled.div`
  font-family: "Amiri", serif;
  color: #333;
  font-size: 30px;
  font-weight: bold;
  padding: 20px 0 40px;
`;

export const Header = styled.div`
  margin-left: auto;
`;

export const HeaderItem = styled.div`
  font-family: "Amiri", serif;
  color: #333;
  display: inline-block;
  padding: 10px;
  cursor: pointer;
`;
