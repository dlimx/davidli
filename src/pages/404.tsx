import { PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Section from '../components/Section';
import { PageTitleContainer } from '../components/Page/Page.TitleContainer';
import { PageTitle } from '../components/Page/Page.Title';
import { PageText } from '../components/Page/Page.Text';
import SEO from '../components/SEO';

const Error404Page: React.FC<PageProps> = () => (
  <>
    <SEO title="404 - Oops!" />
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
