import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { RecruitmentStatusButtonMob } from "../Components/RecruitmentStatusButtonMob";

function HomeLastMob() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>
            진짜 협업을<br></br>경험하고 싶다면
          </Header7>
          <Line>
            <Shape>"</Shape>
            <Shape1>"</Shape1>
          </Line>
          <Header6>
            똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도
            <br></br>선수들의 역량이에요
          </Header6>
          <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
          <RecruitmentStatusButtonMob
            theme={theme}
            backgroundColor={theme.MainColor.PrimaryBlue}
          />
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
  height: 900px;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header6 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  width: 300px;
  height: 84px;
  margin-bottom: 18px;
`;

const Subtitle2 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  text-align: center;
  color: #ffffff;
  margin-bottom: 96px;
  margin-top: 38px;
`;
