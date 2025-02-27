import styled, { css, keyframes, ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState, useEffect } from "react";
import { detect } from "detect-browser";

const browser = detect();

const HomeVideoMob = () => {
  const [text, setText] = useState("PARD"); // text변화
  const [isFixed, setIsFixed] = useState(true); // 스크롤 변화에 따른 비디오 고정
  const [isVisible, setIsVisible] = useState(true); // 보이는거 opacity조절
  const [backcolor, setbackcolor] = useState(true); // 배경색 조절
  const [isAnimation, setIsAnimation] = useState(true); // 사라지는거 조절
  const [isExpanded, setisExpanded] = useState(null); // 글자확장 조절
  const [changed, setchanged] = useState("a"); //글자 크기,위치 변하는거 조절
  const [text3, setText3] = useState(""); // text변화
  const [text1, setText1] = useState("PA"); // 텍스트 1
  const [text2, setText2] = useState("RD"); // 텍스트 2
  const [isSplitTextVisible, setIsSplitTextVisible] = useState(false);
  const [isChrome, setIsChrome] = useState(false); // 사파리인지 아닌지 구분

  const position = useScrollPosition();

  useEffect(() => {
    const absPosition = Math.abs(position);
    const isChromeBrowser =
      browser.name === "chrome" || browser.name === "ios" ? true : false;

    setIsChrome(isChromeBrowser);

    if (absPosition < 100) {
      setchanged("aaa");
      setbackcolor(false);
      setIsFixed(true);
      setIsVisible(false);
    } else if (position >= 100 && position < 950) {
      setchanged("a");
      setText("PARD");

      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);

      //keyframse에 따른 animation 값을 스크롤에 따른 값으로 설정
      // position으로 설정한다 이를
    } else if (position >= 950 && position < 3500) {
      setchanged("b");
      setisExpanded(true);
      setText1("PA");
      setText2("RD");
      setText3("Y it FORWA");
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
      setIsAnimation(true);
      // 스크롤 간격을 넓혀서 내려갔을 때 PAY if FORWARD가 더 길게 있도록 한다.
    } else if (position >= 3500 && position < 4100) {
      setchanged("c");
      setisExpanded(true);
      setText1("PA");
      setText2("RD");
      setText3("Y it FORWA");
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
      setIsAnimation(true);
    } else if (position >= 4100 && position < 4900) {
      setchanged("cd");
      setisExpanded(true);
      setText1("PA");
      setText2("RD");
      setText3("Y it FORWA");
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
      setIsAnimation(true);
    } else if (position >= 4900 && position < 7400) {
      setchanged("cdd");
      setisExpanded(true);
      setText1("PA");
      setText2("RD");
      setText3("Y it FORWA");
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
      setIsAnimation(true);
      setText("실천하는 IT 협업 동아리");
      setIsSplitTextVisible(true);
    } else if (position >= 7400 && position < 7700) {
      setIsVisible(false);
      setbackcolor(true);
      // 공백이 생기게 하는 구간 자연스러운 연결을 위하여
      setIsSplitTextVisible(false);
    } else if (position >= 7700 && position < 10300) {
      setchanged("d");
      setText(
        "함께 성장하고 싶은 기획자, 디자이너, 개발자 대학생들이 모여 세상을 바꾸는 IT제품을 어떻게 만들 수 있을까요?"
      );
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
    } else if (position >= 10300 && position < 10900) {
      setIsVisible(false);
      setbackcolor(true);
      setIsAnimation(false);
    } else if (position >= 10500) {
      setchanged("ddd");

      setbackcolor(true);
    }
  }, [position, isVisible]);

  return (
    <>
      <DIVVVV>
        <ThemeProvider theme={theme}>
          <VideoContainer isColor={backcolor} isFixed={isFixed}>
            {isChrome ? (
              <VideoBackground autoPlay loop muted playsInline>
                <source
                  playsInline
                  muted
                  autoPlay
                  src={require("../../../assets/Video/BackGroundVideo_Mob.mp4")}
                  type="video/mp4"
                />
              </VideoBackground>
            ) : (
              <VideoBackgroundImg
                src={require("../../../assets/img/BackgroundImg_Mob.png")}
                alt="backImg"
              />
            )}

            <LogoDiv>
              <DownLogo
                src={require("../../../assets/img/DownScrollLogo.png")}
                alt="downLogo"
              />
            </LogoDiv>

            {isFixed && (
              <>
                {changed === "aaa" ? (
                  <TextContainer1
                    isAnimation={isAnimation}
                    isVisible={isVisible}
                  ></TextContainer1>
                ) : changed === "a" ? (
                  <TextContainer1
                    isAnimation={isAnimation}
                    isVisible={isVisible}
                  >
                    <Text isExpanded={isExpanded}>{text}</Text>
                  </TextContainer1>
                ) : changed === "b" ? (
                  <>
                    <SplitTextContainer isVisible={isVisible}>
                      <Text1
                        style={{
                          transform: `translateX(-${Math.min(
                            (position - 950) / 20,
                            121
                          )}px)`,
                        }}
                      >
                        {text1}
                      </Text1>
                      {/* 이동하는 속도를 1px당 이동하는 속도를  /20한 만큼 낮추었고 위에 position을 늘려서 충분히 그 속도를 유지하여 스크롤을 
            내리도록 하였다.*/}
                      <Text2
                        style={{
                          transform: `translateX(${Math.min(
                            (position - 950) / 20,
                            120
                          )}px)`,
                        }}
                      >
                        {text2}
                      </Text2>
                    </SplitTextContainer>
                  </>
                ) : changed === "c" ? (
                  <>
                    <SplitTextContainer isVisible={isVisible}>
                      <Text1 style={{ transform: `translateX(-${121}px)` }}>
                        {text1}
                      </Text1>
                      <Text2 style={{ transform: `translateX(${120}px)` }}>
                        {text2}
                      </Text2>
                    </SplitTextContainer>
                  </>
                ) : changed === "cd" ? (
                  <>
                    <SplitTextContainer isVisible={isVisible}>
                      <Text1 style={{ transform: `translateX(-${121}px)` }}>
                        {text1}
                      </Text1>
                      <Text2 style={{ transform: `translateX(${120}px)` }}>
                        {text2}
                      </Text2>
                      <MovedText
                        style={{ transform: `translateY(${0}%)` }}
                        isAnimation={isAnimation}
                      >
                        {text3}
                      </MovedText>
                    </SplitTextContainer>
                  </>
                ) : changed === "cdd" ? (
                  <>
                    <SplitTextContainer isVisible={isVisible}>
                      <Text1 style={{ transform: `translateX(-${121}px)` }}>
                        {text1}
                      </Text1>
                      <Text2 style={{ transform: `translateX(${120}px)` }}>
                        {text2}
                      </Text2>
                      <MovedText
                        style={{ transform: `translateY(${0}%)` }}
                        isAnimation={isAnimation}
                      >
                        {text3}
                      </MovedText>

                      <TextContainer2 isVisible={isVisible}>
                        <Textchanged1
                          isAnimation={isSplitTextVisible}
                          isExpanded={isExpanded}
                        >
                          {text}
                        </Textchanged1>
                      </TextContainer2>
                    </SplitTextContainer>
                  </>
                ) : changed === "d" ? (
                  <TextContainer3 isVisible={isVisible}>
                    <Textchanged2
                      isAnimation={isAnimation}
                      isExpanded={isExpanded}
                    >
                      함께 성장하고 싶은 <br />
                      기획자, 디자이너, 개발자 대학생들이 모여
                      <br /> 세상을 바꾸는 IT제품을
                      <br /> 어떻게 만들 수 있을까요?
                    </Textchanged2>
                  </TextContainer3>
                ) : (
                  changed === "ddd" && (
                    <TextContainer1
                      isAnimation={isAnimation}
                      isVisible={isVisible}
                    ></TextContainer1>
                  )
                )}
                <BackgroundOverlay backcolor={backcolor} />
              </>
            )}
          </VideoContainer>
        </ThemeProvider>
      </DIVVVV>
    </>
  );
};

