import { PageProps } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import Section from '../components/Section';

import mediaqueries from '../styles/media';
import Headings from '../components/Headings/Headings';
import { PageTitle } from '../components/Page/Page.Title';
import { PageTitleContainer } from '../components/Page/Page.TitleContainer';
import { PageText } from '../components/Page/Page.Text';
import SEO from '../components/SEO';

const AboutPage: React.FC<PageProps> = () => (
  <>
    <SEO title="About Me" />
    <Layout>
      <Section>
        <PageTitleContainer>
          <PageTitle>About Me</PageTitle>
        </PageTitleContainer>
        <PageText>Hello World</PageText>
      </Section>
    </Layout>
  </>
);

export default AboutPage;
