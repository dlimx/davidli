import React from 'react';
import styled from '@emotion/styled';

import { Template } from '../types/types';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Layout from '../components/Layout/Layout';
import Paginator from '../components/Navigation/Navigation.Paginator';

import MainHero from '../sections/main/Main.Hero';
import MainArticlesList from '../sections/main/Main.ArticlesList';

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

const ArticlesPage: Template = ({ location, pageContext }) => {
  const articles = pageContext.group;
  const { authors } = pageContext.additionalContext;

  return (
    <Layout>
      <SEO pathname={location!.pathname} />
      <MainHero authors={authors!} />
      <Section narrow>
        <MainArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
    </Layout>
  );
};

export default ArticlesPage;
