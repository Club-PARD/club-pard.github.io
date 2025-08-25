import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import NavBarMob from "../components/NavBarMob";
import Footer from "../components/Footer";
import RecruitingFirst from "../components/Web/Web-RecruitingPage/RecruitingFirst";
import RecruitingSecond from "../components/Web/Web-RecruitingPage/RecruitingSecond";
import RecruitingIdeal from "../components/Web/Web-RecruitingPage/RecruitingIdeal";
import RecruitingPart from "../components/Web/Web-RecruitingPage/RecruitingPart";
import RecruitingReview from "../components/Web/Web-RecruitingPage/RecruitingReview";
import RecruitingAbout from "../components/Web/Web-RecruitingPage/RecruitingAbout";
import RecruitingLast from "../components/Web/Web-RecruitingPage/RecruitingLast";
import RecruitingFirstMob from "../components/Mobile/Mob-RecrutingPage/RecruitingFirst_Mob";
import RecruitingSecondMob from "../components/Mobile/Mob-RecrutingPage/RecruitingSecond_Mob";
import RecruitingIdealMob from "../components/Mobile/Mob-RecrutingPage/RecruitingIdeal_Mob";
import RecruitingPartMob from "../components/Mobile/Mob-RecrutingPage/RecruitingPart_Mob";
import RecruitingReviewMob from "../components/Mobile/Mob-RecrutingPage/RecruitingReview_Mob";
import RecruitingAboutMob from "../components/Mobile/Mob-RecrutingPage/RecruitingAbout_Mob";
import RecruitingLastMob from "../components/Mobile/Mob-RecrutingPage/RecruitingLast_Mob";
import FooterMob from "../components/FooterMob";

function RecruitingPage() {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <RecruitingPageComponent>
      {isDesktopOrMobile !== true ? (
        <RecruitingPageComponent_WEB>
          <Navbar />
          <RecruitingFirst />
          <RecruitingSecond />
          <RecruitingIdeal />
          <RecruitingPart />
          <RecruitingReview />
          <RecruitingAbout />
          <RecruitingLast />
          <Footer />
        </RecruitingPageComponent_WEB>
      ) : (
        <RecruitingPageComponent_Mob>
          <NavBarMob />
          <RecruitingFirstMob />
          <RecruitingSecondMob />
          <RecruitingIdealMob />
          <RecruitingPartMob />
          <RecruitingReviewMob />
          <RecruitingAboutMob />
          <RecruitingLastMob />
          <FooterMob />
        </RecruitingPageComponent_Mob>
      )}
    </RecruitingPageComponent>
  );
}

export default RecruitingPage;

const RecruitingPageComponent = styled.div`
  width: 100vw;
`;

const RecruitingPageComponent_WEB = styled.div`
  justify-content: center;
  width: 100%;
  min-width: 1440px;
`;

const RecruitingPageComponent_Mob = styled.div`
  width: 100%;
  justify-content: center;
`;
