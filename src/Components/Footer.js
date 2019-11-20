import React, { Component } from "react";

import styled from "styled-components";

const FooterBox = styled.footer`
  padding: 37px 485px 35px 396px;
`;

const CompanyInfo = styled.div`
  height: 60px;
  font-family: NotoSansCJKkr_normal;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color: #8c939e;
  margin-bottom: 1px;
`;

const CopyRight = styled.div`
  width: 500px;
  height: 18px;
  font-family: NotoSansCJKkr_normal;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: -0.25px;
  color: #aaafb6;
`;

class Footer extends Component {
  render() {
    return (
      <FooterBox>
        <CompanyInfo>
          (주)뉴로메카 / 대표 박종훈 / 사업자 등록번호 132-86-13766 / FAX
          070-4791-3103 / 구매문의 : sales@neuromeka.com
          <br /> [본 사] 서울시 성동구 연무장5가길 7 성수역 현대테라스타워 W동
          15층
        </CompanyInfo>
        <CopyRight>&copy; 2019 Neuromeka. All rights reserved.</CopyRight>
      </FooterBox>
    );
  }
}

export default Footer;
