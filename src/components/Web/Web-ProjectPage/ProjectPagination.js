import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import { Link } from "react-router-dom";
import { getAllProjectList, getWebProjectList, getAppProjectList } from "../../../utils/api";
import FilterBtn from "../Components/FilterBtn";

function ProjectPagination() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // UI에서는 1부터 시작
  const [totalPages, setTotalPages] = useState(1);
  const [part, setPart] = useState("all"); // 기본 필터: "all"
  const parts = ["ALL", "WEB", "APP"]; // 필터 버튼 항목

  const handleFilterChange = (newPart) => {
    setPart(newPart.toLowerCase());
    setCurrentPage(1); // 필터를 변경할 때 페이지를 1로 초기화
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let response;
        if (part === "web") {
          response = await getWebProjectList(currentPage - 1);
        } else if (part === "app") {
          response = await getAppProjectList(currentPage - 1);
        } else {
          response = await getAllProjectList(currentPage - 1);
        }

        setProjects(response.content || []); // 응답에서 content가 없으면 빈 배열
        setTotalPages(response.totalPages || 1);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjects();
  }, [part, currentPage]);

  console.log(projects);

  const renderPagination = () => {
    const pageButtons = [];
    for (let i = 0; i < totalPages; i++) {
      pageButtons.push(
        <NumButtonDiv
          key={i}
          active={currentPage === i + 1}
          onClick={() => setCurrentPage(i + 1)}
        >
          <p>{i + 1}</p>
        </NumButtonDiv>
      );
    }
    return pageButtons;
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>
          <FilterContainer>
            {parts.map((filterPart) => (
              <FilterBtn
                key={filterPart}
                part={filterPart}
                setPart={handleFilterChange} // 필터 변경 함수 사용
                selected={part}
              />
            ))}
          </FilterContainer>
          <ProjectList>
            {projects.map((project) => (
              <ProjectContainer key={project.id}>
              <Link to={`/Project/${project.id}`}>
                <ImageWrapper>
                  <img src={project.thumbnailUrl} alt="프로젝트 썸네일" loading="lazy" />
                  <Overlay>
                    <ProjectTitle>{project.serviceName}</ProjectTitle>
                    <ProjectOncentence>
                      <p>{project.sentence?.[0]?.content}</p>
                      <p>{project.sentence?.[1]?.content}</p>
                    </ProjectOncentence>
                    <ProjectInfo>
                      #{project.generation} #{project.platform}
                    </ProjectInfo>
                  </Overlay>
                </ImageWrapper>
              </Link>
            </ProjectContainer>
            ))}
          </ProjectList>
          <Pagination>
            <img
              src={require("../../../assets/img/ProjectPageimg/LeftArrow.png")}
              alt="이전"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              style={{
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                opacity: currentPage === 1 ? 0.5 : 1,
                width: "20px",
                height: "30px",
              }}
              disabled={currentPage === 1}
            />
            {renderPagination()}
            <img
              src={require("../../../assets/img/ProjectPageimg/RightArrow.png")}
              alt="다음"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              style={{
                cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
                opacity: currentPage >= totalPages ? 0.5 : 1,
                width: "20px",
                height: "30px",
              }}
              disabled={currentPage >= totalPages}
            />
          </Pagination>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default ProjectPagination;

const Container = styled.div`
  width: 1216px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  //margin-top: 100px; //배너 내리면 비활성화
  margin-bottom: 148px;
  display: flex;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 2000px;
  width: fit-content;
`;

const ProjectList = styled.ul`
  list-style: none;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 100px;
  margin-left: -32px;
  margin-bottom: 140px;
`;

const ProjectContainer = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 20px;
  height: auto;
  overflow: hidden;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 386px;
  height: 405px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 134px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px -1px 15px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 0 0 20px 20px;
  color: white;
  text-align: start;
`;

const ProjectTitle = styled.p`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 30px;
  font-weight: 800;
  line-height: 140%;
  margin-left: 21px;
  margin-top: 16px;
  margin-bottom: 40px;
`;

const ProjectOncentence = styled.div`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 14px;
  opacity: 0.8;
  margin-top: -30px;
  margin-left: 21px;

  p {
    line-height: 60%;
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 14px;
  right: 21px;
  color: #FFF;
  text-align: right;
  font-family: "NanumSquare Neo";
  font-size: 14px;
  font-weight: 700;
  opacity: 0.6;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const NumButtonDiv = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin: 0px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#7b3fef" : "none")};
  color: #ffffff;
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  line-height: 140%;
  font-family: "NanumSquare Neo";
  cursor: pointer;

  p {
    margin-top: 16px;
  }
`;