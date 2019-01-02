import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const SelectorWrapper = styled.div`
  width: 250px;
  height: 250px;
  display: inline-block;
  vertical-align: top;
`;

export const Button = styled.div`
  border: 1px solid #dedede;
  background:#106fb1;
  border-radius: 6px;
  line-height: 40px;
  width: 200px;
  text-align: center;
  ${props => !props.enabled && "opacity: 0.4;"}
  cursor: ${props => (props.enabled ? "pointer" : "default")};
  color: #FFF;
  font-sizd:14px;
  font-weight:bold;
  margin:auto;
`;

export const OptionsWrapper = styled.div`
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const TimeTaken = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Amiri", serif;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
`;