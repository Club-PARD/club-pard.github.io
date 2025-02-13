import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { useState, useRef, useEffect } from "react";
import ProgramSeminar from "./ProgramSeminar";
import ProgramStudy from "./ProgramStudy";
import ProgramSurfing from "./ProgramSurfing";
import ProgramShort from "./ProgramShort";
import ProgramLong from "./ProgramLong";

const programComponents = {
  1: <ProgramSeminar />, 
  2: <ProgramStudy />, 
  3: <ProgramSurfing />, 
  4: <ProgramShort />, 
  5: <ProgramLong />,
};

const buttonColors = {
  1: "#64C59A",
  2: "#5262F5",
  3: "#FF5C00",
  4: "#7B3FEF",
  5: "#7B3FEF",
};

function ProgramsTrain() {
  const [selectedProgram, setSelectedProgram] = useState(1);
  const scrollRef = useRef(null);

  useEffect(() => {
    // selectedProgram이 변경될 때 스크롤 위치를 초기화
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [selectedProgram]);

  return (
    <Div>
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Header7>PROGRAMS</Header7>
        <ButtonContainer>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedProgram(num)}
              className={selectedProgram === num ? "active" : ""}
              style={{
                backgroundColor:
                  selectedProgram === num ? buttonColors[num] : "#1A1A1A",
              }}
            >
              {num === 1
                ? "세미나"
                : num === 2
                ? "스터디"
                : num === 3
                ? "서핑데이"
                : num === 4
                ? "숏커톤"
                : "롱커톤"}
            </button>
          ))}
        </ButtonContainer>
        <Container>
          <ScrollContainer ref={scrollRef}>
            <ContentDiv>{programComponents[selectedProgram]}</ContentDiv>
          </ScrollContainer>
        </Container>
      </ThemeProvider>
    </Wrapper>
    </Div>
  );
}

export default ProgramsTrain;

const Div = styled.div`
  width: 100%;
  height: 500px;
`;
const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
`;
const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
  margin-top: 20px;
  margin-left: 22px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 30px;
  margin-left: 22px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 22px;
  /* justify-content: center; */
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;

  button {
    width: 79.5px;
    height: 30px;
    padding: 5.818px;
    background-color: #1A1A1A;
    color: white;
    font-family: "NanumSquare Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    cursor: pointer;
    border-radius: 1163.551px;
    border: 1px solid #FFF;
  }

  button.active {
    border: none;
  }
`;

const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
