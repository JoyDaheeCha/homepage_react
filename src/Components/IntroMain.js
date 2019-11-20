import React, { Component } from "react";
import styled from "styled-components";

const MainInfo = styled.div`
  margin: 276px 0px 0px 400px;
`;

const Title = styled.div`
  width: 181px;
  height: 28px;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #fffefe;
  margin-bottom: 16px;
`;

const Logo = styled.img`
  width: 648px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 56px;
`;

const Devider = styled.hr`
  border: none;
  width: 72px;
  height: 4px;
  background-color: white;
  margin-bottom: 24px;
`;

const Desc = styled.div`
  /*width: 559px;*/
  height: 60px;
  font-family: NotoSansCJKkr_light;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #fffefe;
  margin-bottom: 72px;
`;

const DetailBtn = styled.button`
  width: 172px;
  height: 58px;
  border-radius: 6px;
  border: solid 3px white;
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
`;

class IntroMain extends Component {
  render() {
    return (
      <MainInfo>
        <Title>Smart &amp; Connected!</Title>
        <Logo src={this.props.logo} alt="logo" />
        <Devider />
        <Desc>
          협동로봇 중심의RaaS(Robot as a Service) 플랫폼 비즈니스 생태계,
          <br />
          축적된 로봇 기술을 공유하여 생산성 향상에 기여하고자 합니다.
        </Desc>
        <DetailBtn>Detail View</DetailBtn>
      </MainInfo>
    );
  }
}

export default IntroMain;
