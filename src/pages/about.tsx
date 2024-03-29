import { graphql, PageProps, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout/Layout';
import Section from '../components/Section';
import resume from '../assets/DavidLi-Resume.pdf';

import { PageTitle } from '../components/Page/Page.Title';
import { PageTitleContainer } from '../components/Page/Page.TitleContainer';
import { PageText } from '../components/Page/Page.Text';
import SEO from '../components/SEO';
import Image from '../components/Image';
import { PageHeading } from '../components/Page/Page.Heading';
import { PageLink } from '../components/Page/Page.Link';
import mediaqueries from '../styles/media';
import { BioIntro } from '../components/Bio/Bio.Intro';

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${mediaqueries.phablet`
    flex-direction: column;
  `};
`;

const PageDetail = styled.div`
  max-width: 66%;
  padding-right: 30px;
  ${mediaqueries.phablet`
    max-width: 100%;
    padding-right: 0;
  `};
`;

const ImageContainer = styled.div`
  width: 33%;
  height: 100%;
  box-shadow: 0 30px 60px 5px rgba(0, 0, 0, 0.3), 0 18px 36px 5px rgba(0, 0, 0, 0.33);
  transition: transform 0.3s var(--ease-out-quad), box-shadow 0.3s var(--ease-out-quad);
  ${mediaqueries.phablet`
    width: 100%;
  `};
`;

const AboutPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profile-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <>
      <SEO title="About Me" />
      <Layout>
        <Section>
          <PageTitleContainer>
            <PageTitle>About Me</PageTitle>
          </PageTitleContainer>
          <Row>
            <PageDetail>
              <BioIntro />
              <PageText>
                On a day-to-day basis, I am often found exploring the city. Some of my hobbies include writing, coding, and volleyball. I
                love food and drink{' '}
                <span aria-label="Beer" role="img">
                  🥂
                </span>{' '}
                (feel free to reach out for lists of recommendations), and really exploring the unwandered paths. I&apos;m always down to
                check go to a museum, or see a show. Or there&apos;s always an invite to come over for food and drink!
              </PageText>
              <PageText>
                In New York, I&apos;ve been finding the most interesting people and diverse stories. It&apos;s been really cool seeing the
                artistic and the cultural sides of life, while enjoying the benefits of the one of the world&apos;s largest and most
                exciting cities.
              </PageText>
              <PageText>
                I&apos;ve lived in quite a few cities in North America. I moved around Canada, having lived in Vancouver, Toronto and
                Montreal last. Who knows where the next adventure will take us?
              </PageText>
            </PageDetail>
            <ImageContainer>
              <Image src={data?.file?.childImageSharp?.gatsbyImageData} alt="Picture of David Li" />
            </ImageContainer>
          </Row>

          <PageHeading paddedTop paddedBottom>
            Experience
          </PageHeading>

          <PageText>
            I currently work on <PageLink href="https://asana.com/product/goals">Asana Goals</PageLink>. Our goal (heh) is to connect
            company mission with day-to-day work, providing clarity and a sense of purpose to the routine tasks and projects you complete.
          </PageText>

          <PageText>
            I last worked on <PageLink href="https://aws.amazon.com/connect/">Amazon Connect</PageLink>, a world-class call center as a
            service available in the cloud. Specifically, my team worked on{' '}
            <PageLink href="https://aws.amazon.com/connect/contact-lens/">Contact Lens</PageLink>, a machine-learning driven analytics and
            search for your customer&apos;s phone calls and records. I designed systems built for web-scale, with billions of piecse of data
            points every day, serving as the backbone of the internet. I built finely-tuned UIs and APIs to delight our users and solve the
            problems that they didn&apos;t even know they had.
          </PageText>
          <PageText>
            Before that, I worked at <PageLink href="https://www.quartermaster.house/homeowner/">Quartermaster</PageLink>, a startup
            connecting local communities with your next door neighbors and small business. I led UI, building experiences for homeowners and
            pros that made their day-to-day life more convenient.
          </PageText>

          <PageText style={{ fontSize: 24 }}>
            <PageLink href={resume} download>
              Resume
            </PageLink>
          </PageText>

          <PageHeading paddedTop paddedBottom>
            Contact
          </PageHeading>
          <PageText>
            While always busy, I&apos;m always interested in the next challenge - especially solving the problems that really move the
            needle, and making the world a better place.
          </PageText>
          <PageText>
            Drop me an email at <PageLink href="mailto:me@davidli.io?subject=Hello!">me@davidli.io</PageLink>.
          </PageText>
        </Section>
      </Layout>
    </>
  );
};

export default AboutPage;
