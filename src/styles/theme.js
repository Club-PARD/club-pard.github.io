import { SiPrisma } from "react-icons/si";
import { createGlobalStyle } from "styled-components";

// GlobalStyle을 생성합니다.
export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'NanumSquare Neo';
    font-weight: 300;
    font-style: normal;
    src: url('../../assets/img/font/NanumSquareNeo-aLt.woff2') format('woff2'),
         url('../../assets/img/font/NanumSquareNeo-aLt.woff') format('woff'),
         url('../../assets/img/font/NanumSquareNeo-aLt.ttf') format('truetype');
    font-display: swap;
} 
@font-face {
    font-family: 'NanumSquare Neo';
    font-weight: 400;
    font-style: normal;
    src: url('../../assets/img/font/NanumSquareNeo-bRg.woff2') format('woff2'),
         url('../../assets/img/font/NanumSquareNeo-bRg.woff') format('woff'),
         url('../../assets/img/font/NanumSquareNeo-bRg.ttf') format('truetype');
    font-display: swap;
} 
@font-face {
    font-family: 'NanumSquare Neo';
    font-weight: 700;
    font-style: normal;
    src: url('../../assets/img/font/NanumSquareNeo-cBd.woff2') format('woff2'),
         url('../../assets/img/font/NanumSquareNeo-cBd.woff') format('woff'),
         url('../../assets/img/font/NanumSquareNeo-cBd.ttf') format('truetype');
    font-display: swap;
} 
@font-face {
    font-family: 'NanumSquare Neo';
    font-weight: 800;
    font-style: normal;
    src: url('../../assets/img/font/NanumSquareNeo-dEb.woff2') format('woff2'),
         url('../../assets/img/font/NanumSquareNeo-dEb.woff') format('woff'),
         url('../../assets/img/font/NanumSquareNeo-dEb.ttf') format('truetype');
    font-display: swap;
} 
@font-face {
    font-family: 'NanumSquare Neo';
    font-weight: 900;
    font-style: normal;
    src: url('../../assets/img/font/NanumSquareNeo-eHv.woff2') format('woff2'),
         url('../../assets/img/font/NanumSquareNeo-eHv.woff') format('woff'),
         url('../../assets/img/font/NanumSquareNeo-eHv.ttf') format('truetype');
    font-display: swap;
} 

  body{
      font-family: "NanumSquare Neo";
      background-color: #1A1A1A;
   }

`;


export const theme = {
  Web_fontSizes: {
    Header0: "96px",
    Header1: "70px",
    Header2: "60px",
    Header3: "48px",
    Header4: "34px",
    Header5: "24px",
    Header6: "20px",
    Header7: "40px",
    Header8: "30px",
    Subtitle1: "16px",
    Subtitle2: "14px",
    Subtitle3: "24px",
    Body1: "16px",
    Body2: "14px",
    Body3: "12px",
    Body: "13px",
    ButtonText1: "16px",
    Caption1: "12px",
    Caption: "16px",
  },
  fontWeights: {
    Header0: "800",
    Header1: "800",
    Header2: "800",
    Header3: "400",
    Header4: "400",
    Header5: "700",
    Header6: "700",
    Header7: "800",
    Header8: "800",
    Subtitle1: "700",
    Subtitle2: "700",
    Subtitle3: "400",
    Body1: "350",
    Body2: "400",
    Body3: "100",
    ButtonText1: "700",
    Caption1: "400",
    Caption: "800",
  },
  Mob_fontSizes: {
    Header0: "96px",
    Header1: "70px",
    Header2: "60px",
    Header3: "48px",
    Header4: "34px",
    Header5: "24px",
    Header6: "20px",
    Header7: "40px",
    Header8: "30px",
    Subtitle1: "16px",
    Subtitle2: "14px",
    Subtitle3: "24px",
    Body1: "16px",
    Body2: "14px",
    Body3: "13px",
    ButtonText1: "16px",
    Caption1: "12px",
    Caption: "12px",
  },
  NavBarColor: {
    navbarColor: "#1A1A1A", // Navbar의 색상
  },
  MainColor: {
    PrimaryOrange: "#FF5C00",
    PrimaryPurple: "#7B3FEF",
    PrimaryGreen: "#64C59A",
    PrimaryBlue: "#5262F5",
  },
};