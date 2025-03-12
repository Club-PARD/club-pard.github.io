import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import AboutImage from "../../../assets/img/AboutLogo_gray.png";
import React from "react";
import { pardDATA } from "../../../utils/data.constant";

function ProjectFirst() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <AboutLogo src={AboutImage} alt="AboutLogo" />
          <TextContainer>
            <Header2>
              PARD가 진행한
              <br />
              프로젝트를 보여드릴게요
            </Header2>
          </TextContainer>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectFirst;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: white;
  font-family: "NanumSquare Neo";
  line-height: 140%;
  margin-bottom: 43px;
  white-space: pre-line;
  text-align: center;
  width: 900px;
  height: 168px;
  left: 307px;
  top: 275px;
`;

const PartDiv = styled.div`
  position: relative;
  padding-left: 268px;
  padding-right: 268px;
  padding-top: 230px;
  height: 700px; //배너 내리면 390px
  display: flex;
  justify-content: center;

  overflow-x: hidden;
  background-color: #1a1a1a;
  transition: background-color 0.3s ease;
`;

const AboutLogo = styled.img`
  position: absolute;
  width: 1020.27px;
  height: 390px;
  margin-left: 1005px;
  margin-top: 140px; //240px banner
  transform: translate(-50%, -50%);
  opacity: 1;
  object-fit: contain;
`;

const Div = styled.div`
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 460px;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 375px; //475 banner
  left: 50%;
  transform: translate(-50%, -50%);
`;