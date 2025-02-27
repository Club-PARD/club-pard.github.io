import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { useLocation } from "react-router-dom";
import { getProjectWebData } from "../../../utils/api";
import { useSetRecoilState } from 'recoil';
import { projectIdState } from '../../../atom';
import pard_logo from "../../../assets/img/White_logo_pard.png";
import design_mark from "../../../assets/img/design_mark.png";
import linklogo from "../../../assets/img/linklogo.png";
import gitlogo from "../../../assets/img/gitlogo.png";
import figmalogo from "../../../assets/img/figmalogo.png";
import firstbadge from "../../../assets/img/1st_mark.png";
import secondbadge from "../../../assets/img/2nd_mark.png";
import thirdbadge from "../../../assets/img/3rd_mark.png";

import Modal1 from "./WebModal";
import Modal2 from "./AppModal";
import Modal3 from "./IpadModal";

function ProjectDetail() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null); // id를 state로 관리
  const location = useLocation();
  const setProjectId = useSetRecoilState(projectIdState);

  // URL에서 id 추출 및 atom에 저장
  useEffect(() => {
    const currentURL = location.pathname;
    const extractedId = currentURL.split('/').pop();  // ID 추출
    setId(extractedId);  // id 업데이트
    setProjectId(extractedId);  // atom에 id 저장
  }, [location.pathname, setProjectId]);

  // id가 존재할 때 API 호출
  useEffect(() => {
    if (id) {
      const getProjectData = async () => {
        try {
          const response = await getProjectWebData(id);
          console.log("API 응답 데이터:", response);
          setData(response);
        } catch (error) {
          console.error("Error fetching project data:", error);
        }
      };
  
      getProjectData();
    }
  }, [id]);  // id가 변경될 때마다 API 호출

  if (!data) {
    return <LoadingText>Loading...</LoadingText>;
  }

  const logoImage = data.images?.[0]?.url || null;
  const p_id = data.id || "데이터 없음";
  const oneSentence = data.contents?.oneSentence?.[0]?.content || "데이터 없음";
  const descriptionArray = data.contents?.description?.slice(0, ) || [];
  const description = descriptionArray.map(item => item.content).join("\n") || "데이터 없음";
  const generation = data.generation || "데이터 없음";
  const platform = data.platform || "데이터 없음";
  const awardgrade = data.awardGrade || "데이터 없음";  
  const award = data.award || "데이터 없음";
  const overviewArray = data.contents?.overview?.slice(0, ) || [];
  const overview = overviewArray.map(item => item.content).join("\n") || "데이터 없음";
  const definationArray = data.contents?.definition?.slice(0, ) || [];
  const defination = definationArray.map(item => item.content).join("\n") || "데이터 없음";
  const sol1Array = data.solutions?.solution1 || [];
  const sol2Array = data.solutions?.solution2 || [];
  const sol3Array = data.solutions?.solution3 || [];
  const teamname = data.teamName || "데이터 없음";

  const getMembersList = (teamIndex, n) => {
    // members[1]과 members[2] 가져오기
    const firstSet = data.team?.[teamIndex]?.members?.[1] || [];
    const secondSet = data.team?.[teamIndex]?.members?.[2] || [];
  
    return (
      <>
        {Array.isArray(firstSet) &&
          firstSet.slice(0, n).map((item, index) => (
            <EtcContent key={`${teamIndex}-first-${index}`}>{item}</EtcContent>
          ))}
        <br /> {/* 줄바꿈 추가 */}
        {Array.isArray(secondSet) &&
          secondSet.slice(0, n).map((item, index) => (
            <EtcContent key={`${teamIndex}-second-${index}`}>{item}</EtcContent>
          ))}
      </>
    );
  };
  
  const getTechStacksList = (teamIndex, n) => {
    const firstSet = data.team?.[teamIndex]?.techStacks?.[1] || [];
    const secondSet = data.team?.[teamIndex]?.techStacks?.[2] || [];
  
    return (
      <>
        {Array.isArray(firstSet) &&
          firstSet.slice(0, n).map((item, index) => (
            <EtcContent key={`${teamIndex}-first-${index}`}>{item}</EtcContent>
          ))}
        <br /> {/* 줄바꿈 추가 */}
        {Array.isArray(secondSet) &&
          secondSet.slice(0, n).map((item, index) => (
            <EtcContent key={`${teamIndex}-second-${index}`}>{item}</EtcContent>
          ))}
      </>
    );
  };
  
  // 개발자, 디자이너, PM 리스트 생성
  const DeveloperList = getMembersList(0, 4);
  const DesignerList = getMembersList(1, 3);
  const PMList = getMembersList(2, 3);  
  console.log(DeveloperList);
  
  // 개발자, 디자이너, PM 도구 리스트 생성
  const DeveloperToolList = getTechStacksList(0, 4);
  const DesignerToolList = getTechStacksList(1, 3);
  const PMToolList = getTechStacksList(2, 3);

  const figmaurl = data.links?.[0]?.url || [];
  const githuburl = data.links?.[1]?.url || [];
  const serviceurl = data.links?.[2]?.url || [];

  const formatSolution = (solutionArray) => {
    if (solutionArray.length === 0) return "데이터 없음";  // 데이터 없을 경우
    if (solutionArray.length === 1) return solutionArray[0].content; // 1개일 경우
    return solutionArray.map(item => item.content).join("\n"); // 2개 이상일 경우
  };

  const sol1 = formatSolution(sol1Array);
  const sol2 = formatSolution(sol2Array);
  const sol3 = formatSolution(sol3Array);

  console.log(platform);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <IntroContainer isApp={platform === "APP"}>
          <IntroWrapper>
        {/*Logo image*/}
        <img src={logoImage} alt="logo" style={{'height': '100px'}} />
        {/*한 줄 소개*/}
          <OneSentence>{oneSentence}</OneSentence>
        {/*인트로*/}
          <Description>{description}</Description>
        {/*기수, 파트 여기서 파트에 따라 모달 위치 달라짐*/}
          <HashContainer>
            <Hash><p>{generation}</p></Hash>
            <Hash><p>{platform}</p></Hash>
          </HashContainer>
        </IntroWrapper>
        {/* APP일 경우만 모달 컨테이너 표시 */}
        {(platform === "APP" || p_id === 4) && p_id !== 15 && (
  <ModalContainer>
    <Modal2 />
  </ModalContainer>
)}
</IntroContainer>
{/*모달*/}
{p_id === 15 ? (
  <Modal3 />
) : platform === "WEB" && p_id !== 4 ? (
  <Modal1 />
) : null}
        {/*가운데 정렬 하는 박스 만들기*/}
        {/*몇기 롱커톤인지*/}
        <AwardContainer>
          {
          awardgrade === 1 ? <img src={firstbadge} alt="대상" style={{'width': '53px', 'height': '62.137px'}}/> :
          awardgrade === 2 ? <img src={secondbadge} alt="최우수상" style={{'width': '53px', 'height': '62.137px'}}/> :
          awardgrade === 3 ? <img src={thirdbadge} alt="우수상" style={{'width': '53px', 'height': '62.137px'}}/> :
          null
          }
          <Award>{award}</Award>
        </AwardContainer>
        {/*밑줄*/}
        <Line />
        {/*service overview*/}
        <DetailExplainContainer>
          <ExplainContainer>
            <ExplainTitleBox>
            <img src={pard_logo} alt="pard logo" style={{ width: "49px", height: "18px" }} />
            <p>SERVICE OVERVIEW</p>
            </ExplainTitleBox>
            <ExplainContent>{overview}</ExplainContent>
          </ExplainContainer>
        {/*problem defination*/}
          <ExplainContainer>
            <ExplainTitleBox>
            <img src={pard_logo} alt="pard logo" style={{ width: "49px", height: "18px" }} />
            <p>PROBLEM DEFINATION</p>
            </ExplainTitleBox>
            <ExplainContent>{defination}</ExplainContent>
          </ExplainContainer>
        {/*solution 3column*/}
          <ExplainContainer>
          <img src={design_mark} alt="design mark" style={{ width: "178px", height: "33px", marginBottom: "50px"}} />
            <ExplainTitleBox>
            <img src={pard_logo} alt="pard logo" style={{ width: "49px", height: "18px" }} />
            <p>SOLUTION</p>
            </ExplainTitleBox>
            <SolutionBoxContainer>
              <SolutionBox>
                <SolutionTitle><p>SOLUTION 1</p></SolutionTitle>
                {sol1}
              </SolutionBox>
              <SolutionBox>
                <SolutionTitle><p>SOLUTION 2</p></SolutionTitle>
                {sol2}
              </SolutionBox>
              <SolutionBox>
                <SolutionTitle><p>SOLUTION 3</p></SolutionTitle>
                {sol3}
              </SolutionBox>
            </SolutionBoxContainer>
          </ExplainContainer>
        </DetailExplainContainer>
        {/*3칼럼 팀 이름 및 멤버/ 기술스택/ 공유링크*/}
        <AllEtcContainer>
          <EtcContainer>
            <EtcTitle>{teamname} TEAM</EtcTitle>
            <EtcContainerBox>
              <EtcNameContainer>
                <EtcName>기획</EtcName>
                <EtcContentContainer>{PMList}</EtcContentContainer>
              </EtcNameContainer>
              <EtcNameContainer>
                <EtcName>디자인</EtcName>
                <EtcContentContainer>{DesignerList}</EtcContentContainer>
              </EtcNameContainer>
              <EtcNameContainer>
                <EtcName>개발</EtcName>
                <EtcContentContainer>{DeveloperList}</EtcContentContainer>
              </EtcNameContainer>
            </EtcContainerBox>
          </EtcContainer>
          <EtcContainer>
            <EtcTitle>Tech Stack</EtcTitle>
            <EtcContainerBox>
  <EtcNameContainer2 id={p_id}>
    <EtcName>기획</EtcName>
    <EtcContentContainer>{PMToolList}</EtcContentContainer>
  </EtcNameContainer2>
  <EtcNameContainer2 id={p_id}>
    <EtcName>디자인</EtcName>
    <EtcContentContainer>{DesignerToolList}</EtcContentContainer>
  </EtcNameContainer2>
  <EtcNameContainer2 id={p_id}>
    <EtcName>개발</EtcName>
    <EtcContentContainer>{DeveloperToolList}</EtcContentContainer>
  </EtcNameContainer2>
