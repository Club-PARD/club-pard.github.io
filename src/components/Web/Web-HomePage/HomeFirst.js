import styled, { css, keyframes } from "styled-components";
import React, { useState, useEffect } from "react";

const HomeFirst = () => {
  const [text, setText] = useState("PARD"); // text변화
  const [isFixed, setIsFixed] = useState(true); // 스크롤 변화에 따른 비디오 고정
  const [isVisible, setIsVisible] = useState(true); // 보이는거 opacity조절
  const [backcolor, setbackcolor] = useState(true); // 배경색 조절
  const [isSafari, setIsSafari] = useState(false); // 사파리인지 아닌지 구분

  const position = useScrollPosition();

  useEffect(() => {
    const absPosition = Math.abs(position);
    const userAgent = window.navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);

    setIsSafari(isSafariBrowser);
  }, [position, isVisible]);
  document.documentElement.style.overflowX = "hidden";
  return (
    <>
      <Container>
        <VideoContainer isColor={backcolor} isFixed={isFixed}>
          {isSafari ? (
            <VideoBackgroundImg
              src={require("../../../assets/img/BackgroundImg_Web.png")}
              alt="background"
            />
          ) : (
            <VideoBackground autoPlay loop muted playsInline>
              <source
                playsInline
                muted
                autoPlay
                src={require("../../../assets/Video/BackGroundVideo.mp4")}
                type="video/mp4"
              />
            </VideoBackground>
          )}

          <LogoDiv>
            <DownLogo
              src={require("../../../assets/img/DownScrollLogo.png")}
              alt="downLogo"
            />
          </LogoDiv>
        </VideoContainer>
      </Container>
    </>
  );
};

export default HomeFirst;

const VideoContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  min-width: 1440px; // 아무리 줄여도 1440px로 유지됨
  background-color: ${({ isColor }) =>
    isColor ? " rgba(0, 0, 0, 0.4)" : " rgba(0, 0, 0, 0.4)"};
`;

//inline-block으로 stickybox를 위로 올리는 역할을한다.
const Container = styled.div`
  display: inline-block;
  height: 11000px;
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

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
`;

const VideoBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
`;

const DownLogo = styled.img`
  width: 80px;
  height: 63px;
  padding-top: 8px;
`;

const LogoDiv = styled.div`
  position: absolute;
  top: 80%;
  width: 100%;
  justify-content: center;
  display: flex;
  z-index: 0;
`;