import React, { Component } from "react";
import styled from "styled-components";

const SectionProducts = styled.section`
  height: 814px;
  background-color: #e6e8ea;
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
  margin: 120px 0px 72px 0px;
`;

const Video = styled.video`
  width: 855px;
  height: 482px;
`;

class Products extends Component {
  render() {
    const videoUrl =
      "https://video.wixstatic.com/video/a83c47_d30cf97ca5bd4259a70e3d5443407140/1080p/mp4/file.mp4";
    return (
      <SectionProducts>
        <Title>PRODUCTS</Title>
        <Video controls>
          <source src={videoUrl} type="video/mp4" />
        </Video>
      </SectionProducts>
    );
  }
}

export default Products;
