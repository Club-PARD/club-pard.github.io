import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dbService } from "../../../fbase";
import { doc, getDoc } from "firebase/firestore";

function ProjectDetail() {
  const navigate = useNavigate();

  const [detailProjects, setDetailProjects] = useState([]);

  const location = useLocation();
  const currentURL = location.pathname;
  const id = currentURL.split("/").pop();

  const fetchProjects = async () => {
    const docRef = doc(dbService, "Project", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setDetailProjects(docSnap.data());
    } else {
      navigate("*");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <Div>
        <PartDiv>
          <ThemeProvider theme={theme}>
            <MainBackImg
              src={detailProjects.backImg}
              alt={detailProjects.teamName}
            />
            <MainDiv>
              <CommonText
                style={{ marginTop: "34px", width: "100%" }}
                align="center"
              >
                {detailProjects.batch}
              </CommonText>
              <HR />
              <ContentsDiv>
                <RightContent>
                  <TitleText>
                    <Header8>{detailProjects.part} |</Header8>
                    <Header7>{detailProjects.serviceName}</Header7>
                  </TitleText>
                  {detailProjects.tool && (
                    <>
                      <ToolContainer>
                        <PartText marginTop={"35px"}>
                          <CommonText color="white" align="start">
                            기획
                          </CommonText>
                          {detailProjects.tool.planner.map((tool, index) => (
                            <PartTool key={index}>{tool} </PartTool>
                          ))}
                        </PartText>
                        <PartText marginTop={"10px"}>
                          <CommonText color="white" align="start">
                            디자인
                          </CommonText>
                          {detailProjects.tool.designer.map((tool, index) => (
                            <PartTool key={index} color={"#7B3FEF"}>
                              {tool}
                            </PartTool>
                          ))}
                        </PartText>
                        <PartText marginTop={"10px"}>
                          <CommonText color="white" align="start">
                            개발
                          </CommonText>
                          <Container>
                            {detailProjects.tool.developer.map(
                              (tool, index) => (
                                <PartTool key={index} color={"#FF5C00"}>
                                  {tool}
                                </PartTool>
                              )
                            )}
                          </Container>
                        </PartText>
                      </ToolContainer>
                      <TitleText marginTop={"86px"}>
                        <Header8>Team |</Header8>
                        <Header7>{detailProjects.teamName}</Header7>
                      </TitleText>
                      <PartText marginTop={"35px"}>
                        <CommonText color="white" align="start">
                          기획
                        </CommonText>
                        {detailProjects.member.planner.map((tool, index) => (
                          <MemberText
                            key={index}
                            style={{ width: "auto", marginRight: "15px" }}
                          >
                            {tool}{" "}
                          </MemberText>
                        ))}
                      </PartText>
                      <PartText marginTop={"20px"}>
                        <CommonText color="white" align="start">
                          디자인
                        </CommonText>
                        {detailProjects.member.designer.map((tool, index) => (
                          <MemberText
                            key={index}
                            style={{ width: "auto", marginRight: "15px" }}
                          >
                            {tool}
                          </MemberText>
                        ))}
                      </PartText>
                      <PartText marginTop={"20px"}>
                        <CommonText color="white" align="start">
                          개발
                        </CommonText>
                        {detailProjects.member.developer.map((tool, index) => (
                          <MemberText
                            key={index}
                            style={{ width: "auto", marginRight: "15px" }}
                          >
                            {tool}
                          </MemberText>
                        ))}
                      </PartText>
                    </>
                  )}
                </RightContent>
                <LeftContent>
                  <ImgDiv>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <ArrowImg
                        key={index}
                        src={require("../../../assets/img/ProjectPageimg/RightArrow.png")}
                        alt="arrowImg"
                      />
                    ))}
                  </ImgDiv>

                  <Header5 marginTop={"58px"}>{detailProjects.title}</Header5>
                  {detailProjects.contents && (
                    <>
                      <ContentsText>
                        {detailProjects.contents.map((tool, index) => (
                          <Header6 key={index}>{tool}</Header6>
                        ))}
                      </ContentsText>
                    </>
                  )}
                  <ToolListDiv>
                    {detailProjects.link && (
                      <>
                        {detailProjects.link.url && (
                          <IconBackground
                            key="url"
                            href={detailProjects.link.url}
                            target="_blank"
                          >
                            <Icon
                              src={require("../../../assets/img/ProjectPageimg/URLImg.png")}
                              alt={"url"}
                              width={"38px"}
                              height={"38px"}
                            />
                          </IconBackground>
                        )}
                        {detailProjects.link.notion && (
                          <IconBackground
                            key="notion"
                            href={detailProjects.link.notion}
                            target="_blank"
                          >
                            <Icon
                              src={require("../../../assets/img/ProjectPageimg/NotionImg.png")}
                              alt={"notion"}
                              width={"46px"}
                              height={"46px"}
                            />
                          </IconBackground>
                        )}
                        {detailProjects.link.figma && (
                          <IconBackground
                            key="figma"
                            href={detailProjects.link.figma}
                            target="_blank"
                          >
                            <Icon
                              src={require("../../../assets/img/ProjectPageimg/FigmaImg.png")}
                              alt={"figma"}
                              width={"32px"}
                              height={"32px"}
                            />
                          </IconBackground>
                        )}
                        {detailProjects.link.github && (
                          <IconBackground
                            key="github"
                            href={detailProjects.link.github}
                            target="_blank"
                          >
                            <Icon
                              src={require("../../../assets/img/ProjectPageimg/GitHubImg.png")}
                              alt={"github"}
                              width={"36px"}
                              height={"36px"}
                            />
                          </IconBackground>
                        )}
                        {detailProjects.link.github_server && (
                          <IconBackground
                            key="github"
                            href={detailProjects.link.github_server}
                            target="_blank"
                          >
                            <Icon
                              src={require("../../../assets/img/ProjectPageimg/GitHubImg.png")}
                              alt={"github"}
                              width={"36px"}
                              height={"36px"}
                            />
                          </IconBackground>
                        )}
                      </>
                    )}
                  </ToolListDiv>
                </LeftContent>
              </ContentsDiv>
            </MainDiv>
          </ThemeProvider>
        </PartDiv>
      </Div>
    </div>
  );
}

