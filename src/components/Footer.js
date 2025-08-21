import React from "react";
import { theme } from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";

function Footer() {
  return (
    <Div>
      <ThemeProvider theme={theme}>
        <FooterWrapper>
          <LeftFooter>
            <LeftComponent>
              <FooterLogoRules>
                <PardLogo>
                  <img src={require("../assets/img/Logo.png")} alt="Logo" />
                </PardLogo>
              </FooterLogoRules>
              <Information>
                PARD (파드, Pay it forward를 실천하는 IT협업 동아리) ⓒPARD.
                2025.All rights reserved.
              </Information>
            </LeftComponent>
            <RightFooter>
              <EmailLink href="mailto:official@we-pard.com">EMAIL</EmailLink>
              <Instagram
                href="https://www.instagram.com/official_pard_/"
                target="_blank"
              >
                INSTAGRAM
              </Instagram>
              <Youtube
                href="https://www.youtube.com/channel/UCXZwffckReELqgFjKLNFBDA"
                target="_blank"
              >
                YOUTUBE
              </Youtube>
              <Disquiet href="https://disquiet.io/club/pard" target="_blank">
                DISQUIET
              </Disquiet>
            </RightFooter>
          </LeftFooter>
        </FooterWrapper>
      </ThemeProvider>
    </Div>
  );
}

export default Footer;

const Div = styled.footer`
  background-color: #2a2a2a;
  width: 100%;
  justify-content: center;
  display: flex;
`;

const FooterWrapper = styled.footer`
  background-color: #2a2a2a;
  // background-color: white;
  width: 1280px;
  height: 130px;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 180%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
`;
const FooterLogoRules = styled.div`
  display: flex;
`;
const PardLogo = styled.div`
  img {
    height: 45px;
    width: 140px;
  }
  margin-right: 14px;
  margin-left: 80px;
`;
const Rules = styled.a`
  /* 회칙 > */

  width: 39px;
  height: 20px;
  left: 223px;
  margin-top: 15px;

  /* Subtitle/ST2 - B 14 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-decoration: none;
  color: #ffffff;
`;
const LeftFooter = styled.div`
  display: flex;
  padding-top: 25px;
  justify-content: space-evenly;
`;

const LeftComponent = styled.div`
  margin-right: 380px;
  display: flex;
  flex-direction: column;
`;

const RightFooter = styled.div`
  color: #ffffff;
  display: flex;
  padding-top: 35px;
  flex-wrap: wrap; // 넘치더라도 알아서 줄여주게끔.
  gap: 70px; // 스페이스 간격 조절.
  margin-bottom: 8px;
`;

const Information = styled.div`
  /* PARD (파드, Pay it forward를 실천하는 IT협업 동아리) ⓒPARD. 2023.All rights reserved. */

  width: 292px;
  height: 44px;
  left: 113px;
  top: 76px;
  margin-left: 86px;

  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.Web_fontSizes.Caption1};
  font-size: ${(props) => props.theme.Web_fontSizes.Caption1};
  line-height: 180%;
  /* or 22px */

  color: #ffffff99;
`;

const EmailLink = styled.a`
  /* EMAIL */
  width: 39px;
  height: 22px;

  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.Web_fontSizes.Caption1};
  font-size: ${(props) => props.theme.Web_fontSizes.Caption1};
  line-height: 180%;
  /* identical to box height, or 22px */

  display: flex;
  align-items: center;
  text-align: center;

  /* Text/White */

  color: #ffffff;
  text-decoration: none;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Instagram = styled.a`
  /* INSTAGRAM */

  width: 75px;
  height: 22px;

  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.Web_fontSizes.Caption1};
  font-size: ${(props) => props.theme.Web_fontSizes.Caption1};
  line-height: 180%;
  /* identical to box height, or 22px */

  display: flex;
  align-items: center;
  text-align: center;

  /* Text/White */

  color: #ffffff;
  text-decoration: none;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
const Youtube = styled.a`
  /* YOUTUBE */

  width: 61px;
  height: 22px;

  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.Web_fontSizes.Caption1};
  font-size: ${(props) => props.theme.Web_fontSizes.Caption1};
  line-height: 180%;
  /* identical to box height, or 22px */

  display: flex;
  align-items: center;
  text-align: center;

  /* Text/White */

  color: #ffffff;
  text-decoration: none;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;
const Disquiet = styled.a`
  /* DISQUIET */

  width: 58px;
  height: 22px;

  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.Web_fontSizes.Caption1};
  font-size: ${(props) => props.theme.Web_fontSizes.Caption1};
  line-height: 180%;
  /* identical to box height, or 22px */

  display: flex;
  align-items: center;
  text-align: center;

  /* Text/White */

  color: #ffffff;
  text-decoration: none;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
`;
