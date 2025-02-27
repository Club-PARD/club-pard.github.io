import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProjectMobData } from "../../../utils/api";
import { useSetRecoilState } from 'recoil';
import { projectIdState } from '../../../atom';
import firstbadge from "../../../assets/img/1st_mark.png";
import secondbadge from "../../../assets/img/2nd_mark.png";
import thirdbadge from "../../../assets/img/3rd_mark.png";

import Modal1 from "./WebModal";
import Modal2 from "./AppModal";
import Modal3 from "./IpadModal";

function ProjectDetail_Mob() {
  // const navigate = useNavigate();

  // const [detailProjects, setDetailProjects] = useState([]);

  // const location = useLocation();
  // const currentURL = location.pathname;
  // const id = currentURL.split("/").pop();

  // const fetchProjects = async () => {
  //   const docRef = doc(dbService, "Project", id);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setDetailProjects(docSnap.data());
  //   } else {
  //     navigate("*");
  //   }
  // };

  // useEffect(() => {
  //   console.log("id :", id);
  //   fetchProjects();
  // }, []);
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

  useEffect(() => {
    if (id) {
      const getProjectData = async () => {
        try {
          const response = await getProjectMobData(id);
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

  const logoImage = data.images?.find(img => img.type === "LOGO")?.url || null;
  const p_id = data.id || "데이터 없음";
  const oneSentenceArray = data.contents?.oneSentence?.slice(0, ) || [];
  const oneSentence = oneSentenceArray.map(item => item.content).join("\n") || "데이터 없음";
  const descriptionArray = data.contents?.description?.slice(0, ) || [];
  const description = descriptionArray.map(item => item.content).join("\n") || "데이터 없음";
  const generation = data.generation || "데이터 없음";
  const platform = data.platform || "데이터 없음";
  const awardgrade = data.awardGrade || "데이터 없음";  
  const award = data.award || "데이터 없음";
  const overviewArray = data.contents?.overview?.slice(0, ) || [];
  const overview = overviewArray.map(item => item.content).join("\n") || "데이터 없음";
  const definitionArray = data.contents?.definition?.slice(0, ) || [];
  const definition = definitionArray.map(item => item.content).join("\n") || "데이터 없음";
  const sol1Array = data.solutions?.solution1?.slice(0, ) || [];
  const sol2Array = data.solutions?.solution2?.slice(0, ) || [];
  const sol3Array = data.solutions?.solution3?.slice(0, ) || [];
  const teamname = data.teamName || "데이터 없음";



  const getMembersList = (teamIndex, n) => {
    // members[1]과 members[2] 가져오기
    const firstSet = data.team?.[teamIndex]?.members?.[1] || [];
    const secondSet = data.team?.[teamIndex]?.members?.[2] || [];
  
    return (
      <>
        {Array.isArray(firstSet) &&
          firstSet.slice(0, n).map((item, index) => (
            <Subtitle1 key={`${teamIndex}-first-${index}`}>{item}</Subtitle1>
          ))}
        {/* <br /> 줄바꿈 추가 */}
        {Array.isArray(secondSet) &&
          secondSet.slice(0, n).map((item, index) => (
            <Subtitle1 key={`${teamIndex}-second-${index}`}>{item}</Subtitle1>
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
            <Subtitle1 key={`${teamIndex}-first-${index}`}>{item}</Subtitle1>
          ))}
        <br /> {/* 줄바꿈 추가 */}
        {Array.isArray(secondSet) &&
          secondSet.slice(0, n).map((item, index) => (
            <Subtitle1 key={`${teamIndex}-second-${index}`}>{item}</Subtitle1>
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
    return solutionArray.map(item => item.content).join("\n") || "데이터 없음";// 2개 이상일 경우
  };

  const sol1 = formatSolution(sol1Array);
  const sol2 = formatSolution(sol2Array);
  const sol3 = formatSolution(sol3Array);

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <MainDiv>
            <InfoDiv>
          <img src={logoImage}
              alt="Logo" style={{ alignSelf: "flex-start", 'height': '60px'}} />
              <Header6 marginTop={"22px"} marginBottom={"12px"} >{oneSentence}</Header6>
                <ContentsText>
                    <Subtitle2>{description}</Subtitle2>
                </ContentsText>
            <InfoBoxDiv marginTop={"12px"} >
            <InfoBox>{generation}</InfoBox>
            <InfoBox>{platform}</InfoBox>
            </InfoBoxDiv>

            </InfoDiv>
            {/*모달*/}
        {platform === "WEB" ? (
          <Modal1 />
          ) :(platform === "APP" || p_id === 4) ? (
          p_id === 15 ? <Modal3 /> : <Modal2 />
          ) : null}
            <AwardContainer marginTop={"30px"} >{
          awardgrade === 1 ? <img src={firstbadge} alt="대상" style={{'width': '31px', 'height': '36.344px'}}/> :
          awardgrade === 2 ? <img src={secondbadge} alt="최우수상" style={{'width': '31px', 'height': '36.344px'}}/> :
          awardgrade === 3 ? <img src={thirdbadge} alt="우수상" style={{'width': '31px', 'height': '36.344px'}}/> :
          null
          }<Body2 >{award}</Body2></AwardContainer>
            <HR />
            <SymbolImg
              src={require("../../../assets/img/symbol.png")}
              alt="symbolImg" marginTop="60px"
              />
            <TitleText marginTop={"11px"}marginBottom = {"16px"}>
              <Subtitle1>SERVICE OVERVIEW</Subtitle1>
            </TitleText>
                <ContentsText>
                    <Subtitle2>{overview}</Subtitle2>
                </ContentsText>
            <SymbolImg
              src={require("../../../assets/img/symbol.png")}
              alt="symbolImg" marginTop="60px"
              />
            <TitleText marginTop={"11px"}marginBottom = {"16px"}>
              <Subtitle1>PROBLEM DEFINATION</Subtitle1>
            </TitleText>
                <ContentsText>
                    <Subtitle2>{definition}</Subtitle2>
                </ContentsText>
            <ImgDiv>
              {Array.from({ length: 4 }).map((_, index) => (
                <ArrowImg
                  key={index}
                  src={require("../../../assets/img/ProjectPageimg/RightArrow.png")}
                  alt="arrowImg"
                />
              ))}
            </ImgDiv>
            <SymbolImg
              src={require("../../../assets/img/symbol.png")}
              alt="symbolImg" marginTop="60px"
              />
            <TitleText marginTop={"11px"} marginBottom = {"18px"} >
              <Subtitle1>SOLUTION</Subtitle1>
            </TitleText>
            <SolutionBoxContainer>
  {/* sol1이 유효한 값일 경우만 렌더링 */}
  {sol1 && sol1 !== "데이터 없음" && (
    <SolutionBox>
      <SolutionNumber>SOLUTION 1</SolutionNumber>
      <SolutionContentDiv>
        <SolutionContent>{sol1}</SolutionContent>
      </SolutionContentDiv>
    </SolutionBox>
  )}

  {/* sol2가 유효한 값일 경우만 렌더링 */}
  {sol2 && sol2 !== "데이터 없음" && (
    <SolutionBox>
      <SolutionNumber>SOLUTION 2</SolutionNumber>
      <SolutionContentDiv>
        <SolutionContent>{sol2}</SolutionContent>
      </SolutionContentDiv>
    </SolutionBox>
  )}

  {/* sol3가 유효한 값일 경우만 렌더링 */}
  {sol3 && sol3 !== "데이터 없음" && (
    <SolutionBox>
      <SolutionNumber>SOLUTION 3</SolutionNumber>
      <SolutionContentDiv>
        <SolutionContent>{sol3}</SolutionContent>
      </SolutionContentDiv>
    </SolutionBox>
  )}
</SolutionBoxContainer>

<AllEtcContainer>
          <EtcContainer>
            <EtcTitle>{teamname} Team</EtcTitle>
            <EtcContainerBox>
              <EtcNameContainer>
                <EtcName>기획</EtcName>
                <EtcContentContainer>{PMList}</EtcContentContainer>
              </EtcNameContainer>
              <EtcNameContainer>
                <EtcName>디자인</EtcName>
                <EtcContentContainerDesign>{DesignerList}</EtcContentContainerDesign>
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
    <EtcContentContainerDesign>{DesignerToolList}</EtcContentContainerDesign>
  </EtcNameContainer2>
  <EtcNameContainer2 id={p_id}>
    <EtcName>개발</EtcName>
    <EtcContentContainer>{DeveloperToolList}</EtcContentContainer>
  </EtcNameContainer2>
</EtcContainerBox>
          </EtcContainer>
          {/* <EtcContainer>
            <EtcTitle>Open Link</EtcTitle> */}
<EtcContainer>
<EtcTitle>Open Link</EtcTitle>
<ToolListDiv>
  {data.links && (
    <>
      {data.links.map((link, index) => {
        let iconSrc;
        let altText;

        // linkType에 따라 아이콘과 설명 설정
        switch (link.linkType) {
          case "FIGMA":
            iconSrc = require("../../../assets/img/ProjectPageimg/FigmaImg.png");
            altText = "figma";
            break;
          case "GITHUB_BACK":
          case "GITHUB_FRONT":
          case "GITHUB_TOTAL":
            iconSrc = require("../../../assets/img/ProjectPageimg/GitHubImg.png");
            altText = "github";
            break;
          case "SERVICE":
            iconSrc = require("../../../assets/img/ProjectPageimg/URLImg.png"); // 서비스 링크 아이콘
            altText = "service";
            break;
          default:
            iconSrc = require("../../../assets/img/ProjectPageimg/URLImg.png"); // 기본 URL 아이콘
            altText = "url";
            break;
        }

        return (
          <IconBackground key={index} href={link.url} target="_blank">
            <Icon src={iconSrc} alt={altText} width={"38px"} height={"38px"} />
          </IconBackground>
        );
      })}
    </>
  )}
</ToolListDiv>
</EtcContainer>
</AllEtcContainer>
          </MainDiv>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectDetail_Mob;

const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
  opacity: ${(props) => props.opacity};
  width: 59px;
`;

const Subtitle1 = styled.div`

  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle1};
  /* font-style: normal; */
  color: ${(props) => props.color || "white"};
  line-height: 26px;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
  margin-left: ${(props) => props.marginleft};
  margin-bottom: ${(props) => props.marginBottom};
  opacity: ${(props) => props.opacity};
  width: ${(props) => props.width};
  gap: ${(props) => props.gap};
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginleft};
`;

const Header6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  word-break: keep-all;
  line-height: 150%;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginleft};
  margin-bottom: ${(props) => props.marginBottom};
`;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginleft};
`;


const Subtitle2 = styled.div`

  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  word-break: keep-all;
  line-height: 140%;
  opacity: ${(props) => props.opacity};
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
`;

const PartDiv = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 175px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const MainBackImg = styled.img`
  width: 100%;
  height: 329px;
  border: none;
  /* object-fit: cover; */
`;

const MainDiv = styled.div`
  width: 303px;
  /* height: 1500px; */
  /* background-color: green; */
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoDiv = styled.div`
  display: flex;
width: 303px;
flex-direction: column;
align-items: flex-start;
margin-top: 40px;
margin-bottom: 90px;
`;

const InfoBoxDiv = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-top: ${(props) => props.marginTop};
`;


const InfoBox = styled.div`
  display: flex;
height: 28px;
padding: 0 10px;
justify-content: center;
align-items: center;
gap: 5px;
border-radius: 1082.151px;
border: 0.541px solid #FFF;
background: rgba(255, 255, 255, 0.32);
color: var(--Text-White, #FFF);
font-family: "NanumSquare Neo";
font-size: 13.951px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 20.926px */
`;

const HR = styled.hr`
  width: 303px;
  height: 1px;
  background-color: #fff;
  margin-top: 22px;
  border: none;
`;

const TeamInfoDiv = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%; /* Ensures it spans the full viewport width */
  align-items: center;
  background: #2A2A2A;
  padding: 20px 0; /* Optional padding for spacing */
  margin-left: -50vw;
  left: 50%;
  position: relative;
`;

const TitleText = styled.div`
  display: flex;
  width: ${(props) => props.width || "303px"};
  justify-content: start;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

const Teamcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
`;

const PartText = styled.div`
  display: flex;
  width: 312px;
  margin-top: ${(props) => props.marginTop};
  /* background-color: yellow; */
  /* height: 28px; */
  align-items: center;
  /* justify-content: start; */
  /* margin-left: 7px; */
  gap: ${(props) => props.gap};
`;

const PartTool = styled.div`
  display: inline-flex;
  padding: 7px 15px;
  justify-content: center;
  /* align-items: center; */
  border-radius: 15px;
  background-color: ${(props) => props.color || "#5262F5"};
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: white;
  margin: 5px 15px 5px 0px;
`;

const SolutionBox = styled.div`
  width: 303px;
height: 174px;
flex-shrink: 0;
border-radius: 8.707px;
background: var(--Text-White, #FFF);
position: relative; /* 내부 요소 위치 조정을 위한 기준 */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SolutionNumber = styled.div`
display: flex;
width: 103px;
padding: 5px 10px;
justify-content: center;
align-items: center;
gap: 10px;
position: absolute;
  top: 31px; /* SolutionBox 상단에서 31px 아래 */
  left: 50%;
  transform: translateX(-50%); /* 가로 중앙 정렬 */
border-radius: 13px;
background: var(--Primary-Purple, #7B3FEF);
color: var(--Text-White, #FFF);
text-align: center;
font-family: "NanumSquare Neo";
font-size: 14.545px;
font-style: normal;
font-weight: 800;
line-height: normal;
`;

const SolutionContentDiv = styled.div`
position: absolute;
  top: 87px; /* SolutionBox 상단에서 87px 아래 */
  width: 100%;
  text-align: center;
`;

const SolutionContent = styled.div`
color: var(--Text-Black, #000);
text-align: center;
white-space: pre-line;
font-family: "NanumSquare Neo";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 22.4px */
`;

const ImgDiv = styled.div`
  height: 33px;
  width: 303px;
  display: flex;
  text-align: start;
  justify-content: start;
  margin-left: 1px;
  margin-top: 100px;
`;

const ArrowImg = styled.img`
  width: 22px;
  height: 33px;
  flex-shrink: 0;
  margin-right: 30px;
`;

const SectionDiv = styled.div`
  display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
align-self: stretch;
`;

const SymbolImg = styled.img`
  width: 49px;
  height: 18px;
  margin-top: ${(props) => props.marginTop};
  align-self: flex-start;
`;

const ContentsText = styled.div`
  width: 303px;
`;

const ToolListDiv = styled.div`
  /* margin-top: 100px; */
  width: 303px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const IconBackground = styled.a`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  text-decoration: none;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: gray;
`;

const AwardContainer = styled.div`
  display: flex;  /* 가로 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: center; /* 왼쪽 정렬 (필요시 center / space-between 변경 가능) */
  gap: 8px; /* 아이콘과 텍스트 사이 간격 */
  width: 100%; /* 부모 요소 크기에 맞춤 */
  margin-top: ${(props) => props.marginTop || "0px"};
`;

const SolutionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px; /* SolutionBox 간의 간격 24px */
  align-items: center; /* 가운데 정렬 */
  width: 100%;
  margin-bottom: 100px;
`;




const AllEtcContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2A2A2A;
  justify-content: center;
  width: 100vw; /* 뷰포트 전체 너비 */
  min-width: 100%; /* 최소 너비 보장 */
  padding-bottom: 46.52px;
  padding-top: 46.52px;
  padding-left: 0; /* 왼쪽 패딩 제거 */
  padding-right: 0; /* 오른쪽 패딩 제거 */
  margin-left: 0; /* 마진 리셋 */
  margin-right: 0; /* 마진 리셋 */
  gap: 150px;
`;

const EtcContainer = styled.div`
  display: flex;
  width: 296px;
  height: 195px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 9px;
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
  align-items: flex-start;
  gap: 33px;
  margin-bottom: 20px;
`;

const EtcNameContainer2 = styled.div`
  display: flex;
  width: ${props => props.id === 6 || props.id === 12 ? '365px' : '310px'};
  align-items: flex-start;
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
  white-space: nowrap;
`;

const EtcContentContainer = styled.div`
display: flex;
align-items: center;
gap: 20px; /* Decrease gap between items */
flex-wrap: wrap;
width: 400px;
height: auto;
line-height: 160%;
`;

const EtcContentContainerDesign = styled.div`
display: flex;
align-items: center;
gap: 20px; /* Decrease gap between items */
flex-wrap: wrap;
width: 400px;
height: auto;
line-height: 160%;
margin-left: -3.25px;
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