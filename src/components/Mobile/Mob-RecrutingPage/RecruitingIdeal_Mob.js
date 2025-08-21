import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import GreenVector from "../../../assets/img/Arrow_Ideal.png";
import OrangeVector from "../../../assets/img/OrangeVector.png";
import Cat from "../../../assets/img/CatPic.png";

function RecruitingIdealMob() {
  const handleLinkClick = () => {
    window.location.href =
      "https://drive.google.com/drive/u/0/folders/1qjJ5pwBMjaqI6mIaQqzcWa9MAruoli_4";
  };
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header8>
            파드는
            <br />
            이런 분을 기다려요
          </Header8>
          <Container>
            <ContentDiv>
              <Vector>
                <img
                  src={GreenVector}
                  alt="Arrow_Ideal.png"
                  width="16px"
                  height="25px"
                />
                <Header6>01</Header6>
              </Vector>
              <ContentText>
                <strong className="Green">매주 토요일, 오후 1~5시</strong>에
                진행되는 정규
                <br /> 프로그램에 참여할 수 있는 분
              </ContentText>
              <Except>
                <C1>*중간고사, 기말고사 기간 제외</C1>
              </Except>
            </ContentDiv>
            <Horizon />
            <ContentDiv>
              <Vector>
                <img
                  src={GreenVector}
                  alt="Arrow_Ideal.png"
                  width="16px"
                  height="25px"
                />
                <Header6>02</Header6>
              </Vector>
              <ContentText>
                기획자, 디자이너, 개발자와 함께{" "}
                <strong className="Green">
                  IT 프로덕트
                  <br /> 개발의 A to Z
                </strong>
                를 경험해 보고 싶으신 분
              </ContentText>
            </ContentDiv>
            <Horizon />
            <ContentDiv>
              <Vector>
                <img
                  src={GreenVector}
                  alt="Arrow_Ideal.png"
                  width="16px"
                  height="25px"
                />
                <Header6>03</Header6>
              </Vector>
              <ContentText>
                자신의 성장뿐만이 아니라{" "}
                <strong className="Green">
                  팀의 성장,
                  <br /> 동료의 성장
                </strong>
                에 기꺼이 헌신할 준비가
                <br /> 되어 있으신 분
              </ContentText>
            </ContentDiv>
            <Horizon />
            <ContentDiv>
              <Vector>
                <img
                  src={GreenVector}
                  alt="Arrow_Ideal.png"
                  width="16px"
                  height="25px"
                />
                <Header6>04</Header6>
              </Vector>
              <ContentText>
                우선순위를 정립하고 함께 추구하는
                <br /> 목표에 대한 <strong className="Green">열정</strong>을
                불태울 수 있으신 분
              </ContentText>
            </ContentDiv>
            <Horizon />
            <ContentDiv>
              <Vector>
                <img
                  src={GreenVector}
                  alt="Arrow_Ideal.png"
                  width="16px"
                  height="25px"
                />
                <Header6>05</Header6>
              </Vector>
              <ContentText>
                빠르게 실패하되 작은 성공을 수집하며 파드
                <br /> 활동을 <strong className="Green">책임감</strong> 있게
                수행할 수 있으신 분
              </ContentText>
            </ContentDiv>
            <Horizon />
            <ContentDiv onClick={handleLinkClick}>
              <Vector>
                <img
                  src={OrangeVector}
                  alt="OrangeVector.png"
                  width="16px"
                  height="25px"
                />
                <Header6>AND...</Header6>
              </Vector>
              <ContentText>
                <strong className="Orange">파드랑 같이 노실 분!</strong>
                <br /> 파드의 좌충우돌 사생활이 궁금하다면?
              </ContentText>
              <AndPic>
                <CatImage src={Cat} alt="CatPic.png" />
              </AndPic>
            </ContentDiv>
          </Container>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingIdealMob;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  line-height: 42px;
  margin-top: 130px;
  margin-left: 36px;
`;

const Header6 = styled.div`
  font-size: ${({ theme }) => theme.Mob_fontSizes.Header6};
  font-weight: ${({ theme }) => theme.fontWeights.Header6};
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 19px;
  margin-right: 243px;
`;

const ContentText = styled.div`
  font-family: "NanumSquare Neo";
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  text-align: left;
  color: ${(props) => props.color};
  color: #ffffff;
  .Green {
    color: #64c59a;
  }
  .Orange {
    color: #ff5c00;
  }
`;

const C1 = styled.div`
  font-family: "NanumSquare Neo";
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #ffffff;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 130px;
  margin-left: 36px;
  align-items: flex-start;
`;
const ContentDiv = styled.div`
  width: 303px;
  height: auto;
  cursor: pointer;
  //margin-top: 32px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PartDiv = styled.div`
  height: 1450px;
  width: 375px;
  justify-content: center;
  margin-bottom: 35px;
`;
const Vector = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Except = styled.div`
  margin-top: 15px;
  margin-left: 148px;
`;

const AndPic = styled.div`
  display: flex;
  margin-left: 200px;
  margin-top: -120px;
  width: 106px;
  height: 123px;
  position: relative;
  //border: 1px solid #000000;
  cursor: pointer;
`;
const CatImage = styled.img`
  bottom: 120px;
  left: 15px;
`;

const Horizon = styled.div`
  border: 1px solid #64c59a;
  width: 303px;
  height: 0px;
  margin-bottom: 35px;
  margin-top: 35px;
`;
