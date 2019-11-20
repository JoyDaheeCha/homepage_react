import React, { Component } from "react";
import styled from "styled-components";
import arrowLeft from "../img/icon-arrow-left.svg";
import arrowRight from "../img/icon-arrow-right.svg";

import active1 from "../img/newsImgs/img-news-1.jpg";
import active2 from "../img/newsImgs/img-news-2.jpg";
import active3 from "../img/newsImgs/img-news-3.jpg";

import inactive1 from "../img/newsImgs/img-news-inactive-1.jpg";
import inactive2 from "../img/newsImgs/img-news-inactive-2.jpg";

import NewsCard from "./NewsCard";
import MoreBtn from "./MoreBtn";

const SectionNews = styled.div`
  width: 100%;
  padding: 100px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewsHeader = styled.div`
  margin: 0px 400px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
`;

const Titles = styled.div`
  width: 800px;
  margin: 0px 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: #047bf8;
  margin-bottom: 2px;
`;

const Subtitle = styled.div`
  width: 800px;
  height: 24px;
  font-family: NotoSansCJKkr_normal;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #8c939e;
`;

const BtnLeft = styled.button`
  all: unset;
  width: 60px;
  height: 60px;
  background-image: url(${arrowLeft});
  background-size: cover;
`;

const BtnRight = styled.button`
  all: unset;
  width: 60px;
  height: 60px;
  background-image: url(${arrowRight});
  background-size: cover;
`;

const NewsCards = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 92px;
  width: 100%;
`;

class News extends Component {
  render() {
    const activeNews = [
      {
        img: inactive1,
        desc: "",
        date: ""
      },
      {
        img: active1,
        desc: `[2019 로보월드] 뉴로메카, 신제품런칭쇼에서 업그레이드된 협동로봇 ‘인디12’ 공개`,
        date: "2019.11.01"
      },
      {
        img: active2,
        desc: `5G로봇 최초 공개, 일자리 박람회도… 국내 넘어 세계 넘보는 ‘로보월드’`,
        date: "2019.11.01"
      },
      {
        img: active3,
        desc: `뉴로메카, 협동로봇 원격 관리 서비스 '인디케어' 론칭`,
        date: "2019.11.01"
      },
      {
        img: inactive2,
        desc: "",
        date: ""
      }
    ];
    const newsList = activeNews.map((news, idx) => (
      <NewsCard key={idx} img={news.img} desc={news.desc} date={news.date} />
    ));
    return (
      <SectionNews>
        <NewsHeader>
          <BtnLeft />
          <Titles>
            <Title>NEWS</Title>
            <Subtitle>뉴로메카의 다양한 소식들을 전해드립니다.</Subtitle>
          </Titles>
          <BtnRight />
        </NewsHeader>
        <NewsCards>{newsList}</NewsCards>
        <MoreBtn />
      </SectionNews>
    );
  }
}

export default News;
