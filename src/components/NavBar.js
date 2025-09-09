import React from "react";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { BannerWeb } from "./Web/Components/BannerWeb";
import { pardDATA } from "../utils/data.constant";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { pathname } = useLocation(); // 현재 페이지의 URL을 가져옴

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll, { passive: false }); // 여기 true로

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div>
      {pardDATA.displayBanner ? <BannerWeb /> : null}
      <NavBarWrapper scrollPosition={scrollPosition}>
        <ThemeProvider theme={theme}>
          <NavDiv>
            <Logo>
              <Link to="/">
                <img src={require("../assets/img/Logo.png")} alt="Logo" />
              </Link>
            </Logo>
            <NavLinks>
              <NavItem>
                <Link to="/About" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname === "/About"}>소개</Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Project" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname.startsWith("/Project")}>
                    프로젝트
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Inquiry" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname === "/Inquiry"}>문의</Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Recruiting" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname === "/Recruiting"}>
                    리크루팅
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname === "/news"}>성과</Subtitle1>
                </Link>
              </NavItem>
            </NavLinks>
          </NavDiv>
        </ThemeProvider>
      </NavBarWrapper>
    </Div>
  );
};

export default NavBar;

const Div = styled.div`
  top: 0;
  margin: 0px auto;
  display: fixed;
  flex-direction: column;
  position: fixed;
  z-index: 10000;
`;

const NavBarWrapper = styled.nav`
  height: 70px;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100vw;
  z-index: 999;
  background-color: #1a1a1a;
  border: 1px #263af3;
  border-left: none;
  border-right: none;
  margin-top: 0px; //배너 시 100px
  position: relative;
  min-width: 1280px;  // 📌 최소 너비 지정 (반응형 줄어들지 않도록)
  overflow-x: auto; 
`;

const NavDiv = styled.div`
  width: 90.3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 1280px; 
`;

const Subtitle1 = styled.p`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle1};
  color: ${(props) => (props.active ? "#FFFFFF" : "rgba(255, 255, 255, 0.2)")};
  font-family: "NanumSquare Neo";
  &:hover {
    color: #ffffff;
  }
`;

const Logo = styled.div`
  img {
    height: 45px;
    width: 140px;
  }
  margin-right: 200px;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-right: 10px;
`;

const NavItem = styled.li`
  margin-left: 50px;
  flex-shrink: 0; 
`;
