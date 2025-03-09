import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";

function RecruitingSecond() {
  const handleClick = () => {
    window.open("https://we-pard.notion.site/PARD-5-1939fe7667e680cc9180df982a19753c", "_blank");
  };
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드와 함께하는 여정을 소개해요.</Header7>

          <Header61>
            2025년도 3월부터 7월까지 활동할 5기 멤버들을 모집합니다
            <br></br>* 일부 일정 변동 가능
          </Header61>

          <Container>
            <Box style={{ border: "2px solid rgba(100, 197, 154, 0.2)" }}>
              <IconWrap>
                <Icon1 viewBox="0 0 30 38">
                  <path
                    d="M16 37.375H2.875C1.42731 37.375 0.25 36.1977 0.25 34.75V3.25C0.25 1.80231 1.42731 0.625 2.875 0.625H26.5C27.9477 0.625 29.125 1.80231 29.125 3.25V22.9375H26.5V3.25H2.875V34.75H16V37.375Z"
                    fill="white"
                  />
                </Icon1>
                <Icon1B viewBox="0 0 30 38">
                  <path
                    d="M17.875 26.6738L14.4756 23.2744L12.625 25.125L17.875 30.375L28.375 19.875L26.5244 18.0244L17.875 26.6738ZM0.8125 13.3125H10V15.9375H0.8125V13.3125ZM0.8125 6.75H16.5625V9.375H0.8125V6.75ZM0.8125 0.1875H16.5625V2.8125H0.8125V0.1875Z"
                    fill="white"
                  />
                </Icon1B>
              </IconWrap>
              <Box1>서류접수</Box1>
              <BoxText>3/8(토) ~ 3/11(화)</BoxText>
            </Box>
            <Box style={{ border: "2px solid rgba(100, 197, 154, 0.4)" }}>
              <IconWrap>
                <Icon2 viewBox="0 0 29 28">
                  <path
                    d="M16.9395 8.97954L24.4491 2.36571C24.6674 2.17363 24.9328 2.05125 25.2145 2.01293C25.4962 1.9746 25.7823 2.02191 26.0395 2.14932C26.2966 2.27672 26.514 2.47894 26.6663 2.73228C26.8186 2.98562 26.8994 3.27958 26.8992 3.57971V24.9054C26.8994 25.2055 26.8186 25.4994 26.6663 25.7528C26.514 26.0061 26.2966 26.2083 26.0395 26.3357C25.7823 26.4632 25.4962 26.5105 25.2145 26.4721C24.9328 26.4338 24.6674 26.3114 24.4491 26.1194L16.9395 19.5055H3.65995C3.2197 19.5055 2.79749 19.3207 2.48619 18.9917C2.17489 18.6627 2 18.2165 2 17.7512V10.7339C2 10.2686 2.17489 9.82237 2.48619 9.49337C2.79749 9.16437 3.2197 8.97954 3.65995 8.97954H16.9395Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon2>
                <Icon2B viewBox="0 0 26 25">
                  <path
                    d="M19.8138 1.73242C21.0941 1.73242 22.3219 2.30945 23.2273 3.33657C24.1326 4.3637 24.6412 5.75677 24.6412 7.20934C24.6412 8.66191 24.1326 10.055 23.2273 11.0821C22.3219 12.1092 21.0941 12.6863 19.8138 12.6863M6.94068 1.73242V21.8145C6.94068 22.2987 6.77115 22.763 6.46938 23.1054C6.16761 23.4478 5.75832 23.6401 5.33155 23.6401H3.72242C3.29565 23.6401 2.88636 23.4478 2.58459 23.1054C2.28281 22.763 2.11328 22.2987 2.11328 21.8145V12.6863"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon2B>
              </IconWrap>
              <Box2>서류 합격 발표</Box2>
              <BoxText>3/12(수) 오전</BoxText>
            </Box>
            <Box style={{ border: "2px solid rgba(100, 197, 154, 0.7)" }}>
              <IconWrap>
                <Icon3 viewBox="0 0 38 36">
                  <path
                    d="M3.12501 17.75C3.12132 14.0236 4.51644 10.4314 7.03436 7.68436C9.55229 4.93727 13.0096 3.23532 16.7223 2.91522C20.4349 2.59512 24.1325 3.6802 27.0835 5.95578C30.0345 8.23135 32.0238 11.5317 32.658 15.2038C33.3895 15.6683 34.0142 16.2827 34.4908 17.0063C34.9674 17.73 35.2851 18.5465 35.423 19.402C35.4755 18.8578 35.5 18.3065 35.5 17.75C35.5 8.08475 27.6653 0.25 18 0.25C8.33476 0.25 0.500012 8.08475 0.500012 17.75C0.497279 20.046 0.94771 22.32 1.82549 24.4417C2.70327 26.5633 3.99113 28.4908 5.61526 30.1138C5.86269 30.353 6.19417 30.4854 6.53831 30.4826C6.88244 30.4797 7.2117 30.3419 7.45516 30.0986C7.69863 29.8554 7.83682 29.5263 7.83997 29.1821C7.84312 28.838 7.71098 28.5064 7.47201 28.2587C6.09139 26.8795 4.99669 25.2411 4.25072 23.4378C3.50476 21.6344 3.1222 19.7015 3.12501 17.75ZM28.8325 14.2745C28.3057 12.6361 27.414 11.1385 26.2245 9.89469C25.0351 8.65085 23.5789 7.69312 21.9656 7.09365C20.3524 6.49418 18.6241 6.26859 16.911 6.43388C15.1979 6.59917 13.5447 7.15103 12.0758 8.04788C10.6069 8.94474 9.36071 10.1632 8.43101 11.6115C7.50131 13.0598 6.91236 14.7002 6.70854 16.4092C6.50472 18.1181 6.69134 19.851 7.25433 21.4773C7.81732 23.1037 8.74202 24.5811 9.95876 25.7983C10.0808 25.9202 10.2256 26.0169 10.385 26.0828C10.5444 26.1487 10.7153 26.1826 10.8878 26.1825C11.0603 26.1825 11.231 26.1484 11.3904 26.0823C11.5497 26.0162 11.6945 25.9194 11.8164 25.7974C11.9383 25.6753 12.035 25.5305 12.1009 25.3711C12.1669 25.2117 12.2008 25.0409 12.2007 24.8684C12.2006 24.6959 12.1665 24.5251 12.1005 24.3658C12.0344 24.2064 11.9375 24.0617 11.8155 23.9398C10.8798 23.004 10.1685 21.8682 9.73521 20.6179C9.30189 19.3675 9.15781 18.0352 9.31381 16.7211C9.46982 15.407 9.92185 14.1455 10.6359 13.0313C11.3499 11.9172 12.3074 10.9795 13.4361 10.2889C14.5649 9.59824 15.8357 9.17262 17.1527 9.04406C18.4698 8.91549 19.7988 9.08733 21.0398 9.54664C22.2809 10.0059 23.4016 10.7408 24.3176 11.6958C25.2336 12.6508 25.9211 13.8011 26.3283 15.0603C27.0963 14.6184 27.9516 14.3497 28.8343 14.2727L28.8325 14.2745ZM13.625 17.75C13.625 16.5897 14.0859 15.4769 14.9064 14.6564C15.7269 13.8359 16.8397 13.375 18 13.375C19.1603 13.375 20.2731 13.8359 21.0936 14.6564C21.9141 15.4769 22.375 16.5897 22.375 17.75C22.375 18.9103 21.9141 20.0231 21.0936 20.8436C20.2731 21.6641 19.1603 22.125 18 22.125C16.8397 22.125 15.7269 21.6641 14.9064 20.8436C14.0859 20.0231 13.625 18.9103 13.625 17.75ZM18 16C17.5359 16 17.0908 16.1844 16.7626 16.5126C16.4344 16.8408 16.25 17.2859 16.25 17.75C16.25 18.2141 16.4344 18.6592 16.7626 18.9874C17.0908 19.3156 17.5359 19.5 18 19.5C18.4641 19.5 18.9093 19.3156 19.2374 18.9874C19.5656 18.6592 19.75 18.2141 19.75 17.75C19.75 17.2859 19.5656 16.8408 19.2374 16.5126C18.9093 16.1844 18.4641 16 18 16ZM33.75 20.375C33.75 21.5353 33.2891 22.6481 32.4686 23.4686C31.6481 24.2891 30.5353 24.75 29.375 24.75C28.2147 24.75 27.1019 24.2891 26.2814 23.4686C25.4609 22.6481 25 21.5353 25 20.375C25 19.2147 25.4609 18.1019 26.2814 17.2814C27.1019 16.4609 28.2147 16 29.375 16C30.5353 16 31.6481 16.4609 32.4686 17.2814C33.2891 18.1019 33.75 19.2147 33.75 20.375ZM37.25 29.7812C37.25 32.5042 34.9995 35.25 29.375 35.25C23.7505 35.25 21.5 32.5148 21.5 29.7812V29.601C21.5 27.886 22.8895 26.5 24.6028 26.5H34.1473C35.8623 26.5 37.25 27.8877 37.25 29.601V29.7812Z"
                    fill="white"
                  />
                </Icon3>
              </IconWrap>
              <Box3>면접</Box3>
              <BoxText>3/13(목) ~ 3/14(금)</BoxText>
            </Box>
            <Box style={{ border: "2px solid rgba(100, 197, 154, 1.0)" }}>
              <IconWrap>
                <Icon4 viewBox="0 0 13 12">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.625 0.0625C5.11658 0.0625 3.66994 0.661717 2.60333 1.72833C1.53672 2.79494 0.9375 4.24158 0.9375 5.75C0.9375 7.25842 1.53672 8.70506 2.60333 9.77167C3.66994 10.8383 5.11658 11.4375 6.625 11.4375C8.13342 11.4375 9.58006 10.8383 10.6467 9.77167C11.7133 8.70506 12.3125 7.25842 12.3125 5.75C12.3125 4.24158 11.7133 2.79494 10.6467 1.72833C9.58006 0.661717 8.13342 0.0625 6.625 0.0625ZM3.5625 5.75C3.5625 4.93777 3.88515 4.15881 4.45948 3.58448C5.03381 3.01015 5.81277 2.6875 6.625 2.6875C7.43723 2.6875 8.21619 3.01015 8.79051 3.58448C9.36485 4.15881 9.6875 4.93777 9.6875 5.75C9.6875 6.56223 9.36485 7.34119 8.79051 7.91551C8.21619 8.48985 7.43723 8.8125 6.625 8.8125C5.81277 8.8125 5.03381 8.48985 4.45948 7.91551C3.88515 7.34119 3.5625 6.56223 3.5625 5.75Z"
                    fill="white"
                  />
                </Icon4>
                <Icon4B viewBox="0 0 31 34">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.625 0.0625003C13.3366 0.0623429 11.0908 0.68111 9.12536 1.85326C7.15996 3.02542 5.54817 4.70731 4.46071 6.72081C3.37325 8.73431 2.85061 11.0044 2.94814 13.2907C3.04567 15.5771 3.75975 17.7944 5.01473 19.708L0.487483 27.548C0.361805 27.7663 0.30162 28.0162 0.314116 28.2679C0.326611 28.5195 0.411259 28.7622 0.557951 28.967C0.704643 29.1718 0.907181 29.3301 1.14138 29.4229C1.37559 29.5157 1.63156 29.5392 1.87873 29.4905L6.45323 28.591L7.95998 33.001C8.04119 33.2399 8.18955 33.4504 8.38729 33.6071C8.58503 33.7639 8.82378 33.8603 9.07492 33.8849C9.32607 33.9095 9.57897 33.8611 9.80334 33.7456C10.0277 33.6301 10.214 33.4524 10.34 33.2337L14.855 25.4147C15.3679 25.4457 15.8821 25.4457 16.395 25.4147L20.91 33.2337C21.0361 33.4524 21.2225 33.63 21.447 33.7454C21.6715 33.8607 21.9245 33.9089 22.1756 33.8842C22.4268 33.8594 22.6655 33.7628 22.8631 33.6058C23.0608 33.4489 23.209 33.2383 23.29 32.9992L24.7915 28.5787L29.3695 29.4887C29.6168 29.5379 29.873 29.5147 30.1075 29.4221C30.342 29.3294 30.5449 29.1712 30.6918 28.9663C30.8387 28.7614 30.9235 28.5185 30.9361 28.2667C30.9486 28.0148 30.8883 27.7647 30.7625 27.5462L26.237 19.708C27.492 17.7943 28.2061 15.5768 28.3036 13.2903C28.4011 11.0038 27.8783 8.73359 26.7906 6.72004C25.7029 4.70649 24.0909 3.02462 22.1252 1.85259C20.1596 0.680565 17.9135 0.0620272 15.625 0.0625003ZM5.56248 12.75C5.56248 10.0813 6.62264 7.52182 8.50972 5.63474C10.3968 3.74765 12.9562 2.6875 15.625 2.6875C18.2937 2.6875 20.8532 3.74765 22.7402 5.63474C24.6273 7.52182 25.6875 10.0813 25.6875 12.75C25.6875 15.4187 24.6273 17.9782 22.7402 19.8653C20.8532 21.7523 18.2937 22.8125 15.625 22.8125C12.9562 22.8125 10.3968 21.7523 8.50972 19.8653C6.62264 17.9782 5.56248 15.4187 5.56248 12.75ZM12.097 24.9405C10.1064 24.364 8.28758 23.3083 6.79973 21.8657L4.20623 26.358L7.07098 25.7945C7.38229 25.7334 7.7052 25.7871 7.97995 25.9457C8.2547 26.1043 8.46271 26.3571 8.56548 26.6572L9.51048 29.4205L12.097 24.9405ZM21.736 29.4135L19.153 24.9405C21.1435 24.364 22.9623 23.3082 24.4502 21.8657L27.0402 26.351L24.1737 25.7805C23.8615 25.7187 23.5373 25.7724 23.2618 25.9318C22.9862 26.0912 22.7779 26.3452 22.6757 26.6467L21.736 29.4135Z"
                    fill="white"
                  />
                </Icon4B>
              </IconWrap>
              <Box4>최종합격 발표</Box4>
              <BoxText>3/14(금)</BoxText>
            </Box>
          </Container>
          <Plus onClick={handleClick}>
            <Detail>정규 활동 일정 자세히 보기</Detail>
            <ArrowDiv>
              <Arrow viewBox="0 0 15 22">
                <path
                  d="M0.5 21.1992L0.5 14.9792L14.5 8.13497V14.355L0.5 21.1992Z"
                  stroke="white"
                />
                <path
                  d="M14.5 13.8652L14.5 7.64521L0.500002 0.800987V7.02098L14.5 13.8652Z"
                  stroke="white"
                />
              </Arrow>
            </ArrowDiv>
          </Plus>
          <Header5>지원 방법 및 유의사항</Header5>
          <TextWrap>
            <Container>
              <Number>
                <span className="highlight">01</span>
              </Number>
              <Body3>
                <span className="highlight">서류 접수 마감 이후</span> 접수된
                지원 서류 및 사전 과제는 접수가 어려우니, 마감기한 안에 꼭 제출
                해주시기 바랍니다.
              </Body3>
            </Container>

            <Container>
              <Number>
                <span className="highlight">02</span>
              </Number>
              <Body3>
                사전과제는 지원서 <span className="highlight">접수 시작일</span>
                에 기획, 디자인 파트의{" "}
                <span className="highlight">노션 페이지</span>에 공개됩니다.
              </Body3>
            </Container>

            <Container>
              <Number>
                <span className="highlight">03</span>
              </Number>
              <Body3>
                지원서 합격/불합격 발표는 지원서 접수 시{" "}
                <span className="highlight">기입해주신 전화번호로 문자</span>{" "}
                안내됩니다.
              </Body3>
            </Container>

            <Container>
              <Number>
                <span className="highlight">04</span>
              </Number>
              <Body3>
                면접은 <span className="highlight"> 2대다로 30분</span> 동안
                진행되며, 면접 시간은 지원서 합격자에 한하여 개별적으로 문자
                안내 드립니다.
              </Body3>
            </Container>
          </TextWrap>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingSecond;

const PartDiv = styled.div`
  height: 1050px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  margin-bottom: 20px;
  margin-right: 520px;
`;

const Header61 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  margin-right: 495px;
  text-align: left;
  margin-bottom: 55px;
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-right: 25px;
`;

const Box = styled.div`
  width: 240px;
  height: 100px;
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  border: 2px solid #64c59a;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 7.3px;
  margin-bottom: 25px;
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  margin-right: 870px;
  text-align: left;
  margin-bottom: 40px;
`;

const TextWrap = styled.div`
  margin-left: -42px;
  text-align: left;
`;
const Body3 = styled.div`
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
  white-space: nowrap;

  span.highlight {
    color: #64c59a;
  }
`;

const Number = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  white-space: nowrap;

  span.highlight {
    color: #64c59a;
  }
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
`;

const BoxText = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  white-space: nowrap;
  margin-left: 80px;
  margin-right: 95px;

  span.highlight {
    color: #64c59a;
  }
`;

const Box1 = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  white-space: nowrap;
  margin-right: 5px;
  margin-top: 23px;
  margin-bottom: 6px;
  margin-left: 78px;
`;

const Icon1 = styled.svg`
  width: 30px;
  height: 38px;
  fill: none;
  position: absolute;
  margin-top: 30px;
`;
const Icon1B = styled(Icon1)`
  margin-left: 6px;
  margin-top: 39px;
`;

const Box2 = styled(Box1)`
  margin-left: 81px;
`;

const Icon2 = styled(Icon1)`
  width: 29px;
  height: 28px;
`;
const Icon2B = styled(Icon2)`
  width: 26px;
  height: 25px;
  margin-left: 8px;
  margin-top: 37px;
`;

const Box3 = styled(Box1)`
  margin-left: 80px;
`;
const Icon3 = styled(Icon1)`
  width: 38px;
  height: 36px;
`;

const Box4 = styled(Box1)`
  margin-left: 80px;
`;
const Icon4 = styled(Icon1)`
  width: 13px;
  height: 12px;
  margin-left: 11.1px;
  margin-top: 36.5px;
`;

const Icon4B = styled(Icon1)`
  width: 31px;
  height: 34px;
  margin-left: 2px;
`;

const IconWrap = styled.div`
  position: relative;
  margin-right: 175px;
`;

const Detail = styled.div`
  white-space: nowrap;
  margin-left: 78px;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  line-height: 140%;
  text-align: right;
  color: #ffffff;
`;

const ArrowDiv = styled.div`
  /* margin-left: 50px; */
  margin-top: 4px;
`;
const Arrow = styled.svg`
  width: 15px;
  height: 22px;
  margin-right: -40px;
`;

const Plus = styled.div`
  display: flex;
  margin-top: -40px;
  margin-bottom: 150px;
  margin-left: 800px;
  width: 361px;
  height: 34px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    ${Detail} {
      color: #64c59a;
    }
    ${Arrow} {
      filter: opacity(0.5) drop-shadow(0 0 0 #228b22);
    }
  }
`;
