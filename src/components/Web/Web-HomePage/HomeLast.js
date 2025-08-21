import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { RecruitmentStatusButtonWeb } from "../Components/RecruitmentStatusButtonWeb";
import { pardDATA } from "../../../utils/data.constant";
import { useState, useEffect, useRef } from "react";

function HomeLast() {
  const generation = pardDATA.currentGeneration;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Div ref={sectionRef}>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header2>매번 다른 파도와 함께</Header2>
          <M3Header>
            파드는 매번 새로운 파디들과 함께 아이디어를 나누고,
            <br></br> 
            협업하며 혁신적인 서비스를 만들어갑니다.
          </M3Header>
          <InfoWrap>
            {/* ✅ 애니메이션 없이 고정된 숫자 */}
            <InfoBox>
              <InfoContent>런칭 서비스</InfoContent>
              <InfoNumStatic>25개</InfoNumStatic>
            </InfoBox>
            <InfoBox>
              <InfoContent>운영 기수</InfoContent>
              <InfoNumStatic>{generation}기</InfoNumStatic>
            </InfoBox>
            <InfoBox>
              <InfoContent>누적 활동 인원</InfoContent>
              <InfoNumStatic>152명</InfoNumStatic>
            </InfoBox>
          </InfoWrap>
          <Line>
            <Shape1>"</Shape1>
            <Shape2>"</Shape2>
          </Line>
          <Header4>
            똑같은 파도는 다시 오지 않아요
            <br></br>
            좋은 파도를 고르는 것 자체도 선수들의 역량이에요
          </Header4>
          <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
          <RecruitmentStatusButtonWeb
            theme={theme}
            backgroundColor={theme.MainColor.PrimaryBlue}
          />
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default HomeLast;

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
  font-family: "NanumSquare Neo";
  font-size: 60px;
  font-weight: 800;
  line-height: 140%;
  margin-top: 20px;
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

const Div = styled.div`
  margin: 0px auto;
  justify-content: center;
`;

const PartDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 750px;
  align-items: center;
  margin: 0px auto;
  width: 1330px;
  justify-content: center;
  padding-bottom: 100px;
  margin-bottom: 208px;
`;

const Subtitle2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.subtitle3};
  text-align: center;
  color: #ffffff;
  margin-bottom: 90px;
`;

const Shape1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header3};
  font-weight: ${(props) => props.theme.fontWeights.Header3};
  font-family: "NanumSquare Neo";
  line-height: 53px;
  width: 18px;
  height: 26px;
  display: flex;
  color: #5262f5;
  margin-bottom: 11px;
  margin-right: 600px;
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

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 55px;
  margin-right: 37px;
  margin-top: 186px;
`;

const InfoWrap = styled.div`
  width: 996px;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 72px;
  gap: 30px;
`;

const InfoBox = styled.div`
  width: 312px;
  height: 280px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
`;

const InfoContent = styled.div`
  color: #F5F5F5;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  padding-top: 78px;
`;