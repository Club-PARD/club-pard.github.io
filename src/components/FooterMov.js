import React from "react";
import styled from "styled-components";

function FooterMov() {
  return (
    <FooterMovWrapper>
      <TopComponent>
        <PardLogo>
          <img src={require("../assets/img/Logo.png")} alt="Logo" />
        </PardLogo>
      </TopComponent>
      <Information>
        PARD (파드, Pay it forward를 실천하는 IT협업 동아리) ⓒPARD. 2025.All
        rights reserved.
      </Information>
      <Links>
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
      </Links>
    </FooterMovWrapper>
  );
}

export default FooterMov;

const FooterMovWrapper = styled.div`
  width: 100%;
  height: 222px;
  background-color: #2a2a2a;
  line-height: 180%;
  margin: 0 auto;
`;
const TopComponent = styled.div`
  display: flex;
  margin-top: 0px;
`;
const PardLogo = styled.div`
  img {
    height: 45px;
    width: 140px;
  }
  margin-right: 12px;
  margin-left: 9px;
  margin-top: 20px;
`;
const Rules = styled.a`
  /* 회칙 > */

  width: 39px;
  height: 20px;
  left: 223px;
  margin-top: 13px;

  /* Subtitle/ST2 - B 14 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-decoration: none;
  color: #ffffff;
  margin-top: 35px;
`;

const Information = styled.div`
  width: 292px;
  height: 44px;
  left: 16px;
  top: 76px;

  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 180%;
  /* or 22px */

  margin-left: 16px;

  color: rgba(255, 255, 255, 0.6);
`;
const Links = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-around;
`;
const EmailLink = styled.a`
  /* EMAIL */
  height: 22px;

  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-size: 12px;
  font-weight: 400;

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
  margin-left: 16px;
`;
const Instagram = styled.a`
  /* INSTAGRAM */
  font-size: 12px;
  font-weight: 400;
  height: 22px;

  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;
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

  height: 22px;

  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
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
  height: 22px;
  font-size: 12px;
  font-weight: 400;
  /* Caption/C1 - R 12 */

  font-family: "NanumSquare Neo";
  font-style: normal;

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
  margin-right: 16px;
`;
