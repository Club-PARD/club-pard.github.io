import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import NavBar from "../components/NavBar";
import NavBarMob from "../components/NavBarMob";
import Footer from "../components/Footer";
import FooterMob from "../components/FooterMob";
import NewsTop from "../components/Web/Web-NewsPage/NewsTop";
import NewsMain from "../components/Web/Web-NewsPage/NewsMain";
import NewsBottom from "../components/Web/Web-NewsPage/NewsBottom";
import NewsTopMob from "../components/Mobile/Mob-NewsPage/NewsTop_Mob";
import NewsMainMob from "../components/Mobile/Mob-NewsPage/NewsMain_Mob";
import NewsBottomMob from "../components/Mobile/Mob-NewsPage/NewsBottom_Mob";

export default function NewsPage() {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.
  return (
    <>
      <NewsPageComponent>
        {isDesktopOrMobile !== true ? (
          <NewsPageComponent_Web>
            <NavBar />
            <NewsTop />
            <NewsMain />
            <NewsBottom />
            <Footer />
          </NewsPageComponent_Web>
        ) : (
          <NewsPageComponent_Mob>
            <NavBarMob />
            <NewsTopMob />
            <NewsMainMob />
            <NewsBottomMob />
            <FooterMob />
          </NewsPageComponent_Mob>
        )}
      </NewsPageComponent>
    </>
  );
}

const NewsPageComponent = styled.div`
  width: 100vw;
`;

const NewsPageComponent_Web = styled.div`
  justify-content: center;
  width: 100%;
  min-width: 1440px;
`;

const NewsPageComponent_Mob = styled.div`
  width: 100%;
  justify-content: center;
`;