export default HomeVideoMob;

const VideoContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 110vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${({ isColor }) =>
    isColor ? " rgba(0, 0, 0, 0.4)" : " rgba(0, 0, 0, 0.4)"};
`;

//inline-block으로 stickybox를 위로 올리는 역할을한다.
const DIVVVV = styled.div`
  display: inline-block;
  height: 13500px;
  width: 100%;
`;

function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const updateScrollPos = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", updateScrollPos);

    return () => {
      window.removeEventListener("scroll", updateScrollPos);
    };
  }, []);

  return scrollPos;
}

const expandAnimation = keyframes`
0% {
    opacity: 0;
    letter-spacing: 0;
  }
  100% {
    opacity: 1;
    letter-spacing: 0;
  }
`;

const VideoBackground = styled.video`
  min-width: 420px;
  height: 100%;
  object-fit: fill;
  z-index: -1;
  width: 100%;
`;

const VideoBackgroundImg = styled.img`
  min-width: 420px;
  height: 100%;
  object-fit: fill;
  z-index: -1;
  width: 100%;
`;

const SplitTextContainer = styled.div`
  position: absolute;
  width: 324px;
  height: 56px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 4;

  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.5s ease-in;
`;

const TextContainer1 = styled.div`
  width: 324px;
  height: 56px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.5s ease-in;
  animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`
        ${expandAnimation} 1s ease-in-out
      `}
    `};
`;

