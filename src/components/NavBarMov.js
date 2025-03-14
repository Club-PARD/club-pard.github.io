import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";
import MenuBar_white from "../assets/img/MenuBar_white.png";
import { pardDATA } from "../utils/data.constant";
import { BannerMob } from "./Mobile/Components/BannerMob";

const NavBarMov = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {pardDATA.displayBanner ? <BannerMob /> : null}
      <Nav isOpen={isOpen}>
        <ThemeProvider theme={theme}>
          <Logo>
            <Link to="/">
              <LogoImg src={require("../assets/img/Logo.png")} alt="Logo" />
            </Link>
          </Logo>
          {/* TODO : button 모듈화 */}
          <MenuButton scrollPosition={scrollPosition} onClick={toggleMenu}>
            <img
              src={MenuBar_white}
              alt="menu"
              height={"50px"}
              width3={"25px"}
            />
          </MenuButton>
          <Menu isOpen={isOpen}>
            {/* TODO: map */}
            <Link to="/About" style={{ textDecoration: "none" }}>
              <Subtitle2>소개</Subtitle2>
            </Link>
            <Hr />
            <Link to="/Project" style={{ textDecoration: "none" }}>
              <Subtitle2>프로젝트</Subtitle2>
            </Link>
            <Hr />
            <Link to="/Inquiry" style={{ textDecoration: "none" }}>
              <Subtitle2>문의</Subtitle2>
            </Link>
            <Hr />
            <Link to="/Recruiting" style={{ textDecoration: "none" }}>
              <Subtitle2>리크루팅</Subtitle2>
            </Link>
            <Hr />
            <Link to="/news" style={{ textDecoration: "none" }}>
              <Subtitle2>성과</Subtitle2>
            </Link>
          </Menu>
        </ThemeProvider>
      </Nav>
    </div>
  );
};

export default NavBarMov;

const Nav = styled.nav`
  background-color: #1a1a1a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 69px;
  z-index: 999;
  border-bottom: none;
  margin-top: ${pardDATA.displayBanner ? "100px" : "none"};
`;

const Logo = styled.div`
  img {
    height: 45px; // 로고 크기가 px로 바꾸니 너무 작아서 1.5배늘림
    width: 140px;
  }
  margin-right: auto;
  margin-left: 10px;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Menu = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: rgba(26, 26, 26, 0.8); // 여기가 NavBar 투명도
  padding: 1rem 5rem;
  text-align: center;
  margin-top: 4px;
  margin-top: ${pardDATA.displayBanner ? "84px" : "none"};
`;

const Subtitle2 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 20px;
  margin-top: 20px;
  white-space: pre-line;
`;

const Hr = styled.hr`
  width: 100%;
  color: white;
`;

const LogoImg = styled.img`
  width: 120px;
  height: 25px;
`;

const BannerImg = styled.div`
  width: 100%;
  height: 100px;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    text-align: center;
  }

  z-index: 1000;
  position: fixed;
  cursor: pointer;
`;
