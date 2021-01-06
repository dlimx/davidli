import { PageProps } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import Section from '../components/Section';
import { PageTitleContainer } from '../components/Page/Page.TitleContainer';
import { PageTitle } from '../components/Page/Page.Title';
import { PageText } from '../components/Page/Page.Text';

const Error404Page: React.FC<PageProps> = () => (
  <>
    <Helmet>
      <title>404 - Oops!</title>
    </Helmet>
    <Layout>
      <Section>
        <PageTitleContainer>
          <PageTitle>404 - Oops!</PageTitle>
        </PageTitleContainer>
        <PageText>Hello World</PageText>
      </Section>
    </Layout>
  </>
);

export default Error404Page;
