import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { getAllProjectList_Mob } from "../../../utils/api";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

export default function App() {
  const [projects, setProjects] = useState([]);
  const handleClick = () => {
    window.open("https://we-pard.com/Project", "_blank");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjectList_Mob(0);
        const filteredProjects = (response.content || []).filter(
          (project) => project.id >= 16 && project.id <= 20
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
        <Header7>PROJECTS</Header7>
        <B3>이번 기수 파디들의 <br /> 다양한 서비스를 확인해보세요</B3>
        <AppContainer>
          <StyledSwiper
            slidesPerView={1}
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
        <Button1 onClick={handleClick}>프로젝트 더보기</Button1>
      </ThemeProvider>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppContainer = styled.div`
  display: flex;
  width: 1700px;
  height: 453px;
  background: #1a1a1a;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  width: 303px;
  height: 320px;
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
  height: 57px;
  width: 360px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 233px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
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


const Button1 = styled.button`
  font-size: ${(props) => props.theme.Mob_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  display: flex;
  align-items: center;
  line-height: 9px;
  width: 199px;
  height: 52px;
  background-color: #7b3fef;
  justify-content: center;
  margin: 0px auto 120px; /* 상단 여백은 58px, 좌우는 auto로 중앙 정렬 */
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;