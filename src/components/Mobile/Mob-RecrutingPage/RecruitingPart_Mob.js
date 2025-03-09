import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import ServiceVector from "../../../assets/img/ServiceVector.png";
import DesignVector from "../../../assets/img/DesignVector.png";
import DevelopVector from "../../../assets/img/DevelopVector.png";
import SelectedVector from "../../../assets/img/SelectedVector.png";

const RecruitingPart_Mob = () => {
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
          <Header8>
            5개의 파트가 여러분을
            <br /> 기다리고 있어요
          </Header8>
          <Container>
            {buttons.map((button, index) => (
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
                <Header6 textColor={button.textColor}>
                  {button.title}
                  {button.showButton && (
                    <SmallButton
                      textColor={button.textColor}
                      hoverColor={button.hoverColor}
                      left={20}
                    >
                      <BtnText>{button.buttonText}</BtnText>
                    </SmallButton>
                  )}
                  {button.showButton2 && (
                    <SmallButton
                      textColor={button.textColor}
                      hoverColor={button.hoverColor}
                      left={15}
                    >
                      <BtnText>{button.buttonText2}</BtnText>
                    </SmallButton>
                  )}
                </Header6>
                <Body2>자세히 보기</Body2>
              </Button>
            ))}
          </Container>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
};

export default RecruitingPart_Mob;

const buttons = [
  {
    title: "서비스 기획",
    link: "https://we-pard.notion.site/1ae9fe7667e681bdb5f7db06f38cc21b",
    textColor: "#000000",
    hoverColor: "#5262F5",
    vectorImage: ServiceVector,
    selectedImage: SelectedVector,
    showButton: false,
    buttonText: "사전과제",
    showButton2: false,
    buttonText2: "",
  },
  {
    title: "디자인",
    link: "https://we-pard.notion.site/UX-UI-1ae9fe7667e6816a80fbffabdb3dc9f0",
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
    link: "https://we-pard.notion.site/App-iOS-1ae9fe7667e681a7aedaccf77a3e745b",
    textColor: "#000000",
    hoverColor: "#FF5C00",
    vectorImage: DevelopVector,
    selectedImage: SelectedVector,
  },
  {
    title: "WEB",
    link: "https://we-pard.notion.site/1ae9fe7667e681f188d6e6462598d75b",
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
    link: "https://we-pard.notion.site/Spring-1ae9fe7667e6811391d0cabf0995e696",
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

const Header6 = styled.div`
  font-size: ${({ theme }) => theme.Mob_fontSizes.Header6};
  font-weight: ${({ theme }) => theme.fontWeights.Header6};
  line-height: 28px;
  display: flex;
  align-items: center;
  color: ${({ textColor }) => textColor || "#000000"};
  margin-top: -216px;
  margin-left: 22px;
`;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  line-height: 42px;
  white-space: pre-line;
  font-style: normal;
  margin-left: 36px;
  margin-bottom: 100px;
  position: relative;
`;

const Body2 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body2};
  font-weight: ${({ theme }) => theme.fontWeights.Body2};
  color: #000000;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  line-height: 140%;
  margin-bottom: 22px;
  margin-top: 5px;
  margin-left: 22px;
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
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PartDiv = styled.div`
  height: 1000px;
  width: 375px;
`;

const SmallButton = styled.button`
  border-radius: 13px;
  background-color: ${({ hoverColor }) => hoverColor};
  color: ${({ textColor }) => textColor};
  border: none;
  margin-left: ${(props) => props.left}px;
  width: auto;
  padding: 5px 10px;
  cursor: pointer;
`;

const Vector = styled.img`
  margin-left: 178px;
  margin-right: 6.33px;
  margin-bottom: 140px;
`;

const Button = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 303px;
  height: 97px;
  border-radius: 8.70663px;
  background-color: #ffffff;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    ${Header6},
    ${Body2} {
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
