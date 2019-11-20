import React, { Component } from "react";
import styled from "styled-components";
import MoreBtn from "./MoreBtn";

const CardItem = styled.li`
  width: 344px;
  height: 410px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 24px 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  height: 26px;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  color: #047bf8;
  margin-bottom: 32px;
`;

const CardDesc = styled.div`
  width: 296px;
  height: 96px;
  font-family: NotoSansCJKkr_normal;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #606977;
`;

class Card extends Component {
  render() {
    return (
      <CardItem>
        <div>
          <CardTitle>{this.props.title}</CardTitle>
          <CardDesc>{this.props.desc}</CardDesc>
        </div>
        <MoreBtn />
      </CardItem>
    );
  }
}

export default Card;
