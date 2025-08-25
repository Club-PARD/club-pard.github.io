import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { getAllProjectList } from "../../../utils/api";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

export default function App() {
  const [projects, setProjects] = useState([]);
  const handleClick = () => {
    window.open("https://pard-website-acfdd.web.app/Project", "_blank");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjectList(0);
        const filteredProjects = (response.content || []).filter(
          (project) => project.id >= 21 && project.id <=25
        );
        setProjects(filteredProjects);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Div>
      <ThemeProvider theme={theme}>
        <Header2>PROJECTS</Header2>
        <HeadlineM3>이번 기수 파디들의 다양한 서비스를 확인해보세요</HeadlineM3>
        <AppContainer>
          <StyledSwiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => (
                `<span class="${className}" style="background-color: #fff; width: 10px; height: 10px; border-radius: 50%; margin-top: 0 8px;"></span>`
              ),
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            keyboard={{
              enabled: true, // 키보드로 슬라이드 네비게이션
            }}
            modules={[Pagination, Keyboard, Navigation]}
          >
            {projects.map((project) => (
              <StyledSwiperSlide key={project.id}>
                <Link to={`/Project/${project.id}`}>
                  <Image
                    src={project.thumbnailUrl}
                    alt={`Project ${project.id}`}
                    loading="lazy"
                  />
                    <Overlay>
                    <ProjectTitle>{project.serviceName}</ProjectTitle>
                    <ProjectOncentence>
                      {project.sentence?.[0]?.content}
                      {<br />}
                      {project.sentence?.[1]?.content}
                    </ProjectOncentence>
                    <ProjectInfo>
                      #{project.generation} #{project.platform}
                    </ProjectInfo>
                  </Overlay>
                </Link>
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </AppContainer>
        <ButtonDiv>
            <LearnMoreButton>
              <Header5 onClick={handleClick}>프로젝트 더보기</Header5>
            </LearnMoreButton>
        </ButtonDiv>
      </ThemeProvider>
    </Div>
  );
}

const Div = styled.div`
  margin: 0px auto;
  height: 850px;
  justify-content: center;
  width: 1330px;
  margin-bottom: 233px;
`;

const AppContainer = styled.div`
  display: flex;
  width: 1330px;
  height: 453px;
  background: #1a1a1a;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  width: 1000px;
  height: 330px;
  padding-bottom: 50px;
  position: relative;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: auto;
  height: auto;
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
`;

const Image = styled.img`
  width: 314px;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  margin-top: 5px;
`;

const LearnMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7b3fef;
  height: 64px;
  width: 360px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 233px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: center;
  margin-bottom: 25px;
`;

const HeadlineM3 = styled.div`
  color: #fff;
  font-family: "NanumSquare Neo";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  margin-bottom: 30px;
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  text-align: left;
  line-height: 140%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100.4%;
  height: 135px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px -1px 15px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 0 0 17.5px 17.5px;
  color: white;
  text-align: start;
  margin-left: -1px;
  margin-bottom: -1px;
`;

const ProjectTitle = styled.p`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 30px;
  font-weight: 800;
  line-height: 140%;
  margin-left: 21px;
  margin-top: 16px;
`;

const ProjectOncentence = styled.div`
  color: #FFF;
  font-family: "NanumSquare Neo";
  font-size: 14px;
  opacity: 0.8;
  margin-top: -30px;
  margin-left: 21px;
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