export default ProjectDetail;

const ToolContainer = styled.div`
  padding-bottom: 20px;
`;

const CommonText = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
  width: 100px;
`;

const MemberText = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Body3};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
  width: 100px;
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  margin-top: ${(props) => props.marginTop};
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
`;

const Header6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header4};
  margin-top: ${(props) => props.marginTop};
  color: white;
  font-family: "NanumSquare Neo";
  line-height: 160%;
  white-space: nowrap;
  text-align: start;
  width: 590px;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
`;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  padding-top: 5px;
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
  margin-right: 7px;
`;

const PartDiv = styled.div`
  position: relative;
  padding-top: 70px;
  height: 1450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  /* background-color: red; */
`;

const Div = styled.div`
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MainBackImg = styled.div`
  width: 100%;
  height: 647px;
  border: none;
  /* object-fit: cover; */
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const MainDiv = styled.div`
  width: 100%;
  height: 800px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HR = styled.hr`
  width: 1216px;
  height: 1px;
  background-color: #fff;
  margin-top: 34px;
  border: none;
`;

const ContentsDiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 1216px;
  height: 100%;
  margin-top: 50px;
`;

const RightContent = styled.div`
  width: 624px;
  /* background-color: beige; */
  padding-left: 72px;
`;

const TitleText = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  margin-top: ${(props) => props.marginTop};
`;

const PartText = styled.div`
  display: flex;
  margin-top: ${(props) => props.marginTop};
  /* background-color: yellow; */
  /* height: 28px; */
  flex-wrap: wrap; // 복수의 행
  align-items: center;
  /* justify-content: start; */
`;

const PartTool = styled.div`
  display: inline-flex;
  padding: 5px 20px;
  width: auto;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${(props) => props.color || "#5262F5"};
  font-size: ${(props) => props.theme.Web_fontSizes.ButtonText1};
  font-weight: ${(props) => props.theme.fontWeights.CommonText};
  color: white;
  margin: 5px 15px 5px 0px;
`;

const LeftContent = styled.div`
  width: 591px;
  /* background-color: brown; */
`;

const ImgDiv = styled.div`
  height: 33px;
  width: 100%;
  display: flex;
  text-align: start;
  justify-content: start;
  margin-left: 1px;
`;

const ArrowImg = styled.img`
  width: 22px;
  height: 33px;
  flex-shrink: 0;
  margin-right: 30px;
`;

const ContentsText = styled.div`
  margin-top: 20px;
`;

const ToolListDiv = styled.div`
  margin-top: 175px;
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

const Container = styled.div`
  display: grid;
  height: 36px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(5, auto);
  grid-auto-flow: column-dense;
`;

const ContainerTeam = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 58px;
  align-items: center;
`;
