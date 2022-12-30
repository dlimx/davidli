/* eslint-disable */

// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js

module.exports = {
  articles: `{
    articles: allArticle(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          slug
          secret
          title
          author
          date(formatString: "MMMM Do, YYYY")
          dateForSEO: date
          timeToRead
          excerpt
          canonical_url
          subscription
          body
          hero {
            full: childImageSharp {
              gatsbyImageData(width: 944, quality: 100)
            }
            regular: childImageSharp {
              gatsbyImageData(width: 680, quality: 100)
            }
            narrow: childImageSharp {
              gatsbyImageData(width: 457, quality: 100)
            }
            seo: childImageSharp {
              gatsbyImageData(layout: FIXED, width: 1200, quality: 100)
            }
          }
        }
      }
    }
  }`,
  authors: `{
    authors: allAuthor {
      edges {
        node {
          authorsPage
          bio
          id
          name
          featured
          social {
            url
          }
          slug
          avatar {
            small: childImageSharp {
              gatsbyImageData(width: 50, quality: 100)
            }
            medium: childImageSharp {
              gatsbyImageData(width: 100, quality: 100)
            }
            large: childImageSharp {
              gatsbyImageData(width: 328, quality: 100)
            }
          }
        }
      }
    }
  }`,
};
