import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';

const Div = styled.div`
    margin: 0px auto;
`;

const NavBarWrapper = styled.nav`
  background-color: ${({ scrollPosition }) => (scrollPosition >= 800 ? '#FFFFFF' : '#1A1A1A')};
  height: 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  transition: background-color 0.3s ease;
`;

const NavDiv = styled.div`
  min-width: 1600px;
  max-width: 2000px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Subtitle1 = styled.p`
  font-size: ${props => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${props => props.theme.fontWeights.Subtitle1};
  font-family: 'NanumSquare Neo';

  // Apply the color based on the scroll position and active state
  color: ${props => props.isScrolled 
    ? (props.active 
      ? '#1A1A1A'  // Scrolled and active: dark gray
      : 'rgba(26, 26, 26, 0.2)'  // Scrolled and not active: dark gray with 0.2 opacity
    )
    : (props.active 
      ? '#FFFFFF'  // Not scrolled and active: white
      : 'rgba(255, 255, 255, 0.2)'  // Not scrolled and not active: white with 0.2 opacity
    )
  };
  // Apply the hover color based on the scroll position
  &:hover {
    color: ${props => props.isScrolled ? '#1A1A1A' : '#FFFFFF'};
  }
`;


const Logo = styled.div`
  img {
    height: 45px;
    width: 140px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-right: 10px;
`;

const NavItem = styled.li`
  margin-left: 50px;
`;

const NavBar_About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { pathname } = useLocation(); // 현재 페이지의 URL을 가져옴

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
                <Subtitle1 active={pathname === '/About'} isScrolled={scrollPosition >= 800}>소개</Subtitle1>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Project" style={{ textDecoration: "none" }}>
                <Subtitle1 active={pathname === '/Project'} isScrolled={scrollPosition >= 800}>프로젝트</Subtitle1>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Inquiry" style={{ textDecoration: "none" }}>
                <Subtitle1 active={pathname === '/Inquiry'} isScrolled={scrollPosition >= 800}>문의</Subtitle1>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Recruting" style={{ textDecoration: "none" }}>
                <Subtitle1 active={pathname === '/Recruting'} isScrolled={scrollPosition >= 800}>리쿠르팅</Subtitle1>
              </Link>
            </NavItem>
          </NavLinks>
          </NavDiv>
        </ThemeProvider>
      </NavBarWrapper>
    </Div>
  );
};


export default NavBar_About;