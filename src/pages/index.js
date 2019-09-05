import React from 'react';
import styled from 'styled-components';

import Layout from '../global/Layout';
import Image from '../components/Image';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #555;
  margin-top: 60px;
`;

const Label = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 12px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;

const IndexPage = () => (
  <Layout>
    <Page>
      <Image />
      <Heading>GatsbyJS + Storybook</Heading>
      <Label>Starter</Label>
    </Page>
  </Layout>
);

export default IndexPage;
