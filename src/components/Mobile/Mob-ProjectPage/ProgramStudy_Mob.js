import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import Bar from "../../../assets/img/스터디Frame.png";
import Card2 from "./Card2";

function ProgramStudy_Mob() {
  return (
    <Div>
      <ThemeProvider theme={theme}>
        <SeminarDiv>
          <Header7_1></Header7_1>
          <Header7_2>스터디</Header7_2>
          <Header4>공동체 학습의 기쁨</Header4>
          <Body2_1>PARD는 상시 학습이 흐르는 조직입니다.</Body2_1>
          <Body2>
            주제 선정부터 인원 모집까지,
            <br />
            서로의 실력을 향상시킬 수 있는 학습 모임을
            <br />
            자발적으로 주도하고 참여하여 나눕니다.
            <br />
          </Body2>
          <CardnBtn>
            <Card2 />
          </CardnBtn>
        </SeminarDiv>
        <Seminar_Bar src={Bar} alt="Bar" />
      </ThemeProvider>
    </Div>
  );
}

export default ProgramStudy_Mob;

const Header7_1 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  justify-content: start;
  white-space: pre-line;
  margin-top: 70px;
  margin-left: 10px;
`;

const Header7_2 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  justify-content: start;
  white-space: pre-line;
  margin-top: 70px;
  margin-left: 10px;
`;

const Header4 = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start;
  margin-top: 50px;
  margin-left: 10px;
`;

const Body2 = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start;
  line-height: 19.6px;
  display: flex;
  margin-left: 10px;
`;

const Body2_1 = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #5262f5;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start;
  line-height: 19.6px;
  display: flex;
  margin-left: 10px;
  margin-top: 30px;
`;

const SeminarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto 0;
  width: 340px;
  height: 907px;
`;

const CardnBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 360px;
`;

const Seminar_Bar = styled.img`
  width: 100%;
  height: auto;
  margin-top: 100px;
  margin-bottom: auto;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