</EtcContainerBox>
          </EtcContainer>
          <EtcContainer>
  <EtcTitle>Open Link</EtcTitle>
  <EtcContainerBox2>
    {data.links?.map((link, index) => {
      const { linkType, url } = link;

      // linkType에 따라 표시할 로고를 결정
      let logo;
      if (linkType === "FIGMA") {
        logo = figmalogo;
      } else if (linkType === "GITHUB_BACK" || linkType === "GITHUB_FRONT") {
        logo = gitlogo;
      } else if (linkType === "SERVICE") {
        logo = linklogo;
      }

      // linkType에 맞는 로고를 표시하는 부분
      return (
        logo && (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <LogoBtn>
              <img src={logo} alt={`${linkType} Logo`} width="52" height="52" />
            </LogoBtn>
          </a>
        )
      );
    })}
  </EtcContainerBox2>
</EtcContainer>
        </AllEtcContainer>
      </Container>
    </ThemeProvider>
  );
}

export default ProjectDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: #1A1A1A;
  margin-top: 200px; //배너 내리고 162px로 수정
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: gray;
`;

const OneSentence = styled.p`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%; /* 39.2px */
`;

const Description = styled.p`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  opacity: 0.8;
  word-break: break-word;
  white-space: pre-line;
  margin-top: -10px;
  margin-bottom: 30px;
