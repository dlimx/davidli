import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { IArticle, IAuthor } from '../../types/types';
import SEO from '../../components/SEO';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            siteUrl
          }
        }
      }
    }
  }
`;

interface ArticleSEOProps {
  article: IArticle;
  authors: IAuthor[];
  location?: Location;
  imagelocation?: string;
}

const ArticleSEO: React.FC<ArticleSEOProps> = ({ article, authors, location }) => {
  const results = useStaticQuery(siteQuery);
  const { siteUrl } = results.allSite.edges[0].node.siteMetadata;

  const authorsName = authors.map(author => author.name);
  const authorsSlug = authors.map(author => author.slug);
  const authorsBio = authors.map(author => author.bio);

  const imageLocation = `${siteUrl + article.hero.seo.src}`;

  return (
    <SEO
      authorName={authorsName}
      authorsBio={authorsBio}
      authorsSlug={authorsSlug}
      canonicalUrl={article.canonical_url}
      dateforSEO={article.dateForSEO}
      description={article.excerpt}
      image={imageLocation}
      isBlogPost
      articlepathName={siteUrl + location!.pathname}
      published={article.date}
      timeToRead={article.timeToRead}
      title={article.title}
      isSecret={article.secret}
    />
  );
};

export default ArticleSEO;
