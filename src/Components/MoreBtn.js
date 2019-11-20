import React, { Component } from "react";
import moreBtnImg from "../img/icon-more.svg";
import styled from "styled-components";

const MoreBtnItem = styled.button`
  all: unset;
  width: 60px;
  height: 60px;
  background-image: url(${moreBtnImg});
`;

class MoreBtn extends Component {
  render() {
    return <MoreBtnItem />;
  }
}

export default MoreBtn;
