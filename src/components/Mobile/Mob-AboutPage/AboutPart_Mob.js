import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState } from "react";
import PM from "../../../assets/img/PM_Info.png";
import Web from "../../../assets/img/WEB_Info.png";
import Design from "../../../assets/img/Design_Info.png";
import App from "../../../assets/img/iOS_info.png";
import Server from "../../../assets/img/Server_info.png";

function AboutPart_Mob() {
  const [part, setPart] = useState([
    {
      id: 1,
      part: "서비스 기획",
      // TODO: theme
      border_color: "#5262F5",
      imgsrc: PM,
      selected: true,
      partEng: "Product Manager",
      context: (
        <>
          뾰족한 문제정의를 바탕으로 사용자들의 문제를
          <br />
          해결하는 서비스를 기획합니다. 아이디어 발상에서
          <br />
          그치는 것이 아닌 프로덕트 구현의 모든 과정에서
          <br />
          관리자 역할을 수행합니다. 이 과정에서 실무 기획에서
          <br />
          사용되는 기획 산출물을 작성하고 산출물을 기반으로
          <br />
          디자이너/개발자와 소통합니다.
          <br />
          <br />
          이 모든 과정을 통해 문제 정의, 데이터 기반 솔루션 도출,
          <br />
          UX 설계 뿐만 아니라 프로젝트 매니징을 위한
          <br />
          프레임워크, 회고 방법을 통해 서비스 기획자 및
          <br />
          PM의 역량을 쌓을 수 있습니다.
        </>
      ),
      homework: "문제발견 및 문제정의",
    },
    {
      id: 2,
      part: "디자인",
      border_color: "#7B3FEF",
      imgsrc: Design,
      selected: false,
      partEng: "Designer",
      context: (
        <>
          사용자 심리에 기반한 UX/UI 디자인 이론을
          <br />
          학습하고, 디자인 구현의 모든 단계에서
          <br />
          사용자 중심 사고를 적용하여 실질적인
          <br />
          문제 해결 능력을 학습합니다.
          <br />
          <br />
          현업 실무자와의 멘토링, 그리고 다른 직군과의
          <br />
          프로젝트 경험을 통해, 서비스 기획, 사용자 리서치,
          <br />
          데이터 분석, QA 등 실무에서 활용가능한 전문성을
          <br />
          기르고 궁극적으로 협업에 강한 디자이너로 성장합니다.
        </>
      ),
      homework: "롱커톤 디자인 산출물",
    },
    {
      id: 3,
      part: "iOS",
      border_color: "#FF5C00",
      imgsrc: App,
      selected: false,
      partEng: "iOS Developer",
      context: (
        <>
          iOS 앱과 서비스 개발을 위한 이론을 배우고
          <br />
          실습/협업합니다. 애플 자체 개발 언어인 Swift를 통해
          <br />
          UI를 효율적으로 구현하고 이를 바탕으로
          <br />
          팀 프로젝트를 진행함으로써 실전 경험을 쌓으며
          <br />
          팀원들과 함께 성장합니다.
          <br />
          <br />
          최신 iOS 기술 트렌드를 공부하고, 이를 실무에
          <br />
          적용하여 사용자 친화적인 앱을 개발하는 것을
          <br />
          목표로 하며 프레임워크에 대한 분석 능력과
          <br />
          역량을 키우고, IT 프로덕트 제작 과정을 경험함으로써
          <br />
          유의미한 포트폴리오를 가진 개발자로 성장합니다.
        </>
      ),
      homework: "netflix 앱 클론 코딩",
    },
    {
      id: 4,
      part: "WEB",
      border_color: "#FF5C00",
      imgsrc: Web, //수정 필요
      selected: false,
      partEng: "Web Developer",
      context: (
        <>
          <br />
          기획, 디자인 직군과의 실제 배포를 위한 제대로된
          <br />
          협업을 통해서 인공지능이 대체할 수 없는
          <br />
          커뮤니케이션 능력을 갖추고, 기획자와 디자이너를
          <br />
          이해할 수 있는 개발자로 성장합니다.
          <br />
          <br />
          또한, 웹 개발자간의 협업, 웹과 서버 개발자간의
          <br />
          협업을 통해서 유사 직군과 함께 하는 과정을 경험하며
          <br />
          성장합니다.
        </>
      ),
      homework: "오늘의 집 웹 클론 코딩",
    },
    {
      id: 5,
      part: "SERVER",
      border_color: "#FF5C00",
      imgsrc: Server,
      selected: false,
      partEng: "Server Developer",
      context: (
        <>
          <br />
          데이터 설계, 서버 관리, 그리고 시스템 인프라 구축
          <br />
          및 운영에 대한 깊이 있는이해를 바탕으로
          <br />
          실제 서비스 운영에 기여합니다.
          <br />
          자바의 객체지향 프로그래밍 원칙과 관계형
          <br />
          데이터베이스 구조를 이해하며, Spring Boot를
          <br />
          활용하여 기본기부터 보안까지 폭넓은 경험을
          <br />
          쌓고 있습니다.
          <br />
          <br />
          클라이언트를 담당하는 앱/웹 파트와 협업하며
          <br />
          의사소통 능력을 키우고, CI/CD를 구축할 수 있는
          <br />
          개발자로 성장합니다.
        </>
      ),
      homework: "ERD(Entity Relationship Diagram)",
    },
  ]);

  const handleButtonClick = (id) => {
    setPart((prevPart) =>
      prevPart.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            selected: true,
          };
        } else {
          return {
            ...p,
            selected: false,
          };
        }
      })
    );
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header8>파드를 구성하는 파트</Header8>
          <ListWrap>
            {part.map((content) => (
              <ListButton
                key={content.id}
                onClick={() => handleButtonClick(content.id)}
                selected={content.selected}
                color={content.border_color}
              >
                <List key={content.id} selected={content.selected}>
                  {content.part}
                </List>
              </ListButton>
            ))}
          </ListWrap>
          {part.map((props) => (
            <Down key={props.id}>
              <Image
                key={props.id}
                src={props.imgsrc}
                alt={`Image ${props.id}`}
                selected={props.selected}
                color={props.border_color}
              />
              <ImageBorder selected={props.selected} color={props.border_color}>
                {" "}
                <ImageText selected={props.selected}>
                  {props.homework}
                </ImageText>{" "}
              </ImageBorder>
              <ButtonText1 selected={props.selected} color={props.border_color}>
                {props.partEng} of Pard
              </ButtonText1>
              <Body2 selected={props.selected}>{props.context}</Body2>
            </Down>
          ))}
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default AboutPart_Mob;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #000000;
  font-family: "NanumSquare Neo";
  line-height: 1.45;
  margin-bottom: 73px;
  white-space: pre-line;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const PartDiv = styled.div`
  padding-top: 133px;
  width: 100%;
  height: 950px;
  background-color: #ffffff;
  position: relative;
  display: grid;
  place-content: center;
  align-content: start;
  justify-content: center;
`;
const ButtonText1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.ButtonText1};
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  color: ${(props) => props.color};
  opacity: ${(props) => (props.selected ? "1" : "0")};
  position: absolute;
  white-space: pre-wrap;
  margin-top: 313px;
  text-align: left;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  font-family: "NanumSquare Neo";
  opacity: ${(props) => (props.selected ? "1" : "0")};
  position: absolute;
  white-space: pre-wrap;
  margin-top: 350px;
  line-height: 140%;
`;

const ListWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 303px;
  list-style: none;
  padding: 0;
  justify-content: center;
`;

const List = styled.li`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  color: ${(props) => (props.selected ? "#fff" : "#000")};
`;
const ImageBorder = styled.div`
  width: 303px;
  height: 30px;
  position: absolute;
  border-radius: 0px 0px 13px 13px;
  opacity: ${(props) => (props.selected ? "1" : "0")};
  background-color: ${(props) => (props.selected ? props.color : "#ff0")};
  margin-top: 253px;
`;
const ImageText = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Caption1};
  font-weight: ${(props) => props.theme.fontWeights.Caption1};
  margin-left: 17px;
  margin-top: 9px;
  color: white;
  opacity: ${(props) => (props.selected ? "1" : "0")};
`;

const ListButton = styled.button`
  width: 101px;
  border: none;
  background-color: ${(props) => (props.selected ? props.color : "#fff")};
  height: auto;
  min-height: 40px;
  line-height: 1.2;
  border-radius: 15px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 303px;
  height: 243px;
  opacity: ${(props) => (props.selected ? "1" : "0")};
  position: absolute;
  margin-top: 40px;
`;

const Down = styled.div`
  width: 303px;
`;
