import React, { Component } from "react";
import IntroNav from "./IntroNav";
import logo from "../img/logo.svg";
import mainImg from "../img/img-main.png";
import IntroMain from "./IntroMain";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${mainImg});
  width: 100%;
  height: 1080px;
  background-attachment: fixed;
`;

class Intro extends Component {
  render() {
    return (
      <Section>
        <IntroNav logo={logo} />
        <IntroMain logo={logo} />
      </Section>
    );
  }
}

export default Intro;
