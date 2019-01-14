import styled from "styled-components";
import planet from "../../images/sigil_6.jpg";

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const SelectorWrapper = styled.div`
  width: 270px;
  height: 270px;
  display: inline-block;
  vertical-align: top;
  margin: 10px;
  background: ${props => `url(${require(`../../images/${props.imageName}`)})`}
    no-repeat;
  background-size: contain;
  background-size: 100%;
  border-radius: 6px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

export const BackGround = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  height: 100%;
  width: 100%;
  padding: 10px;
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
