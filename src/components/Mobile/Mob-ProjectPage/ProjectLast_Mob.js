import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import { Link } from "react-router-dom";
import {
  getAllProjectList_Mob,
  getWebProjectList_Mob,
  getAppProjectList_Mob,
} from "../../../utils/api";
import FilterBtn from "../Components/FilterBtn";

function ProjectLast_Mob() {
  const [projects, setProjects] = useState([]);
  const [more, setMore] = useState(false);
  const [part, setPart] = useState("all"); // 기본 필터: "all"
  const [totalPages, setTotalPages] = useState(1);
  const parts = ["ALL", "WEB", "APP"]; // 필터 버튼 항목

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let response;
        if (part === "web") {
          response = await getWebProjectList_Mob(0);
        } else if (part === "app") {
          response = await getAppProjectList_Mob(0);
        } else {
          response = await getAllProjectList_Mob(0);
        }

        const sortedItems = response.content.sort((a, b) => a.orderNumber - b.orderNumber);
        setProjects(sortedItems);
        setTotalPages(response.totalPages || 1); // 전체 페이지 수 저장
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjects();
  }, [part]);

  // 필터 변경 시 실행
  const handleFilterChange = (newPart) => {
    setPart(newPart.toLowerCase());
    setMore(false); // 필터 변경 시 기본 5개만 보이도록 초기화
  };

  // "더보기" 버튼 클릭 시 추가 데이터 불러오기
  const loadMoreProjects = async () => {
    try {
      let allProjects = [...projects];

      for (let page = 1; page < totalPages; page++) {
        let response;
        if (part === "web") {
          response = await getWebProjectList_Mob(page);
        } else if (part === "app") {
          response = await getAppProjectList_Mob(page);
        } else {
          response = await getAllProjectList_Mob(page);
        }

        if (response.content.length > 0) {
          allProjects = [...allProjects, ...response.content];
        }
      }

      // 중복 제거 (ID 기반)
      const uniqueProjects = Array.from(new Map(allProjects.map((item) => [item.id, item])).values());

      setProjects(uniqueProjects);
      setMore(true);
    } catch (error) {
      console.error("Error loading more projects:", error);
    }
  };

  // `more` 상태에 따라 표시할 프로젝트 개수 조정
  const visibleProjects = more ? projects : projects.slice(0, 5);

  return (
    <Div>
      <ThemeProvider theme={theme}>
        <PartDiv>
          <FilterContainer>
            {parts.map((filterPart) => (
              <FilterBtn
                key={filterPart}
                part={filterPart}
                setPart={handleFilterChange}
                selected={part}
              />
            ))}
          </FilterContainer>
          <Container>
            {visibleProjects.map((project) => (
              <Link key={project.id} to={`/Project/${project.id}`}>
                <Column>
                  <ContentDiv>
                    <MainImg
                      src={project.thumbnailUrl}
                      alt={project.serviceName}
                    />
                    <TextDiv>
                      <ContentsWrap>
                        <Subtitle1>{project.serviceName}</Subtitle1>
                        <TitleTextDiv>
                          {project.sentence?.map((sentence, index) => (
                            <Body2 key={index}>{sentence.content}</Body2>
                          ))}
                        </TitleTextDiv>
                        <ContentTextDiv>
                          <Body2>
                            #{project.generation} #{project.platform}
                          </Body2>
                        </ContentTextDiv>
                      </ContentsWrap>
                    </TextDiv>
                  </ContentDiv>
                </Column>
              </Link>
            ))}
          </Container>
          {!more && (
            <DownLogo
              src={require("../../../assets/img/moreButton.png")}
              onClick={loadMoreProjects}
              alt="downLogo"
            />
          )}
        </PartDiv>
      </ThemeProvider>
    </Div>
  );
}

export default ProjectLast_Mob;

const Subtitle1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle1};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  text-align: start;
  margin-top: 10px;
  margin-left: 15px;
`;

const Body2 = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  line-height: 180%;
`;

const PartDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 46px;
`;

const Column = styled.div`
  position: relative;
  max-width: 333px;
`;

const TextDiv = styled.div`
  position: absolute;
  width: 303px;
  height: 105px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.68);
  box-shadow: 0px -1px 15px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 0 0 14px 14px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const TitleTextDiv = styled.div`
  margin-top: 5px;
  margin-left: 15px;
`;

const ContentDiv = styled.div`
  width: 303px;
  height: 320px;
  display: block;
  cursor: pointer;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainImg = styled.img`
  width: 303px;
  height: 320px;
  border-radius: 14px;
`;

const ContentTextDiv = styled.div`
  width: 303px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-left: -15px;
`;

const DownLogo = styled.img`
  width: 46px;
  height: 49px;
  margin: 120px 0px 60px 0px;
  cursor: pointer;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 2000px;
  width: fit-content;
  margin-bottom: 68px;
`;