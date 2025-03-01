import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import NavBarMov from "../components/NavBarMov";
import Footer from "../components/Footer";
import FooterMov from "../components/FooterMov";
import ProjectDetail from "../components/Web/Web-ProjectPage/ProjectDetail";
import ProjectDetail_Mob from "../components/Mobile/Mob-ProjectPage/ProjectDetail_Mob";

function ProjectDetailPage() {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <AboutPageComponent>
      {isDesktopOrMobile !== true ? (
        <ProgramPageComponent_Web>
          <Navbar />
          <ProjectDetail />
          <Footer />
        </ProgramPageComponent_Web>
      ) : (
        <ProgramPageComponent_Mob>
          <NavBarMov />
          <ProjectDetail_Mob />
          <FooterMov />
        </ProgramPageComponent_Mob>
      )}
    </AboutPageComponent>
  );
}

export default ProjectDetailPage;

const AboutPageComponent = styled.div``;

const ProgramPageComponent_Web = styled.div`
  justify-content: center;
  width: 100%;
  min-width: 1440px;
`;

const ProgramPageComponent_Mob = styled.div`
  width: 100%;
`;