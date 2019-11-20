import React, { Component } from "react";
import styled from "styled-components";

import facebookIcon from "../img/channelImg/icon-facebook.svg";
import instaIcon from "../img/channelImg/icon-instagram.png";
import youtubeIcon from "../img/channelImg/icon-youtube.svg";

import kakaoIcon from "../img/channelImg/icon-kakaotalk.svg";
import youkuIcon from "../img/channelImg/icon-youku.svg";
import nueromekaIcon from "../img/channelImg/icon-neuromeka-docs.svg";

import forumIcon from "../img/channelImg/icon-fourum.svg";
import indygoIcon from "../img/channelImg/icon-indygo.svg";

const SectionChannel = styled.section`
  width: 100%;
  height: 936px;
  background-color: #0072ce;
  padding: 72px 478px 78px 478px;
`;

const ChannelGrid = styled.div`
  display: grid;
  width: 964px;
  height: 666px;
  grid-template: repeat(3, 1fr) / repeat(12, 1fr);
`;

const GridChild = styled.div`
  /*set default margin*/
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 46px;
  color: white;
  & > img {
    margin-bottom: 16px;
  }
  & > span:nth-child(2) {
    width: 200px;
    height: 28px;
    font-family: Roboto;
    font-weight: 700;
    text-align: center;
    margin-bottom: 5px;
  }
  & > span:nth-child(3) {
    width: 200px;
    height: 28px;
    font-family: Roboto;
    font-weight: 400;
    text-align: center;
    margin-bottom: 5px;
  }
  /*set font color for 2,4,6th child*/
  &:nth-child(2n):not(:last-child) {
    color: black;
  }
  /*set different margin for last child*/
  &:last-child {
    padding-top: 32px;
  }
  /*set width */
  &:first-child,
  &:nth-child(2),
  &:nth-child(3) {
    grid-column: span 4;
  }
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(7) {
    grid-column: span 3;
  }
  &:last-child {
    grid-column: span 12;
  }
  /*set color*/
  &:first-child {
    background-color: #0d4d96;
  }
  &:nth-child(2) {
    background-color: #ededed;
  }
  &:nth-child(3) {
    background-color: #e21c21;
  }
  &:nth-child(4) {
    background-color: #dec327;
  }
  &:nth-child(5) {
    background-color: #0a1423;
  }
  &:nth-child(6) {
    background-color: #dbdbdb;
  }
  &:nth-child(7) {
    background-color: #5c697b;
  }
  &:last-child {
    background-color: #02305b;
  }
`;

const Title = styled.div`
  width: 500px;
  height: 48px;
  font-family: Helvetica;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: white;
  margin: 0px 232px 72px 232px;
`;

class Channel extends Component {
  render() {
    const channelList = [
      {
        icon: facebookIcon,
        name: "Facebook"
      },
      {
        icon: instaIcon,
        name: "Instagram"
      },
      {
        icon: youtubeIcon,
        name: "Youtube"
      },
      {
        icon: kakaoIcon,
        name: "Youku"
      },
      {
        icon: youkuIcon,
        name: "Youku"
      },
      {
        icon: nueromekaIcon,
        name: "Neuromeka Docs"
      },
      {
        icon: forumIcon,
        name: "Fourum"
      },
      {
        icon: indygoIcon,
        name: "로봇 플랫폼 서비스 | 인디고"
      }
    ];
    const divChannelList = channelList.map((channel, idx) => (
      <GridChild key={idx}>
        <img src={channel.icon} alt={channel.name} />
        <span>{channel.name}</span>
        <span>바로가기 ></span>
      </GridChild>
    ));
    return (
      <SectionChannel>
        <Title>CHANNEL</Title>
        <ChannelGrid>{divChannelList}</ChannelGrid>
      </SectionChannel>
    );
  }
}

export default Channel;
