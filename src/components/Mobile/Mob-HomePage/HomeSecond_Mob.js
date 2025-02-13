import { React, useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import backgroundImage1 from "../../../assets/img/homeBackgroundImg1.svg";
import backgroundImage2 from "../../../assets/img/homeBackgroundImg2.svg";
import backgroundImage3 from "../../../assets/img/homeBackgroundImg3.svg";
import backgroundImage3op from "../../../assets/img/homeBackgroundImg3_op.svg";
import downScrollImage from "../../../assets/img/DownScrollLogo.svg";

const Animation1 = ({ isTextVisible, textInfos, position }) => {
  const targetRef = useRef(null);

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      {textInfos.map((textInfo) => (
        <Text1
          ref={targetRef}
          key={textInfo.id}
          isVisible={isTextVisible[textInfo.id]}
          textInfo={textInfo}
          position={position}
        >
          {textInfo.text}
        </Text1>
      ))}
    </div>
  );
};
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

const HomeSecondMob = () => {
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  const [text5, setText5] = useState(false);

  const setList = [setText1, setText2, setText3, setText4, setText5];
  const list1 = [text1, text2, text3, text4, text5];
  const position = useScrollPosition();

  useEffect(() => {
    textDB.forEach((textInfo) => {
      setList[textInfo.id](
        position > textInfo.breakPoint &&
          position < textInfo.breakPoint + textInfo.period
      );
    });
  }, [position, text1, text2, text3, text4, text5]);

  return (
    <Div>
      <ThemeProvider theme={theme}>
        <Background
          src={backgroundImage1}
          breakPointInfos={breakPointInfos}
          position={position}
          id={0}
        >
          <Animation1
            isTextVisible={list1}
            textInfos={textDB.slice(0, 3)}
            position={position}
          ></Animation1>
        </Background>
        <div style={{ height: pageLength[0] + "px" }}></div>
        <Background src={backgroundImage2}></Background>
        <div style={{ height: pageLength[1] + "px" }}></div>
        <Background
          src={backgroundImage3}
          breakPointInfos={breakPointInfos}
          position={position}
          id={1}
        >
          <Animation1
            isTextVisible={list1}
            textInfos={textDB.slice(3, 5)}
            position={position}
          ></Animation1>
          <ScrollIcon src={downScrollImage} alt="scroll"></ScrollIcon>
        </Background>
        <div style={{ height: pageLength[2] + "px" }}></div>
      </ThemeProvider>
    </Div>
  );
};

export default HomeSecondMob;

const request1 = false;

const firstScrollPoint = 12800; //homesecond 시작 스크롤 위치
const pageLength = [2000, 750, 3400];
const period1 = 200;
const period2 = 1000;
const period3 = 1500;
const secondScrollPoint =
  firstScrollPoint + pageLength[0] + pageLength[1] + 2000;

const textDB = [
  {
    id: 0,
    text: "협업하고",
    breakPoint: firstScrollPoint + period1,
    period: 1000,
    posX: "20%",
    posY: "0%",
  },
  {
    id: 1,
    text: "성장하고",
    breakPoint: firstScrollPoint + period1,
    period: 1000,
    posX: "35%",
    posY: "0%",
  },
  {
    id: 2,
    text: "해결하기",
    breakPoint: firstScrollPoint + period1,
    period: 1000,
    posX: "50%",
    posY: "0%",
  },
  {
    id: 3,
    text: "PARD는 기획자, 디자이너, 개발자가 모여\n Pay it Forward를 실천하는 \n대학생 IT 협업동아리입니다.",
    breakPoint: secondScrollPoint + period2,
    period: period2 + period3,
    posX: "45%",
    posY: "-30%",
  },
  {
    id: 4,
    text: "\n대가를 바라지 않고 남을 돕는 행위를\n기꺼이 즐기는 것.\n홀로 성장하는 것을 넘어 \n함께 성장하는 법을 배워나가는 조직.\n\nPARD를 소개합니다. ",
    breakPoint: secondScrollPoint + period2 + period3,
    period: period2,
    posX: "48%",
    posY: "-40%",
  },
];
const breakPointInfos = [
  {
    breakPoint: firstScrollPoint,
    period: pageLength[0] + 2000,
  },
  {
    breakPoint: secondScrollPoint,
    period: period2 + period3 + 1400,
  },
];

