import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import 하조은 from "../../../assets/img/하조은.png";
import 주영민 from "../../../assets/img/주영민.png";
import 김강학 from "../../../assets/img/김강학.png";
import 김선엽 from "../../../assets/img/김선엽.png";

function MentorCard(props) {
  return (
    <ContentWrapper
      key={props.content.id}
      marginTop={props.content.id % 2 !== 0}
    >
      <Image
        src={props.content.imageSrc}
        alt={`Image ${props.content.id}`}
        color={props.content.color}
      />
      <TextWrapper2>
        <Header3 color={props.content.color}>"</Header3>
        <Header3 color={props.content.color}>"</Header3>
      </TextWrapper2>
      <TextWrapper>
        <Header6 id={props.content.id}>{props.content.title}</Header6>
      </TextWrapper>
      <Body2 isname={true} id={props.content.id}>
        {props.content.mentor_name}
      </Body2>
      <Body2 isname={false}>{props.content.mentor_from}</Body2>
    </ContentWrapper>
  );
}

function HomeMentor() {
  const contentsData = [
    {
      id: 1,
      imageSrc: 주영민,
      title: "Think Big,\nStart Small,\nMove fast,\nPard",
      mentor_name: "주영민",
      mentor_from: "(주)히든피겨스 CEO",
      color: "#7B3FEF",
    },
    {
      id: 2,
      imageSrc: 하조은,
      title: " 1인분 해내는\n주니어가 되기 위한\n최고의 선택",
      mentor_name: "하조은",
      mentor_from: "당근마켓 Software Engineer",
      color: "#FF5C00",
    },
    {
      id: 3,
      imageSrc: 김강학,
      title:
        "스펙 쌓기용이 아닌,\n정말 문제를 해결하고\n싶은 사람들이 모여\n함께 몰입하고 있습니다",
      mentor_name: "김강학",
      mentor_from: "토스페이먼츠 TPO",
      color: "#64C59A",
    },
    {
      id: 4,
      imageSrc: 김선엽,
      title:
        "실무 경험을\n가장 의미있게\n해볼 수 있는 놀이터",
      mentor_name: "김선엽",
      mentor_from: "CJ OliveNetworks 신사업 전략",
      color: "#5262F5",
    },
  ];

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>멘토 추천사</Header7>
          <Sub3>당신이 PARD와 함께 해야 하는 이유</Sub3>
          <PartContents>
            {contentsData.map((content) => (
              <PartWrapper key={content.id}>
                <MentorCard content={content}></MentorCard>
              </PartWrapper>
            ))}
          </PartContents>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default HomeMentor;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 25px;
  white-space: pre-line;
  text-align: center;
`;

const Sub3 = styled.div`
  color: #FFF;

font-family: "NanumSquare Neo";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 155%; /* 31px */
  margin-bottom: 14px;
  white-space: pre-line;
  text-align: center;
`;

const Header6 = styled.div`
  font-size: ${(props) =>
    props.id === 3
      ? props.theme.Mob_fontSizes.ButtonText1
      : props.theme.Mob_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: ${(props) => (props.color == null ? "#FFFFFF" : props.color)};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: center;
  line-height: ${(props) =>
    props.id === 3 ? "140%" : "150%"};
  display: flex;
  margin-top: ${(props) => (props.id === 1 ? "5px" : "20px")};
  margin-left: ${(props) => (props.id === 1 ? "10px" : "0")};
  margin-bottom: 15px;
`;
const Header3 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header3};
  font-weight: ${(props) => props.theme.fontWeights.Header3};
  color: ${(props) => (props.color == null ? "#FFFFFF" : props.color)};
  font-family: "NanumSquare Neo";
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: rgba(255, 255, 255, 0.4);
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  line-height: ${(props) =>
    props.id === 1 ? "160%" : props.isname ? "140%" : "140%"};
  display: flex;
  text-align: right;
  position: absolute;
  bottom: ${(props) => (props.isname ? "9vw" : "4.267vw")};
  right: 20px;
`;

const PartContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 93px;
`;

const PartWrapper = styled.div``;

const ContentWrapper = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 240px;
  height: 270px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  position: relative;
`;

const TextWrapper = styled.div`
  padding: 0px 42px;
  word-break: keep-all;
  align-items: center;
`;

const TextWrapper2 = styled.div`
  margin-top: 23px;
  height: 0;
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`;

const Image = styled.img`
  margin-top: -60px;
  width: 120px;
  height: 120px;
  border: 2px solid ${(props) => props.color};
  border-radius: 50%;
`;

const PartDiv = styled.div`
  padding-top: 115px;
  height: 1885px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
