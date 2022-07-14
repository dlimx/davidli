import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../Section';
import SocialLinks from '../SocialLinks';

import mediaqueries from '../../styles/media';

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;

const HorizontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterText = styled.div`
  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}

  ${mediaqueries.phablet`
    margin: 120px auto 100px;
  `}
`;

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
  }
`;

const Footer: React.FC<{}> = () => {
  const results = useStaticQuery(siteQuery);
  const { name, social } = results.allSite.edges[0].node.siteMetadata;

  const copyrightDate = (() => {
    return `2017–${new Date().getFullYear()}`;
  })();

  return (
    <>
      <Section narrow>
        <HorizontalRule />
        <FooterContainer>
          <FooterText>
            © {copyrightDate} {name}
          </FooterText>
          <div>
            <SocialLinks links={social} />
          </div>
        </FooterContainer>
      </Section>
    </>
  );
};

export default Footer;
