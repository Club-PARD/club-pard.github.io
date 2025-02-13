import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import PlanerImage from "../../../assets/img/PM_part.png";
import DesignerImage from "../../../assets/img/Designer_part.png";
import APPImage from "../../../assets/img/iOS_part.png";
import WEBImage from "../../../assets/img/Web_part.png";
import SERVERImage from "../../../assets/img/Server_part.png";

function PartSection(props) {
  return (
    <ContentWrapper
      textAlign={
        props.content.id === 2 || props.content.id === 4 ? "right" : "left"
      }
    >
      <Image src={props.content.imageSrc} alt={`Image ${props.content.id}`} />
      <TextWrapper
        textAlign={
          props.content.id === 2 || props.content.id === 4 ? "right" : "left"
        }
      >
        <Header5
          textAlign={
            props.content.id === 2 || props.content.id === 4 ? "right" : "left"
          }
        >
          {props.content.title}
        </Header5>
        <Body2>{props.content.description}</Body2>
      </TextWrapper>
    </ContentWrapper>
  );
}

function HomePartsMob() {
  const contentsData = [
    {
      id: 1,
      imageSrc: PlanerImage,
      title: "서비스 기획",
      description:
        "문제 정의부터 산출물 작성까지\n사용자 중심으로 문제를\n해결하고 프로젝트를 관리합니다.",
    },
    {
      id: 2,
      imageSrc: DesignerImage,
      title: "UI/UX 디자인",
      description:
        "유저플로우에 적합한 \nUXUI 디자인 이론을 녹여 \n사용자 중심의 화면을 설계합니다.",
    },
    {
      id: 3,
      imageSrc: APPImage,
      title: "앱(iOS)",
      description:
        "사용자를 위한 어플리케이션 \nUI를 설계하고 swift Uikit 기반 \niOS 앱 서비스를 개발합니다.",
    },
    {
      id: 4,
      imageSrc: WEBImage,
      title: "웹(WEB)",
      description:
        "사용자를 위한 웹 UI를 설계하고,\n문제를 해결하는 React 기반\n웹 서비스를 개발합니다.",
    },
    {
      id: 5,
      imageSrc: SERVERImage,
      title: "서버(SERVER)",
      description:
        "서비스의 핵심 비즈니스 로직과 \n데이터 흐름을 설계하고 \n인프라 구축과 배포를 담당합니다.",
    },
  ];

  const handleClick = () => {
    window.open("https://we-pard.com/About", "_blank");
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>PARTS</Header7>
          <PartContents>
            {contentsData.map((content) => (
              <PartWrapper
                key={content.id}
                id={content.id}
                textAlign={
                  content.id === 2 || content.id === 4 ? "right" : "left"
                }
              >
                <PartSection content={content}></PartSection>
              </PartWrapper>
            ))}
          </PartContents>
          <Button1 onClick={handleClick}>더 알아보기</Button1>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default HomePartsMob;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-right: 213px;
  white-space: pre-line;
  margin-bottom: 40px;
  margin-top: 45px;
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 19px;
  display: flex;
  justify-content: ${(props) =>
    props.textAlign === "right" ? "flex-end" : "flex-start"};
  white-space: pre-line;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  line-height: 140%;
  display: flex;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin-bottom: 98px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  width: 243px;
  height: 199px;
  justify-content: center;
  align-items: ${(props) => props.textAlign === "right" ? "flex-end" : "flex-start"};

  /* align-items: flex-start; */
`;

const Image = styled.img`
  margin-bottom: 18px;
  width: 200px;
  height: 240px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 2600px;
`;

const PartDiv = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 375px;
  align-items: center;
`;

const TextWrapper = styled.div`
  word-break: keep-all;
  text-align: ${(props) => (props.textAlign === "right" ? "right" : "left")};
`;
const PartWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-left: 115px; */
  align-items: ${(props) =>
    props.textAlign === "left" ? "flex-end" : "flex-start"};
`;

const PartContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  height: 2117px;
  margin-top: 80px;
  position: relative;
  align-items: center;
  /* padding-left: 25px; */
  /* padding-right: 25px; */
`;

const Button1 = styled.button`
  font-size: ${(props) => props.theme.Mob_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  display: flex;
  align-items: center;
  line-height: 9px;
  width: 199px;
  height: 52px;
  background-color: #7b3fef;
  justify-content: center;
  margin-top: 58px;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
