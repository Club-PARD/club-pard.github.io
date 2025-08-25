import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import InquiryContact from "../components/Web/Web-InquiryPage/InquiryContact";
import InquiryManagement from "../components/Web/Web-InquiryPage/InquiryManagement";
import InquiryLast from "../components/Web/Web-InquiryPage/InquriyLast";
import InquiryContactMob from "../components/Mobile/Mob-InquiryPage/InquiryContact_Mob";
import InquiryManagemaentMob from "../components/Mobile/Mob-InquiryPage/InquiryManagement_Mob";
import InquiryLastMob from "../components/Mobile/Mob-InquiryPage/InquiryLast_Mob";
import NavBarMob from "../components/NavBarMob";
import Footer from "../components/Footer";
import FooterMobWrapper from "../components/FooterMob";
import FooterMob from "../components/FooterMob";

function InquiryPage() {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <InquiryPageComponent>
      {isDesktopOrMobile !== true ? (
        <InquiryPageComponent_Web>
          <Navbar />
          <InquiryContact />
          <InquiryManagement />
          <InquiryLast />
          <Footer />
        </InquiryPageComponent_Web>
      ) : (
        <InquiryPageComponent_Mob>
          <NavBarMob />
          <InquiryContactMob />
          <InquiryManagemaentMob />
          <InquiryLastMob />
          <FooterMob />
        </InquiryPageComponent_Mob>
      )}
    </InquiryPageComponent>
  );
}

export default InquiryPage;

const InquiryPageComponent = styled.div`
  width: 100vw;
`;

const InquiryPageComponent_Web = styled.div`
  justify-content: center;
  width: 100%;
  min-width: 1440px;
`;

const InquiryPageComponent_Mob = styled.div`
  width: 100%;
  justify-content: center;
`;
