import React, { Component } from "react";
import slash from "../img/icon-slash-copy.svg";
import menu from "../img/icon-sitemap-menu.svg";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(230, 232, 234, 0.2);
`;

const Logo = styled.img`
  width: 186px;
  height: 26px;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  width: 160px;
  height: 24px;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: white;
`;

const Slash = styled.img`
  width: 16px;
  height: 16px;
`;

const LangBtn = styled.button`
  all: unset;
  width: 60px;
  height: 30px;
  border-radius: 15px;

  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  margin-right: 24px;

  display: flex;
  justify-content: center;
  & > * {
    width: 36px;
    height: 24px;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: center;
    color: var(--white);
  }
  &:first-child {
    border: solid 1px white;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;
class IntroNav extends Component {
  render() {
    return (
      <Nav>
        <Logo src={this.props.logo} alt="logo" />
        <Menu>
          <MenuItem>ABOUT US</MenuItem>
          <Slash src={slash} alt="slash" />
          <MenuItem>PRODUCTS</MenuItem>
          <Slash src={slash} alt="slash" />
          <MenuItem>SUPPORT</MenuItem>
          <Slash src={slash} alt="slash" />
          <MenuItem>NEWS</MenuItem>
          <Slash src={slash} alt="slash" />
          <MenuItem>RECRUIT</MenuItem>
        </Menu>
        <NavRight>
          <LangBtn>
            <div>KOR</div>
          </LangBtn>
          <LangBtn>
            <div>ENG</div>
          </LangBtn>
          <LangBtn>
            <div>CHN</div>
          </LangBtn>
          <img src={menu} alt="menu" />
        </NavRight>
      </Nav>
    );
  }
}

export default IntroNav;
