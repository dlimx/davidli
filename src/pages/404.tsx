import { PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Section from '../components/Section';

const Error404Page: React.FC<PageProps> = () => (
  <Layout>
    <Section>
      <h1>You are here!</h1>
      <h2>But nothing found for you #404</h2>
    </Section>
  </Layout>
);

export default Error404Page;
