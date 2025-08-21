import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState } from "react";
import PM from "../../../assets/img/PM_Info.png";
import Web from "../../../assets/img/WEB_Info.png";
import Design from "../../../assets/img/Design_Info.png";
import App from "../../../assets/img/iOS_info.png";
import Server from "../../../assets/img/Server_info.png";

function AboutPart() {
  const [part, setPart] = useState([
    {
      id: 1,
      part: "서비스 기획",
      border_color: "#5262F5",
      imgsrc: PM, //수정 필요
      selected: true,
      partEng: "Product Manager",
      context: (
        <>
          뾰족한 문제정의를 바탕으로 사용자들의 문제를 해결하는 서비스를 기획합니다.
          <br />
          아이디어 발상에서 그치는 것이 아닌 프로덕트 구현의 모든 과정에서
          <br />
          관리자 역할을 수행합니다. 이 과정에서 실무 기획에서 사용되는
          <br />
          기획 산출물을 작성하고 산출물을 기반으로 디자이너/개발자와 소통합니다.
          <br />
          <br />
          이 모든 과정을 통해 문제 정의, 데이터 기반 솔루션 도출,
          <br />
          UX 설계 뿐만 아니라 프로젝트 매니징을 위한 프레임워크,
          <br />
          회고 방법을 통해 서비스 기획자 및 PM의 역량을 쌓을 수 있습니다.
        </>
      ),
      homework: "문제발견 및 문제정의",
    },
    {
      id: 2,
      part: "UI/UX 디자인",
      border_color: "#7B3FEF",
      imgsrc: Design, //수정 필요
      selected: false,
      partEng: "Designer",
      context: (
        <>
          사용자 심리에 기반한 UX/UI 디자인 이론을 학습하고,
          <br />
          디자인 구현의 모든 단계에서 사용자 중심 사고를 적용하여
          <br />
          실질적인 문제 해결 능력을 학습합니다.
          <br />
          <br />
          현업 실무자와의 멘토링, 그리고 다른 직군과의 프로젝트 경험을 통해,
          <br />
          서비스 기획, 사용자 리서치, 데이터 분석, QA 등 실무에서 활용가능한
          <br />
          전문성을 기르고 궁극적으로 협업에 강한 디자이너로 성장합니다.
        </>
      ),
      homework: "롱커톤 디자인 산출물",
    },
    {
      id: 3,
      part: "앱(iOS)",
      border_color: "#FF5C00",
      imgsrc: App,
      selected: false,
      partEng: "iOS Developer",
      context: (
        <>
          iOS 앱과 서비스 개발을 위한 이론을 배우고 실습/협업합니다.
          <br />
          애플 자체 개발 언어인 Swift를 통해 UI를 효율적으로 구현하고
          <br />
          이를 바탕으로 팀 프로젝트를 진행함으로써 실전 경험을 쌓으며
          <br />
          팀원들과 함께 성장합니다.
          <br />
          <br />
          최신 iOS 기술 트렌드를 공부하고, 이를 실무에 적용하여
          <br />
          사용자 친화적인 앱을 개발하는 것을 목표로 하며 프레임워크에 대한
          <br />
          분석 능력과 역량을 키우고, IT 프로덕트 제작 과정을 경험함으로써
          <br />
          유의미한 포트폴리오를 가진 개발자로 성장합니다.
        </>
      ),
      homework: "netflix 앱 클론 코딩",
    },
    {
      id: 4,
      part: "웹(WEB)",
      border_color: "#FF5C00",
      imgsrc: Web, //수정 필요
      selected: false,
      partEng: "Web Developer",
      context: (
        <>
          <br />
          기획, 디자인 직군과의 실제 배포를 위한 제대로된 협업을 통해서
          <br />
          인공지능이 대체할 수 없는 커뮤니케이션 능력을 갖추고,
          <br />
          기획자와 디자이너를 이해할 수 있는 개발자로 성장합니다.
          <br />
          <br />
          또한, 웹 개발자간의 협업, 웹과 서버 개발자간의 협업을 통해서
          <br />
          유사 직군과 함께 하는 과정을 경험하며 성장합니다.
        </>
      ),
      homework: "오늘의 집 웹 클론 코딩",
    },
    {
      id: 5,
      part: "서버(SERVER)",
      border_color: "#FF5C00",
      imgsrc: Server,
      selected: false,
      partEng: "Server Developer",
      context: (
        <>
          <br />
          데이터 설계, 서버 관리, 그리고 시스템 인프라 구축 및 운영에 대한
          <br />
          깊이 있는이해를 바탕으로 실제 서비스 운영에 기여합니다.
          <br />
          자바의 객체지향 프로그래밍 원칙과 관계형 데이터베이스 구조를 이해하며,
          <br />
          Spring Boot를 활용하여 기본기부터 보안까지 폭넓은 경험을 쌓고 있습니다.
          <br />
          <br />
          클라이언트를 담당하는 앱/웹 파트와 협업하며 의사소통 능력을 키우고,
          <br />
          CI/CD를 구축할 수 있는 개발자로 성장합니다.
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
          <Header7>파드를 구성하는 파트</Header7>
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
              <Header5 selected={props.selected} color={props.border_color}>
                {props.partEng} of PARD
              </Header5>
              <Body1 selected={props.selected}>{props.context}</Body1>
            </Down>
          ))}
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default AboutPart;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #000000;
  font-family: "NanumSquare Neo";
  line-height: 1.45;
  margin-bottom: 745px;
  text-align: left;
  position: absolute;
  bottom: 0;
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: ${(props) => props.color};
  opacity: ${(props) => (props.selected ? "1" : "0")};
  margin-left: 648px;
  position: absolute;
  margin-bottom: 461px;
  bottom: 0;
  white-space: pre-wrap;
`;

const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  font-family: "NanumSquare Neo";
  opacity: ${(props) => (props.selected ? "1" : "0")};
  position: absolute;
  margin-left: 648px;
  bottom: 0;
  white-space: pre-wrap;
  margin-bottom: 144px;
  line-height: 160%;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  background: #ffffff;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

const PartDiv = styled.div`
  padding-top: 150px;
  padding-left: 110px;
  padding-right: 112px;
  padding-bottom: 114px;
  height: 720px;
  background-color: #ffffff;
  position: relative;
  display: block;
  width: 1072px;
  margin: 0 auto;
`;

const ListWrap = styled.ul`
  display: flex;
  width: 87%;
  list-style: none;
  padding: 0;
  margin-bottom: 641px;
  position: absolute;
  bottom: 0;
`;
const ImageBorder = styled.div`
  width: 550px;
  height: 30px;
  position: absolute;
  bottom: 0;
  border-radius: 0px 0px 21px 21px;
  opacity: ${(props) => (props.selected ? "1" : "0")};
  background-color: ${(props) => (props.selected ? props.color : "#ff0")};
  margin-bottom: 144px;
`;
const ImageText = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Caption1};
  font-weight: ${(props) => props.theme.fontWeights.Caption1};
  margin-left: 32px;
  margin-top: 9px;
  color: white;
  opacity: ${(props) => (props.selected ? "1" : "0")};
`;

const List = styled.li`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  display: inline-block;
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  margin-top: 2px;
`;

const ListButton = styled.button`
  width: 20%;
  border: none;
  background-color: ${(props) => (props.selected ? props.color : "#fff")};
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 550px;
  height: 440px;
  opacity: ${(props) => (props.selected ? "1" : "0")};
  position: absolute;
  float: left;
  bottom: 0;

  margin-bottom: 144px;
`;
const Down = styled.div``;
