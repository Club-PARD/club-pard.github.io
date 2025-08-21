import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import ServiceVector from "../../../assets/img/ServiceVector.png";
import DesignVector from "../../../assets/img/DesignVector.png";
import DevelopVector from "../../../assets/img/DevelopVector.png";
import SelectedVector from "../../../assets/img/SelectedVector.png";

const RecruitingPart = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  const [isHovered, setIsHovered] = React.useState(null);

  const handleHover = (index) => {
    setIsHovered(index);
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>5개의 파트가 여러분을 기다리고 있어요</Header7>
          <Container>
            <ButtonRow>
              {buttons.slice(0, 3).map((button, index) => (
                <Button
                  key={index}
                  onClick={() => openLink(button.link)}
                  hoverColor={button.hoverColor}
                  selectedImage={button.selectedImage}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <Vector
                    src={button.vectorImage}
                    isHovered={isHovered === index}
                    alt="vector"
                  />
                  <Header5 textColor={button.textColor}>
                    {button.title}
                    {button.showButton && (
                      <SmallButton
                        textColor={button.textColor}
                        hoverColor={button.hoverColor}
                        left={12}
                      >
                        <BtnText>{button.buttonText}</BtnText>
                      </SmallButton>
                    )}
                    {button.showButton2 && (
                      <SmallButton
                        textColor={button.textColor}
                        hoverColor={button.hoverColor}
                        left={10}
                      >
                        <BtnText>{button.buttonText2}</BtnText>
                      </SmallButton>
                    )}
                  </Header5>
                  <Body1>자세히 보기</Body1>
                </Button>
              ))}
            </ButtonRow>
            <ButtonRow>
              {buttons.slice(3).map((button, index) => (
                <Button
                  key={index}
                  onClick={() => openLink(button.link)}
                  hoverColor={button.hoverColor}
                  selectedImage={button.selectedImage}
                >
                  <Vector src={button.vectorImage} alt="vector" />
                  <Header5 textColor={button.textColor}>
                    {button.title}
                    {button.showButton && (
                      <SmallButton
                        textColor={button.textColor}
                        hoverColor={button.hoverColor}
                        left={12}
                      >
                        <BtnText>{button.buttonText}</BtnText>
                      </SmallButton>
                    )}
                  </Header5>
                  <Body1>자세히 보기</Body1>
                </Button>
              ))}
            </ButtonRow>
          </Container>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
};

export default RecruitingPart;

const buttons = [
  {
    title: "서비스 기획",
    link: "https://we-pard.notion.site/24c9fe7667e681daa04bed9a684f4ca7",
    textColor: "#000000",
    hoverColor: "#5262F5",
    vectorImage: ServiceVector,
    selectedImage: SelectedVector,
    showButton: true,
    buttonText: "사전과제",
    showButton2: false,
    buttonText2: "",
  },
  {
    title: "디자인",
    link: "https://we-pard.notion.site/UX-UI-24c9fe7667e6819dac26f2220eacc3d6",
    textColor: "#000000",
    hoverColor: "#7B3FEF",
    vectorImage: DesignVector,
    selectedImage: SelectedVector,
    showButton: true,
    buttonText: "사전과제",
    showButton2: false,
    buttonText2: "",
  },
  {
    title: "APP(iOS)",
    link: "https://we-pard.notion.site/App-iOS-24c9fe7667e681debc3affb5e6dc2347",
    textColor: "#000000",
    hoverColor: "#FF5C00",
    vectorImage: DevelopVector,
    selectedImage: SelectedVector,
  },
  {
    title: "WEB",
    link: "https://we-pard.notion.site/24c9fe7667e681ae9607f8dff640b367",
    textColor: "#000000",
    hoverColor: "#FF5C00",
    vectorImage: DevelopVector,
    selectedImage: SelectedVector,
    showButton: false,
    buttonText: false,
    showButton2: false,
    buttonText2: "",
  },
  {
    title: "SERVER",
    link: "https://we-pard.notion.site/Spring-24c9fe7667e681de9d7ce45e0a7759a9",
    textColor: "#000000",
    hoverColor: "#FF5C00",
    vectorImage: DevelopVector,
    selectedImage: SelectedVector,
    // showButton: true,
    // buttonText: "New!",
    showButton2: false,
    buttonText2: "",
  },
];

const PartDiv = styled.div`
  height: 600px;
  position: relative;
  margin-top: 50px;
  margin-left: 10px;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  line-height: 140%;
  margin-right: 420px;
  margin-bottom: 137px;
  display: flex;
  justify-content: center;
`;

const Header5 = styled.div`
  font-size: ${({ theme }) => theme.Mob_fontSizes.Header5};
  font-weight: ${({ theme }) => theme.fontWeights.Header5};
  color: ${({ textColor }) => textColor || "#000000"};
  font-family: "NanumSquare Neo";
  display: flex;
  align-items: center;
  white-space: pre-line;
  margin-left: 20px;
  margin-top: -79px;
`;

const Body1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body1};
  font-weight: ${({ theme }) => theme.fontWeights.Body1};
  font-family: "NanumSquare Neo";
  color: #000000;
  margin-bottom: 22px;
  margin-left: 21px;
  line-height: 160%;
`;

const BtnText = styled.div`
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 14.5455px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  margin-top: 2px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SmallButton = styled.button`
  border-radius: 13px;
  background-color: ${({ hoverColor }) => hoverColor};
  color: ${({ textColor }) => textColor};
  border: none;
  /* margin-left: 15px; */
  margin-left: ${(props) => props.left}px;
  width: auto;
  padding: 4px 10px;
  cursor: pointer;
  margin-bottom: 3px;
`;

const Vector = styled.img`
  margin-left: 178px;
  margin-right: 13px;
  margin-bottom: 3.5px;
`;

const Button = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  height: 105px;
  border-radius: 8.70663px;
  background-color: #ffffff;
  margin-left: 56px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    ${Header5},
    ${Body1} {
      color: #ffffff;
    }
    ${SmallButton} {
      color: ${({ hoverColor }) => hoverColor};
      background-color: #ffffff;
    }
    ${BtnText} {
      color: ${({ hoverColor }) => hoverColor};
    }
  }
  &:hover {
    ${Vector} {
      content: url(${({ selectedImage }) => selectedImage});
    }
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 56px;
  margin-right: 70px;
  flex-wrap: wrap;
`;
