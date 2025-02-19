import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState } from "react";
import AboutSeminarImage from "../../../assets/img/AboutSeminar.png";
import AboutStudyImage from "../../../assets/img/AboutStudy.png";
import AboutSurfingImage from "../../../assets/img/AboutSurfing.png";
import AboutShortImage from "../../../assets/img/AboutShort.png";
import AboutIdeaImage from "../../../assets/img/AboutIdea.png";
import AboutLongImage from "../../../assets/img/AboutLong.png";
import AboutDemoImage from "../../../assets/img/AboutDemo.png";

function AboutProgram() {
  const [Part, SetPart] = useState([
    //part배열 생성 후 setPart 함수로 상태값을 업데이트
    {
      id: 1,
      listNum: "01",
      listCon: "세미나 & 연합세미나",
      border_color: "#FF5C00",
      imgsrc: AboutSeminarImage,
      selected: true,
      context: (
        <>
          타운홀 미팅으로 시작하여 모든 동아리원들과 관계를 쌓아갑니다.
          <br />
          세미나는 전문가로부터 검토받은 커리큘럼을 기반으로 진행되며
          <br />
          파트장의 세션과 파트원들의 정보 공유, 현직자 실무 세션을 통해
          <br />
          개별 역량과 함께 협업을 위한 지식을 쌓습니다.
          <br />
          연합 세미나에서는 타 직군과 협업, 소통하는 방법을 배우고,
          <br />
          의사 결정과 문제 해결에 대한 시각을 확장합니다.
        </>
      ),
    },
    {
      id: 2,
      listNum: "02",
      listCon: "스터디",
      border_color: "#FF5C00",
      imgsrc: AboutStudyImage,
      selected: false,
      context: (
        <>
          파드는 새로운 것을 배우는 것에 있어 주저하지 않습니다.
          <br />
          배우고 싶은 내용이 있다면 직군, 관심 분야와 관계없이
          <br />
          함께 주체적으로 학습할 사람을 모으고,
          <br />
          서로 정한 기간에 따라 전문 지식을 쌓아가고 이를 공유합니다.
        </>
      ),
    },
    {
      id: 3,
      listNum: "03",
      listCon: "서핑데이",
      border_color: "#FF5C00",
      imgsrc: AboutSurfingImage,
      selected: false,
      context: (
        <>
          ‘협업’을 주제로 열리는 파드만의 캠프로, 다양한 활동을 통해 ‘좋은 
          <br />
          협업이란 무엇인가?’에 대해 공부하고 고민하는 시간을 갖습니다. 
          <br />
          1박 2일간 일상에서 벗어나 서로 더 깊게 함께 알아가고 즐기며, 
          <br />
          다른 직군과 함께 일할 때 가장 필요한 협업 커뮤니케이션 및 
          <br />
          방법론을 학습합니다.
        </>
      ),
    },
    {
      id: 4,
      listNum: "04",
      listCon: "숏커톤",
      border_color: "#FF5C00",
      imgsrc: AboutShortImage,
      selected: false,
      context: (
        <>
          제시된 주제에 따라 18시간 동안 기획자, 디자이너, 개발자가 
          <br />
          한 팀이 되어서 MVP(Minimum Value Product) 수준의 
          <br /> 
          앱/웹 서비스를 개발합니다.
          <br />
          제한된 리소스 내에서 서비스의 임팩트를 극대화할 수 있는 방법을
          <br />
          모색하고, 혁신적인 아이디어를 어떻게 매력적으로 풀어낼 것인지 
          <br />
          고민하고 실행합니다.
        </>
      ),
    },
    {
      id: 5,
      listNum: "05",
      listCon: "아이디어 피칭",
      border_color: "#FF5C00",
      imgsrc: AboutIdeaImage,
      selected: false,
      context: (
        <>
          기획, 개발, 디자인 파트와 무관하게 아이디어 피칭에 지원하여
          <br />
          자신이 구현하고 싶은 서비스의 기획안을 제안합니다. 
          <br />
          기획안에 대한 청중 Q&A 시간을 가진 후, 투표를 통하여 기획안을
          <br />
          선정합니다.  선정된 기획안의 기획자는 팀빌딩을 통해 
          <br />
          3주간의 해커톤인 롱커톤을 시작할 준비를 마칩니다.
        </>
      ),
    },
    {
      id: 6,
      listNum: "06",
      listCon: "롱커톤",
      border_color: "#FF5C00",
      imgsrc: AboutLongImage,
      selected: false,
      context: (
        <>
          3주동안 진행되는 내부 해커톤으로, 1명의 라이브한 사용자가 있는, 
          <br />
          배포가능한 수준의 서비스를 구현합니다. 각 파트는 3주에 걸쳐 
          <br />
          기획-디자인-개발의 실제 IT서비스 구현 프로세스를 경험합니다.
          <br />
          이 과정에서 각 직군의 현업자 멘토진으로부터 멘토링을 받으며 
          <br />
          서비스를 발전시킵니다. 구현된 서비스는 데모데이를 통해
          <br />
          최종적으로 공개됩니다.
        </>
      ),
    },
    {
      id: 7,
      listNum: "07",
      listCon: "데모데이",
      border_color: "#FF5C00",
      imgsrc: AboutDemoImage,
      selected: false,
      context: (
        <>
          3주간의 해커톤을 통하여 구현한 서비스를 데모데이를 통해 
          <br />
          공개합니다. 서비스 발표, 서비스 부스를 통해 심사위원 및 청중에게
          <br />
          구현한 서비스를 전달합니다.
          <br />
          현업 심사위원에게 서비스에 대한 심사평을 듣고  최종 수상팀이 
          <br />
          선정됩니다.
        </>
      ),
    },
  ]);

  const HandleButtonClick = (id) => {
    //현재 id
    SetPart((PrevPart) =>
      PrevPart.map((p) => {
        //PrevPart 이전에 저장해둔 배열 part정보, p는 각 요소
        if (p.id === id) {
          return {
            ...p, //배열의 spread operator (기존의 배열을 그대로 유지하면서 새로운 값을 추가하거나 기존 값을 수정할 때 사용)
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
        <Part2Div>
          <ThemeProvider theme={theme}>
            <Header7>함께하는 여정</Header7>
            <StyledWrap>
              {Part.map((content) => (
                <StyledWrap2 key={content.id}>
                  <Button
                    onClick={() => HandleButtonClick(content.id)}
                    selected={content.selected}
                    color={content.border_color}
                  >
                    <Header6Number selected={content.selected}>
                      {content.listNum}
                    </Header6Number>
                    <Header6 selected={content.selected}>
                      {content.listCon}
                    </Header6>
                  </Button>
                </StyledWrap2>
              ))}
              {Part.map((props) => (
                <Image
                  key={props.id}
                  src={props.imgsrc}
                  alt={`Image ${props.id}`}
                  selected={props.selected}
                />
              ))}
              {Part.map((props) => (
                <Body1 key={props.id} selected={props.selected}>
                  {props.context}
                </Body1>
              ))}
            </StyledWrap>
          </ThemeProvider>
        </Part2Div>
      </PartDiv>
    </Div>
  );
}

export default AboutProgram;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #000000;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  position: absolute;
`;

const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  position: absolute;
  bottom: -200px; /* 하단 정렬 */
  font-family: "NanumSquare Neo";
  color: #000000;
  width: 448px;
  line-height: 160%;
  opacity: ${(props) => (props.selected ? "1" : "0")};
`;

const StyledWrap = styled.ul`
position: relative;
  padding-top: 97px;
  padding-left: 0;
  padding-inline-start: 0px;
`;

const StyledWrap2 = styled.ul`
  width: 448px;
  padding-inline-start: 0px;
`;

const Button = styled.button`
  width: 448px;
  height: 40px;
  border-radius: 1.0417vw;
  margin-bottom: 10px;
  text-align: left;
  border-width: 0px;
  background-color: ${(props) => (props.selected ? props.color : "#fff")};
  cursor: pointer;
`;

const Header6Number = styled.div`
  display: inline-block;
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-family: "NanumSquare Neo";
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  padding-left: 20px;
  margin-top: 2px;
`;

const Header6 = styled.div`
  display: inline-block;
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-family: "NanumSquare Neo";
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  padding-left: 96px;
  margin-top: 2px;
`;

const Image = styled.img`
  margin-top: -350px;
  position: absolute;
  margin-left: 520px;
  margin-right: 184px;
  width: 540px;
  height: 548px;
  opacity: ${(props) => (props.selected ? "1" : "0")};
`;

const Div = styled.div`
  background-color: #ffffff;
`;

const PartDiv = styled.div`
  background-color: #ffffff;
  width: 1440px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Part2Div = styled.div`
  background-color: #ffffff;
  height: 950px;
  padding-top: 175px;
  padding-left: 184px;
  padding-right: 184px;
  display: block;
  margin: 0 auto;
`;