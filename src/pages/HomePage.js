import styled from "styled-components";
import HomePartWeb from "../components/Web/Web-HomePage/HomePart";
import HomePartnerWeb from "../components/Web/Web-HomePage/HomePartner";
import HomeLastWeb from "../components/Web/Web-HomePage/HomeLast";
import HomeMentorWeb from "../components/Web/Web-HomePage/HomeMentor";
import { useMediaQuery } from "react-responsive";
import HomeMentorMob from "../components/Mobile/Mob-HomePage/HomeMentor_Mob";
import HomeVideoMob from "../components/Mobile/Mob-HomePage/HomeFirst_Mob";
// import HomeProgramMob from "../components/Mobile/Mob-HomePage/HomeProgram_Mob";
import HomePartsMob from "../components/Mobile/Mob-HomePage/HomePart_Mob";
import HomeLastsMob from "../components/Mobile/Mob-HomePage/HomeLast_Mob";
import HomePartnerMob from "../components/Mobile/Mob-HomePage/HomePartner_Mob";
import ProgramsTrainMob from "../components/Mobile/Mob-ProjectPage/ProgramsTrainMob";
import HomeFirst from "../components/Web/Web-HomePage/HomeFirst";
import NavBarHome from "../components/Navbar_Home";
import HomeSecond from "../components/Web/Web-HomePage/HomeSecond";
import Footer from "../components/Footer";
import FooterMov from "../components/FooterMov";
import HomeSecondMob from "../components/Mobile/Mob-HomePage/HomeSecond_Mob";
import ProgramsTrain from "../components/Web/Web-ProjectPage/ProgramsTrain";
import NavBarMob_Home from "../components/NavBarMob_Home";
import HomeProject from "../components/Web/Web-HomePage/HomeProject";
import HomeProjectMob from "../components/Mobile/Mob-HomePage/HomeProject_Mob";

function HomePage() {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <HomePageComponent>
      {isDesktopOrMobile !== true ? (
        <div>
          <NavBarHome />
          <HomeFirst />
          <HomeSecond />
          <HomePartWeb />
          <ProgramsTrain />
          <HomeProject />
          <HomeMentorWeb />
          <HomeLastWeb />
          <HomePartnerWeb />
          <Footer />
        </div>
      ) : (
        <HomePageComponent_Mob>
          <NavBarMob_Home />
          <HomeVideoMob />
          <HomeSecondMob />
          <HomePartsMob />
          {/* <HomeProgramMob /> */}
          <ProgramsTrainMob/>
          <HomeMentorMob />
          <HomeLastsMob />
          <HomeProjectMob/>
          <HomePartnerMob />
          <FooterMov />
        </HomePageComponent_Mob>
      )}
    </HomePageComponent>
  );
}

export default HomePage;

const HomePageComponent = styled.div``;
const HomePageComponent_Mob = styled.div`
  width: 100%;
`;