const Background = styled.div`
  background-image: ${({ breakPointInfos, position, id, src }) =>
    backgroundImgLogic(breakPointInfos, position, id, src)};
  background-size: ${({ id }) => (id == 1 ? "contain" : "cover")};
  background-position: center;
  background-repeat: no-repeat;

  width: 100vw;
  height: 110vh; /* Added property */

  position: sticky;

  z-index: -1;
  top: 0;
  background-color: rgba(26, 26, 26);
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ breakPointInfos, position, id }) =>
      backgroundColorLogic(
        breakPointInfos,
        position,
        id
      )}; /* Adjust the opacity as desired */
  }
`;

const backgroundImgLogic = (breakPointInfos, position, id, src) => {
  if (breakPointInfos == null || id == null) return `url(${src})`;
  const offset = position - breakPointInfos[id].breakPoint;
  if (offset > 0 && offset < breakPointInfos[id].period) {
    switch (id) {
      case 1:
        return `url(${backgroundImage3op})`;
      default:
        return `url(${src})`;
    }
  }
  return `url(${src})`;
};

const backgroundColorLogic = (breakPointInfos, position, id) => {
  if (breakPointInfos == null || id == null || id == 1)
    return "rgba(0, 0, 0, 0)";
  const offset = position - breakPointInfos[id].breakPoint;
  if (offset > 0 && offset < breakPointInfos[id].period) {
    var opacity = offset / 200;
    if (opacity > 0.5) {
      opacity = 0.5;
    }
    return "rgba(0, 0, 0, " + opacity + ")";
  }
  return "rgba(0, 0, 0, 0)";
};

const ScrollIcon = styled.img`
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 100px;
`;

const Text1 = styled.div`
  line-height: 140%;
  font-size: ${({ textInfo, theme }) => textFontSizeLogic(textInfo, theme)};
  font-weight: ${({ textInfo, theme }) => textFontWeightLogic(textInfo, theme)};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  z-index: 1;

  width: ${request1
    ? "1330px"
    : "100%"}; // 중요! width를 키우지 않으면 text-align: center 는 의미 없어짐.
  text-align: ${({ textInfo }) => textAlignLogic(textInfo)};
  position: absolute;
  padding: ${({ textInfo }) => textPaddingLofic(textInfo)};

  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  top: ${({ textInfo }) => textInfo.posX};
  // left: ${({ textInfo }) => textInfo.posY};

  transform: ${({ textInfo, position }) =>
    textTransformLogic(textInfo, position)};

  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.5s ease-in;
`;
const Div = styled.div`
  margin: ${request1 ? "0px auto" : ""};
  justify-content: ${request1 ? "center" : ""};
  width: ${request1 ? "1330px" : "100vw"};
`;
const textPaddingLofic = (textInfo) => {
  switch (textInfo.id) {
    case 0:
    case 1:
    case 2:
      return "0px";
    case 3:
    case 4:
      return "0px 10px";
    default:
      return null;
  }
};
const textAlignLogic = (textInfo) => {
  switch (textInfo.id) {
    case 0:
    case 1:
    case 2:
      return "center";
    case 3:
    case 4:
      return "center";
    default:
      return null;
  }
};
const textFontSizeLogic = (textInfo, theme) => {
  switch (textInfo.id) {
    case 0:
    case 1:
    case 2:
      return theme.Mob_fontSizes.Header2;
    case 3:
      return theme.Mob_fontSizes.Subtitle1;
    case 4:
      return theme.Mob_fontSizes.Subtitle2;
    default:
      return null;
  }
};
const textFontWeightLogic = (textInfo, theme) => {
  switch (textInfo.id) {
    case 0:
    case 1:
    case 2:
      return theme.fontWeights.Header2;
    case 3:
      return theme.fontWeights.Subtitle1;
    case 4:
      return theme.fontWeights.Subtitle2;
    default:
      return null;
  }
};

const translate3d = (x, y, z) => {
  x = x !== null ? x : 0;
  y = y !== null ? y : 0;
  z = z !== null ? z : 0;
  return `translate3d(${x}px, ${y}px, ${z}px)`;
};

const textTransformLogic = (textInfo, position) => {
  var offset = position - (textInfo.breakPoint + textInfo.period * 0.8);
  if (textInfo.id == 3) {
    const change = 37;
    var x = position - (textInfo.breakPoint + 1000 - change);
    if (x >= 0 && x < change) {
      return translate3d(0, x * -1, 0);
    } else if (x >= change) {
      return translate3d(0, change * -1, 0);
    } else {
      return translate3d(0, 0, 0);
    }
  }
  if (offset < 0) return 0;
  switch (textInfo.id) {
    case 0:
      return translate3d(offset * -1, 0, 0);
    case 2:
      return translate3d(offset * 1, 0, 0);
    default:
      return translate3d(0, 0, 0);
  }
};