const TextContainer2 = styled.div`
  display: flex;
  width: 616px;
  height: 84px;
  position: absolute; // 전체 태그에 대한거임 absolute니까 당연히!
  top: 190%;
  left: 97%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.5s ease-in;
`;

const TextContainer3 = styled.div`
  width: 283px;
  height: 104px;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.5s ease-in;
`;
const Text = styled.p`
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  font-size: 42px;
  line-height: 140%;
  color: white;
`;
const Text1 = styled.p`
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  font-size: 42px;
  line-height: 140%;
  color: white;
  transition: transform 6s ease-in-out forwards;
`;

const Text2 = styled(Text)`
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  font-size: 42px;
  line-height: 140%;
  color: white;
  transition: transform 0.5s ease-in-out forwards;
`;
const Textchanged1 = styled.p`
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  line-height: 140%;
  text-align: center;
  color: #ffffff;
  animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`
        ${expandAnimation} 1s ease-in-out forwards
      `}//2초만에 나타나서 고정이 된다
      // forwards
    `};
`;
const Textchanged2 = styled.p`
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 160%;
  /* or 56px */
  color: #ffffff;
  text-align: center;
  animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`
        ${expandAnimation} 0.5s ease-in-out
      `}
    `};
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 420px;
  height: 100%;
  background: ${({ backcolor }) => (backcolor ? "rgba(0, 0, 0, 0.4)" : null)};
  z-index: 2;
`;

const DownLogo = styled.img`
  width: 80px;
  height: 63px;
  padding-top: 100px;
`;

const LogoDiv = styled.div`
  position: absolute;
  top: 66%;
  width: 100%;
  justify-content: center;
  display: flex;
  z-index: 0;
`;

const moveUp = keyframes`
  from {
    transform: translateY(50%); // adjust this value to control the distance of movement
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`; // Y if FORWA가 올라가는 위치 조정, opacity로 보이는 거 조절

const MovedText = styled.div`
  display: flex;
  width: 306px;
  position: absolute;
  top: 75%; // adjust this value to control the initial position
  left: 10%; // position it in the middle of its parent
  transform: translate(-50%, -50%); // change the origin of transformation
  transition: transform 0.5s ease-in-out forwards;
  animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`
        ${expandAnimation} 1s ease-in-out forwards
      `}//2초만에 나타나서 고정이 된다
      // forwards
    `};
  //추가되어 애니메이션이 시작되기 전에 첫 번째 keyframe의 스타일이 적용되고, 애니메이션이 끝나면 마지막 keyframe의 스타일이 유지됩니다.
  // forwards 0.5s는 added 0.5s delay
  // 위에 태그들 즉 Text1,Text2 가 끝나고 0.5s뒤에 실행
  font-family: "NanumSquare Neo";
  font-style: normal;
  z-index: 4;
  font-weight: 800;
  font-size: 42px;
  line-height: 140%;
  color: white;
`;