import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { RecruitmentStatusButtonMob } from "../Components/RecruitmentStatusButtonMob";
import { pardDATA } from "../../../utils/data.constant";
import { useState, useEffect, useRef } from "react";

function HomeLastMob() {
    const generation = pardDATA.currentGeneration;
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 } // 50% 이상 보이면 실행
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
        <Header7>매번 다른 파도와 함께</Header7>
          <B3>
            파드는 매번 새로운 파디들과 함께
            <br/>아이디어를 나누고, 
            협업하며 <br/>혁신적인 서비스를 만들어갑니다.
          </B3>
          <InfoWrap>
          <ScrollContainer>
            {/* ✅ 애니메이션 없이 고정된 숫자 */}
            <InfoBox>
              <InfoContent>런칭 서비스</InfoContent>
              <InfoNumStatic>20개</InfoNumStatic>
            </InfoBox>
            <InfoBox>
              <InfoContent>운영 기수</InfoContent>
              <InfoNumStatic>{generation}기</InfoNumStatic>
            </InfoBox>
            {/* ✅ 애니메이션 적용 (누적 활동 인원 - 숫자만) */}
            <InfoBox>
              <InfoContent>누적 활동 인원</InfoContent>
              <InfoNumStatic>134명</InfoNumStatic>
            </InfoBox>
            </ScrollContainer>
          </InfoWrap>
          <Line>
            <Shape>"</Shape>
            <Shape1>"</Shape1>
          </Line>
          <B3_2>
            똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도
            <br></br>선수들의 역량이에요
          </B3_2>
          <Caption2>송민 KBS 서핑 해설위원</Caption2>
          <RecruitmentStatusButtonWrapper>
  <RecruitmentStatusButtonMob
    theme={theme}
    backgroundColor={theme.MainColor.PrimaryBlue}
  />
</RecruitmentStatusButtonWrapper>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default HomeLastMob;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  text-align: center;
  margin-top: 57px;
  margin-bottom: 58px;
  white-space: pre-line;
  line-height: 140%;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
`;

const Shape = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header4};
  font-weight: ${(props) => props.theme.fontWeights.Header3};
  font-family: "NanumSquare Neo";
  width: 13px;
  height: 15px;
  display: flex;
  color: #5262f5;
  margin-bottom: 11px;
  margin-right: 290px;
`;

const Shape1 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header4};
  font-weight: ${(props) => props.theme.fontWeights.Header3};
  font-family: "NanumSquare Neo";
  width: 13px;
  height: 15px;
  display: flex;
  color: #5262f5;
  margin-bottom: 11px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const B3_2 = styled.div`
  color: var(--Text-White, #FFF);
text-align: center;
font-family: "NanumSquare Neo";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 28px */
  width: 266px;
  height: 84px;
  margin-bottom: 18px;
`;

const Caption2 = styled.div`
color: #FFF;
text-align: center;

/* Caption/C2 - R 10 */
font-family: "NanumSquare Neo";
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 180%; /* 18px */
  margin-bottom: 76px;
`;

// ✅ 숫자 애니메이션 적용 (누적 활동 인원)
const InfoNumAnimated = ({ targetNumber, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= targetNumber) {
        clearInterval(interval);
      }
    }, 20); // 20ms마다 증가

    return () => clearInterval(interval);
  }, [isVisible, targetNumber]);

  return <span>{count}</span>;
};

// ✅ 정적인 숫자 컴포넌트 (운영 기수 & 런칭 서비스)
const InfoNumStatic = styled.div`
  color: #FFF;
text-align: center;

/* Header/H8 - EB 30 */
font-family: "NanumSquare Neo";
font-size: 30px;
font-style: normal;
font-weight: 800;
line-height: 140%; /* 42px */
margin-top: 3.5px;
`;

// ✅ 스타일링
const InfoNumContainer = styled.div`
  color: #FFF;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 60px;
  font-weight: 800;
  line-height: 140%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 5px;

  span {
    font-size: 60px;
    font-weight: 800;
  }
`;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 36px;
  margin-top: 100px;
  white-space: pre-line;
  display: flex;
`;

const Header4 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header4};
  font-weight: ${(props) => props.theme.fontWeights.Header4};
  color: #ffffff;
  text-align: center;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  margin-bottom: 18px;
  line-height: 140%;
`;

const M3Header = styled.div`
  color: #FFF;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
`;


const Shape2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header3};
  font-weight: ${(props) => props.theme.fontWeights.Header3};
  font-family: "NanumSquare Neo";
  width: 18px;
  height: 26px;
  line-height: 53px;
  display: flex;
  color: #5262f5;
  margin-bottom: 11px;
`;

const InfoWrap = styled.div`
  width: 375px; /* PartDiv의 너비에 맞춤 */
  margin-top: 72px;
  margin-left: 24px;
  margin-bottom: 96px;
`;

const InfoBox = styled.div`
  width: 156px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
`;

const InfoContent = styled.div`
  color: #F5F5F5;
  text-align: center;
  font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%;
  padding-top: 39px;
`;

const B3 = styled.div`
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

const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto; /* 내용이 넘치면 가로 스크롤 */
  display: flex;
  flex-direction: row;
  gap: 15px; /* InfoBox 사이 간격 15px */
`;

const RecruitmentStatusButtonWrapper = styled.div`
  margin-bottom: 95px;
`;