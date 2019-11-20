import React, { Component } from "react";
import styled from "styled-components";
import calenderIcon from "../img/icon-calendar.svg";

const Card = styled.li`
  width: 344px;
  height: 394px;
  border-bottom: solid 1px #e0e2e5;

  &:first-child,
  &:last-child {
    img {
      border: solid 4px rgba(0, 0, 0, 0.3);
    }
    div,
    span {
      display: none;
    }
    border-bottom: none;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 227px;
  border-radius: 2px;
  border: solid 4px #047bf8;
  margin-bottom: 16px;
`;

const CardTitle = styled.div`
  width: 135px;
  height: 24px;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #047bf8;
  margin-bottom: 3px;
`;

const CardDesc = styled.div`
  width: 312px;
  height: 78px;
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  color: #606977;
  margin-bottom: 9px;
`;

const CardDate = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
`;

const DateIcon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

const DateText = styled.span`
  width: 71px;
  height: 22px;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #a6adb7;
`;

class NewsCard extends Component {
  render() {
    const { img, desc, date } = this.props;
    return (
      <Card>
        <CardImg src={img} />
        <CardTitle>NEWS</CardTitle>
        <CardDesc>{desc}</CardDesc>
        <CardDate>
          <DateIcon src={calenderIcon} />
          <DateText>{date}</DateText>
        </CardDate>
      </Card>
    );
  }
}

export default NewsCard;
