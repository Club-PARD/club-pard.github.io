import styled from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState, useEffect } from "react";
import { detect } from "detect-browser";

const browser = detect();

const HomeVideoMob = () => {
  const [isFixed, setIsFixed] = useState(true);
  const [backcolor, setbackcolor] = useState(true);
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    const isChromeBrowser = browser.name === "chrome" || browser.name === "ios";
    setIsChrome(isChromeBrowser);
  }, []);

  return (
    <Container>
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
          <VideoBackground autoPlay loop muted playsInline>
            <source
              playsInline
              muted
              autoPlay
              src={require("../../../assets/Video/BackGroundVideo_Mob.mp4")}
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
    isColor ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"};
`;

const Container = styled.div`
  display: inline-block;
  height: 6000px;
  width: 100%;
`;

const VideoBackground = styled.video`
  min-width: 370px;
  height: 100%;
  object-fit: fill;
  z-index: -1;
  width: 100%;
  margin-top: -30px;
`;

// const VideoBackgroundImg = styled.img`
//   min-width: 370px;
//   height: 100%;
//   object-fit: fill;
//   z-index: -1;
//   width: 100%;
// `;

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