`;

const HashContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Hash = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 7.757px;
  padding-bottom: 7.757px;
  justify-content: center;
  align-items: center;
  gap: 7.757px;
  border-radius: 1551.402px;
  border: 0.776px solid #FFF;
  background: rgba(255, 255, 255, 0.32);

  p {
    color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-top: 22px;
  }
`;

const AwardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 138px;
  gap: 11px;
`;

const Award = styled.p`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
`;

const Line = styled.div`
  width: 1216px;
  height: 1px;
  background: #fff;
`;

const DetailExplainContainer = styled.div`
  display: flex;
  width: 1108px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 84px;
`;

const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 68px;
  margin-bottom: 43px;
`;

const ExplainTitleBox = styled.div`
  align-self: stretch;
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 140%;
  p {
    margin-top: 11px;
  }
`;

const ExplainContent = styled.p`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  opacity: 0.8;
  word-break: break-word;
  white-space: pre-line;
  margin-top: 2px;
`;

const SolutionBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  align-self: stretch;
`;

const SolutionBox = styled.div`
  width: 320px;
  height: 154px;
  flex-shrink: 0; 
  border-radius: 8.707px;
  background: #FFF;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  padding-top: 31px;
  gap: 30px;
  
  color: #000;
  font-family: "NanumSquare Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  word-break: break-word;
  white-space: pre-line;
`;

const SolutionTitle = styled.div`
  width: 90px;
  height: 16px;
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 13px;
  background: #7B3FEF;

  p {
    color: #FFF;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 14.545px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 16px;
  }
  
  align-self: center;
`;

const AllEtcContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2A2A2A;
  justify-content: center;
  width: 100%;
  height: 353px;
  padding-bottom: 61px;
  padding-left: 70px;
  gap: 150px;
`;

const EtcContainer = styled.div`
  display: flex;
  width: 296px;
  height: 195px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 9px;
  margin-top: -55px;
`;

const EtcTitle = styled.p`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
  opacity: 0.4;
`;

const EtcContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  width: 500px;
`;

const EtcContainerBox2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-self: stretch;
  gap: 15px;
  flex-wrap: wrap;
`;

const EtcNameContainer = styled.div`
  display: flex;
  width: 310px;
  align-items: center;
  gap: 33px;
  margin-bottom: 20px;
`;

const EtcNameContainer2 = styled.div`
  display: flex;
  width: ${props => props.id === 6 || props.id === 12 ? '365px' : '310px'};
  align-items: center;
  gap: 33px;
  margin-bottom: 20px;
`;

const EtcName = styled.div`
  width: 72px;
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 160%;
  opacity: 0.6;
`;

const EtcContentContainer = styled.div`
display: flex;
align-items: center;
gap: 10px; /* Decrease gap between items */
flex-wrap: wrap;
width: 400px;
height: 36px;
line-height: 160%;
`;

const EtcContent = styled.p`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 10%; /* 여기에 적절한 라인 높이를 설정 */
  white-space: pre-line; /* 줄바꿈을 적용하려면 이 속성을 유지 */
`;

const LogoBtn = styled.button`
  width: 52px;
  height: 52px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 1110px;

  ${({ isApp }) => isApp && `
    flex-direction: row;
    align-items: flex-start;
  `}
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
`;

const IntroWrapper = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 126px;
`;