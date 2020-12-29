import React from 'react';
import styled from '@emotion/styled';

import Section from '../components/Section';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Paginator from '../components/Navigation/Navigation.Paginator';

import { Template } from '../types/types';
import AuthorHero from '../sections/author/Author.Hero';
import AuthorArticles from '../sections/author/Author.Articles';

const AuthorPaginator = styled.div`
  text-align: center;
`;

const ArticlesPage: Template = ({ location, pageContext }) => {
  const { author } = pageContext.additionalContext;
  const articles = pageContext.group;

  return (
    <Layout>
      <SEO pathname={location!.pathname} title={author.name} description={author.bio} />
      <Section narrow>
        <AuthorHero author={author} />
        <AuthorArticles articles={articles} />
        <AuthorPaginator>
          <Paginator {...pageContext} />
        </AuthorPaginator>
      </Section>
    </Layout>
  );
};

export default ArticlesPage;
