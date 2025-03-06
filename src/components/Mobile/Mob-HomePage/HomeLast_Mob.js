import styled, { ThemeProvider, keyframes } from "styled-components";
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
    <Div ref={sectionRef}>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>매번 다른<br />파도와 함께</Header7>
          <B3>
            파드는 매번 새로운 파디들과 함께
            <br />
            아이디어를 나누고, 협업하며
            <br />
            혁신적인 서비스를 만들어갑니다.
          </B3>
          <InfoWrap>
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
          </InfoWrap>
          <Line>
            <Shape>"</Shape>
            <Shape1>"</Shape1>
          </Line>
          <B3_2>
            똑같은 파도는 다시 오지 않아요
            <br />
            좋은 파도를 고르는 것 자체도
            <br />
            선수들의 역량이에요
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PartDiv = styled.div`
  height: 1650px;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  text-align: center;
  margin-top: 115px;
  margin-bottom: 30px;
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
  font-family: "NanumSquare Neo";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 18px */
  margin-bottom: 76px;
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

const InfoWrap = styled.div`
  /* width: 325px; */
  margin-top: 72px;
  margin-bottom: 70px;
`;

const InfoBox = styled.div`
  width: 270px;
  height: 250px;
  flex-shrink: 0;
  margin-bottom: 28px;
  border-radius: 18.205px;
  background: rgba(255, 255, 255, 0.05);
`;

const InfoContent = styled.div`
  color: #F5F5F5;
  text-align: center;
  font-family: "NanumSquare Neo";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 155%;
  padding-top: 80px;
`;

const InfoNumStatic = styled.div`
  color: #FFF;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 48px;
font-style: normal;
font-weight: 800;
line-height: 140%; /* 42px */
  margin-top: 3.5px;
`;

const RecruitmentStatusButtonWrapper = styled.div`
  margin-bottom: 380px;
`;

