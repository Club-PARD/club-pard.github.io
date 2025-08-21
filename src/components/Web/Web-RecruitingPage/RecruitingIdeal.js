import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import GreenVector from "../../../assets/img/Arrow_Ideal.png";
import OrangeVector from "../../../assets/img/OrangeVector.png";
import Cat from "../../../assets/img/CatPic.png";

function RecruitingIdeal() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/drive/u/0/folders/1qjJ5pwBMjaqI6mIaQqzcWa9MAruoli_4",
      "_blank"
    );
  };
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드는 이런 분을 기다려요</Header7>
          <Container>
            <ContainerRow>
              <ContentDiv>
                <Vector>
                  <img
                    src={GreenVector}
                    alt="Arrow_Ideal.png"
                    width="16px"
                    height="25px"
                    style={{marginBottom: "4px"}}
                  />
                  <Header5>01</Header5>
                </Vector>
                <Header6>
                  <strong className="Green">매주 토요일, 오후 1~5시</strong>에
                  진행되는
                  <br /> 정규 프로그램에 참여할 수 있는 분
                </Header6>
                <Except>
                  <Body2>*중간고사, 기말고사 기간 제외</Body2>
                </Except>
              </ContentDiv>

              <Vertical />

              <ContentDiv>
                <Vector>
                  <img
                    src={GreenVector}
                    alt="Arrow_Ideal.png"
                    width="16px"
                    height="25px"
                    style={{marginBottom: "4px"}}
                  />
                  <Header5>02</Header5>
                </Vector>
                <Header6>
                  기획자, 디자이너, 개발자와 함께
                  <br />{" "}
                  <strong className="Green">IT 프로덕트 개발의 A to Z</strong>를
                  <br /> 경험해 보고 싶으신 분
                </Header6>
              </ContentDiv>
              <Vertical />
              <ContentDiv>
                <Vector>
                  <img
                    src={GreenVector}
                    alt="Arrow_Ideal.png"
                    width="16px"
                    height="25px"
                    style={{marginBottom: "4px"}}
                  />
                  <Header5>03</Header5>
                </Vector>
                <Header6>
                  자신의 성장뿐만이 아니라
                  <br />{" "}
                  <strong className="Green">팀의 성장, 동료의 성장</strong>에
                  기꺼이
                  <br /> 헌신할 준비가 되어 있으신 분
                </Header6>
              </ContentDiv>
            </ContainerRow>
            <Gap>
              <Horizon1 />
              <Horizon2 />
              <Horizon3 />
            </Gap>
            <ContainerRow>
              <ContentDiv>
                <Vector>
                  <img
                    src={GreenVector}
                    alt="Arrow_Ideal.png"
                    width="16px"
                    height="25px"
                    style={{marginBottom: "4px"}}
                  />
                  <Header5>04</Header5>
                </Vector>
                <Header6>
                  우선순위를 정립하고
                  <br /> 함께 추구하는 목표에 대한{" "}
                  <strong className="Green">열정</strong>을<br /> 불태울 수
                  있으신 분
                </Header6>
              </ContentDiv>
              <Vertical />
              <ContentDiv>
                <Vector>
                  <img
                    src={GreenVector}
                    alt="Arrow_Ideal.png"
                    width="16px"
                    height="25px"
                    style={{marginBottom: "4px"}}
                  />
                  <Header5>05</Header5>
                </Vector>
                <Header6>
                  빠르게 실패하되 작은 성공을
                  <br /> 수집하며 파드 활동을{" "}
                  <strong className="Green">책임감</strong> 있게
                  <br /> 수행할 수 있으신 분
                </Header6>
              </ContentDiv>
              <Vertical />
              <ContentButton onClick={handleClick}>
                <Vector>
                  <img
                    src={OrangeVector}
                    alt="OrangeVector.png"
                    width="16px"
                    height="25px"
                    style={{marginBottom: "4px"}}
                  />
                  <Header5>AND...</Header5>
                </Vector>
                <Header6>
                  <strong className="Orange">파드랑 같이 노실 분!</strong>
                  <br /> 파드의 좌충우돌 사생활이
                  <br /> 궁금하다면?
                </Header6>
                <AndPic>
                  <CatImage src={Cat} alt="CatPic.png" />
                </AndPic>
              </ContentButton>
            </ContainerRow>
          </Container>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingIdeal;

const PartDiv = styled.div`
  height: 800px;
  position: relative;
  margin-top: 150px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  margin-bottom: 100px;
  margin-left: 150px;
  margin-right: 800px;
`;

const Header6 = styled.div`
  display: inline-block;
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-family: "NanumSquare Neo";
  line-height: 28px;
  color: ${(props) => props.color};
  color: #ffffff;
  .Green {
    color: #64c59a;
  }
  .Orange {
    color: #ff5c00;
  }
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: #ffffff;
  white-space: pre-wrap;
  margin-bottom: 10px;
  margin-left: 19px;
  margin-top: 9px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 19.6px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 140px;
  align-items: center;
  margin-left: 20px;
`;

const ContainerRow = styled.div`
  display: flex;
  padding: 0px;
  align-items: center;
  margin-bottom: 45px;
  position: relative;
`;

const ContentDiv = styled.div`
  width: 308px;
  height: 128px;
  margin-top: 32px;
`;

const ContentButton = styled.div`
  width: 308px;
  height: 128px;
  margin-top: 32px;
  cursor: pointer;
`;

const Vector = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Except = styled.div`
  margin-top: 8px;
  margin-left: 128px;
`;

const AndPic = styled.div`
  display: flex;
  margin-right: 1px;
  margin-left: 126.11px;
  margin-top: -75px;
  width: 167px;
  height: 196px;
  position: relative;
  //border: 1px solid #000000;
`;
const CatImage = styled.img`
  position: absolute;
  bottom: 120px;
  left: 7px;
  width: 100%;
  height: 205px;
`;
const Horizon1 = styled.div`
  border: 1.5px solid #64c59a;
  width: 312px;
  height: 0px;
  margin-bottom: 25px;
`;
const Horizon2 = styled.div`
  border: 1.5px solid #64c59a;
  width: 334px;
  height: 0px;
  margin-bottom: 25px;
  margin-left: 25px;
  margin-right: 25px;
`;
const Horizon3 = styled.div`
  border: 1.5px solid #64c59a;
  width: 312px;
  height: 0px;
  margin-bottom: 25px;
`;

const Gap = styled.div`
  width: 1100px;
  display: flex;
  height: 5px;
  margin-bottom: 30px;
  justify-content: space-between;
`;

const Vertical = styled.div`
  border: 1.5px solid #64c59a;
  width: 165px;
  height: 0px;
  transform: rotate(90deg);
  margin-top: 17px;
  margin-left: -35px;
  margin-right: -35px;
`;
