import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState } from "react";
import vector from "../../../assets/img/vector.png";
import selectVector from "../../../assets/img/vector_Green.png";

function RecruitingAbout() {
  const [question, setQuestion] = useState([
    {
      id: 1,
      item: "지원관련",
      question: [
        {
          id: 1,
          quest: "Q. 경험과 실력도 부족한데 지원해도 될까요?",
          answer: (
            <>
              A. PARD는 협업을 통한 성장과, 남을 주기 위해 배움을 기꺼이 즐기는
              것을 추구합니다.
              <br />
              &nbsp; &nbsp; &nbsp;따라서 경험과 실력보다는 기획, 디자인, 개발 각
              파트에 대한 열정과 PARD 활동을 통해 이루고자 하는 <br />
              &nbsp; &nbsp; &nbsp;목표를 더 중요시합니다.
            </>
          ),
          select: false,
        },
        {
          id: 2,
          quest: "Q. 지원 조건이 어떻게 되나요?",
          answer: (
            <>
              A. 6기 기준 2025년도 만 18세에서 만
              30세이면 지원 가능합니다.
            </>
          ),
          select: false,
        },
        {
          id: 3,
          quest: "Q. 한번에 여러 파트로 중복 지원이 가능할까요?",
          answer: (
            <>
              A. 다양한 분야로 관심이 많으신 예비 지원자님 정말 멋지십니다!
              <br />
              &nbsp; &nbsp; &nbsp;하지만 아쉽게도 중복 지원은 어렵습니다. 6기는
              먼저 배우고 싶은 파트를,
              <br />
              &nbsp; &nbsp; &nbsp;7기에는 다른 파트에 지원해 보시는 건 어떨까요?
            </>
          ),
          select: false,
        },
        {
          id: 4,
          quest: "Q. 비슷한 동아리들이 있는데 PARD만의 차별점은 무엇인가요?",
          answer: (
            <>
              A. 파드는 협업이라는 가치에 누구보다 진심인 동아리입니다.
              <br />
              &nbsp; &nbsp; &nbsp;혼자 잘하기보단 함께 자라기를 추구하며 IT
              프로덕트를 만드는 과정에서
              <br />
              &nbsp; &nbsp; &nbsp;제대로 된 협업을 경험합니다.
            </>
          ),
          select: false,
        },
        {
          id: 5,
          quest: "Q. YB와 OB의 구체적인 차이가 있나요?",
          answer: (
            <>
              A. OB는 YB를 수료한 멤버들로, PARD Alumni(알럼나이)에 속하게
              됩니다.
              <br />
              &nbsp; &nbsp; &nbsp;OB와 YB가 함께하는 프로그램과 OB만의
              프로그램들이 준비되어 있습니다.
              <br />
              ex) 기획 파트 YB 수료 후 디자인 파트로 지원시 
              - 기획 OB / 디자인 YB 입니다.
            </>
          ),
          select: false,
        },
      ],
      selected: true,
    },
    {
      id: 2,
      item: "활동관련",
      question: [
        {
          id: 1,
          quest: "Q. 교통이 불편한데, 어디서 모여 활동하나요?",
          answer: (
            <>
              A. 활동 멤버 분들이 속한 구성원 분들의 수가 많은 곳에서 주요
              활동을 진행하고 있습니다. 6기는 한동대학교에서
              <br />
              &nbsp; &nbsp; &nbsp;모일 예정입니다. 교통이 불편한 포항 여건 상,
              파드는 포항시에 소재한 한동대학교 외 6기 분들에게는 매주 <br />
              &nbsp; &nbsp; &nbsp;교통비(택시비)를 일부 지원해드릴 예정입니다!
              많은 지원 부탁드릴게요:) &nbsp; &nbsp; &nbsp;
            </>
          ),
          select: false,
        },
        {
          id: 2,
          quest: "Q. 해커톤만 참여 가능한가요?",
          answer: (
            <>
              A. PARD는 기수제로, 활동 기수는 매주 진행하는 세미나와 연합세미나,
              숏커톤, 롱커톤과 같은 정규 일정을
              <br />
              &nbsp; &nbsp; &nbsp;모두 참여하셔야 수료 가능합니다. (출석체크
              진행 및 내부 점수제도 운영)
            </>
          ),
          select: false,
        },
        {
          id: 3,
          quest: "Q. 해커톤 팀은 어떻게 꾸리나요?",
          answer: (
            <>
              A. 숏커톤을 위한 팀은 팀원들의 스킬셋과 커뮤니케이션 스타일을
              고려하여 지정하고 있으며,
              <br />
              &nbsp; &nbsp; &nbsp;롱커톤을 위한 팀은 아이디어 경선을 통해
              아이디어를 피칭하고,
              <br />
              &nbsp; &nbsp; &nbsp;해당 아이디어 관심이 있는 팀원들 위주로 별도의
              팀빌딩 프로세스가 진행됩니다!
            </>
          ),
          select: false,
        },
        {
          id: 4,
          quest: "Q. 해커톤의 주제는 어떻게 정하나요?",
          answer: (
            <>
              A. 해커톤의 주제는 운영진의 논의 후에 시대적 트렌드와 <br />
              &nbsp; &nbsp; &nbsp;PARD의 핵심 가치를 아우를 수 있는 주제를
              채택합니다.
            </>
          ),
          select: false,
        },
        {
          id: 5,
          quest: "Q. 앱(iOS) 개발 시 어떤 프로그래밍 언어를 사용하나요?",
          answer:
            "A. 6기 기준 iOS 앱 개발을 위한 Swift UI를 사용하고 있습니다.",
          select: false,
        },
      ],
      selected: false,
    },
    {
      id: 3,
      item: "일정관련",
      question: [
        {
          id: 1,
          quest: "Q. PARD 기수는 언제 선발하나요?",
          answer: <>A. 1년에 2번, 2월, 8월에 새로운 기수를 선발합니다.</>,
          select: false,
        },
        {
          id: 2,
          quest: "Q. 활동기간 중 매주 토요일 일정이 모두 비워져 있어야하나요?",
          answer: (
            <>
              A. 활동 인원의 대부분이 대학생인 관계로, 중간/기말고사를 준비할 수
              있도록 시험기간에는 세미나를 진행하지 않습니다!
              <br />
              &nbsp; &nbsp; &nbsp;그 외의 토요일 일정은 모두 비워져 있어야 합니다. 
              <br />
              &nbsp; &nbsp; &nbsp;(개인사정으로 결석하는 횟수는 2회 이내로 제한하고 있습니다.)
            </>
          ),
          select: false,
        },
        {
          id: 3,
          quest: "Q.실제로 얼만큼의 리소스가 투입되어야 할까요?",
          answer: (
            <>
              A. 개인마다 다르겠지만, 토요일 세미나를 제외하고 <br></br>
              &nbsp; &nbsp; &nbsp;주중 3-6학점(5시간 내외) 정도의 열정을 필요로
              합니다!
            </>
          ),
          select: false,
        },
        {
          id: 4,
          quest: "Q. 정기적인 오프라인 모임에 모두 참석해야하나요?",
          answer: (
            <>
              A. 네, 세미나 프로그램이 매주 토요일에 오후 1시부터 5시까지 진행될
              예정입니다.<br></br>
              &nbsp; &nbsp; &nbsp;방학이 시작되고 3주 동안은 롱커톤 프로그램이
              진행됩니다.
            </>
          ),
          select: false,
        },
      ],
      selected: false,
    },
  ]);

  const handleButtonClick = (id) => {
    setQuestion((prevQuestion) =>
      prevQuestion.map((p) => {
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

  const handleQuestionClick = (itemId, index) => {
    setQuestion((prevQuestions) =>
      prevQuestions.map((item) => {
        if (item.id === itemId) {
          const updatedQuestions = item.question.map((q, i) => ({
            ...q,
            select: i === index ? !q.select : false, // 클릭된 항목은 유지, 나머지는 해제
          }));
          return { ...item, question: updatedQuestions };
        }
        return item;
      })
    );
  };

  const handleClick = () => {
    window.open("https://pard.channel.io/lounge", "_blank");
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드에 대해 더 알고 싶어요</Header7>
          <QuestionDiv>
            <div>
              {question.map((item) => (
                <QuestionItem
                  key={item.id}
                  onClick={() => handleButtonClick(item.id)}
                  selected={item.selected}
                >
                  <Vector
                    src={item.selected ? selectVector : vector}
                    alt="vector"
                    style={{marginBottom: "4px"}}
                  ></Vector>
                  {item.item}
                </QuestionItem>
              ))}
              <Button onClick={handleClick}>
                <p>조금 더 물어볼래요</p></Button>
              <Body2>
                찾으시는 내용이 없으신가요?
                <br />
                익명으로 편하게 물어보세요!
              </Body2>
            </div>
            <div>
              {question.map(
                (item) =>
                  item.selected && (
                    <React.Fragment key={item.id}>
                      {item.question.map((question, index) => (
                        <React.Fragment key={index}>
                          <Question
                            onClick={() => handleQuestionClick(item.id, index)}
                            selected={question.select}
                          >
                            <p>{question.quest}</p>
                          </Question>
                          {question.select && (
                            <Answer>{question.answer}</Answer>
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  )
              )}
            </div>
          </QuestionDiv>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingAbout;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;
const PartDiv = styled.div`
  height: 700px;
  position: relative;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  margin-bottom: 100px;
`;
const QuestionDiv = styled.div`
  display: flex;
`;

const QuestionItem = styled.div`
  cursor: pointer;
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: ${(props) => (props.selected ? "#64C59A" : "#fff")};
  font-family: "NanumSquare Neo";
  margin-bottom: 45px;
  display: flex;
  align-items: center;
  margin-right: 100px;
`;

const Question = styled.div`
  width: 832px;
  height: 30px;
  padding: 13px 0px 13px 40px;
  line-height: 28px;
  font-size: 20px;
  font-weight: ${(props) => (props.selected ? "bold" : props.theme.fontWeights.Body3)};
  font-family: "NanumSquare Neo";
  background-color: ${(props) => (props.selected ? "#64c59a" : "white")};
  color: ${(props) => props.selected ? "white" : "black"};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  z-index: 3;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; /* 클릭 시 부드럽게 변경 */

  &:hover {
    background-color: #64c59a;
    font-weight: bold;
    color: white;
  }
`;

const Vector = styled.img`
  height: 25px;
  width: 18px;
  margin-right: 32px;
`;

const Answer = styled.div`
  background-color: white;
  margin-top: -25px;
  margin-bottom: 30px;
  padding: 13px 0px 4px 35px;
  height: 92px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: ${(props) => props.theme.Web_fontSizes.ButtonText1};
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  font-family: "NanumSquare Neo";
  line-height: 140%;
  z-index: -1;
  color: #1f1f1f;
  white-space: pre-wrap;
  border: 2px solid #64c59a;
`;

const Button = styled.div`
  width: 184px;
  height: 42px;
  background-color: #64c59a;
  color: white;
  margin-top: 143px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.Web_fontSizes.ButtonText1};
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  font-family: "NanumSquare Neo";
  border-radius: 10px;
  cursor: pointer;

  p {
    margin-top: 18px;
  }
`;
const Body2 = styled.div`
  margin-top: 12px;
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  font-family: "NanumSquare Neo";
  color: white;
  line-height: 140%;
`;
