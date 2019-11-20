import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
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
  margin: 120px 0px 72px 0px;
`;

const Cards = styled.ul`
  margin: 0px 400px;
  width: 1120px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
`;

class About extends Component {
  render() {
    const cardContent = [
      {
        title: "We are",
        desc: `뉴로메카는 쓰기 쉽고 저렴한 협동로봇 제공을 통해 
        제조라인 자동화와 협동로봇 생태계를 구축합니다. 중소제조기업 
        생애 첫번째 산업용 로봇, 뉴로메카가 함께 합니다.`
      },
      {
        title: "Robot",
        desc: `작업자의 안전을 보장하는 협동로봇은 물론 델타로봇 등 
        다양한 로봇 라인업을 통해 생산성 향상, 원가절감 효과와 
        산업재해 고민을 해결하세요.`
      },
      {
        title: "IndyGO",
        desc: `누구나 부담없이 누리는 협동로봇 서비스 인디고를 통해 
        로봇 전문인력이 없는 중소 제조업체에서도 부담없이 로봇 
        기술을 적용해보세요. 협동로봇 중심의 RaaS(Robot as a Service) 
        플랫폼 비즈니스 생태계를 뉴로메카가 선도합니다.`
      }
    ];
    const cardList = cardContent.map((card, idx) => {
      return <Card key={idx} title={card.title} desc={card.desc} />;
    });
    return (
      <SectionAbout>
        <Title>ABOUT US</Title>
        <Cards>{cardList}</Cards>
      </SectionAbout>
    );
  }
}

export default About;
