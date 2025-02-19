import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";

const NavBar_Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div>
      <NavBarWrapper
        isScrolled={scrollPosition >= 30}
        scrollPosition={scrollPosition}
      >
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
                  <Subtitle1>소개</Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Project" style={{ textDecoration: "none" }}>
                  <Subtitle1>프로젝트</Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Inquiry" style={{ textDecoration: "none" }}>
                  <Subtitle1>문의</Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Recruiting" style={{ textDecoration: "none" }}>
                  <Subtitle1>리크루팅</Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <Subtitle1>성과</Subtitle1>
                </Link>
              </NavItem>
            </NavLinks>
          </NavDiv>
        </ThemeProvider>
      </NavBarWrapper>
    </Div>
  );
};

export default NavBar_Home;

const Div = styled.div`
  margin: 0px auto;
`;

const NavBarWrapper = styled.nav`
  background-color: ${(props) =>
    props.isScrolled
      ? props.scrollPosition >= 19650
        ? "#1A1A1A"
        : "rgba(0,0,0,0)"
      : "rgba(0,0,0,0)"};
  height: 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  transition: background-color 0.3s ease;
  transform: translateY(${(props) => (props.isScrolled ? "0" : "-100%")});
  min-width: 1280px;  // 📌 최소 너비 지정 (반응형 줄어들지 않도록)
  overflow-x: auto; 
`;

const NavDiv = styled.div`
  /* min-width: 1600px;
  max-width: 2000px; */
  width: 90.3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 1280px; 
`;

const Subtitle1 = styled.p`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle1};
  color: #ffffff;
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
