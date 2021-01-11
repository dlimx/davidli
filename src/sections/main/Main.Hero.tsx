import React, { useContext } from 'react';
import styled from '@emotion/styled';

import Icons from '../../icons';
import mediaqueries from '../../styles/media';
import { IAuthor } from '../../types/types';
import Bio from '../../components/Bio';
import Section from '../../components/Section';

import { GridLayoutContext } from './Main.ArticlesList.Context';
import { BioIntro } from '../../components/Bio/Bio.Intro';
import { PageText } from '../../components/Page/Page.Text';

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;

  ${mediaqueries.desktop`
    margin-bottom: 80px;
  `};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `};
`;

const GridControlsContainer = styled.div`
  display: flex;
  align-items: center;

  ${mediaqueries.tablet`
    display: none;
  `};
`;

const HeadingContainer = styled.div`
  margin: 100px 0;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  color: ${p => p.theme.colors.title};
  width: 100%;

  a {
    color: ${p => p.theme.colors.primary};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const HeroHeadingHighlight = styled.span`
  background-color: ${p => p.theme.colors.secondaryBackground};
`;

const BioContainer = styled.div`
  margin-right: 40px;

  ${mediaqueries.tablet`
    margin-right: 0;
  `};
`;

const GridButton = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.25s;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover {
    background: ${p => p.theme.colors.hover};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    border: 2px solid ${p => p.theme.colors.primary};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 50%;
  }

  svg {
    opacity: ${p => (p.active ? 1 : 0.25)};
    transition: opacity 0.2s;

    path {
      fill: ${p => p.theme.colors.title};
    }
  }
`;

const MainHero: React.FC<{ authors: IAuthor[] }> = ({ authors }) => {
  const { gridLayout = 'tiles', hasSetGridLayout, setGridLayout } = useContext(GridLayoutContext);

  const tilesIsActive = hasSetGridLayout && gridLayout === 'tiles';

  return (
    <Section relative id="Articles__Hero">
      <HeadingContainer>
        <HeroHeading>
          Let&apos;s build a <HeroHeadingHighlight>brighter tomorrow</HeroHeadingHighlight>
        </HeroHeading>
      </HeadingContainer>
      <SubheadingContainer>
        <BioContainer>
          <BioIntro />
          <PageText>All writings and thoughts represent my thoughts only, and not those of any organization or employer.</PageText>
        </BioContainer>
        <GridControlsContainer>
          <GridButton
            onClick={() => setGridLayout('tiles')}
            active={tilesIsActive}
            data-a11y="false"
            title="Show articles in Tile grid"
            aria-label="Show articles in Tile grid"
          >
            <Icons.Tiles />
          </GridButton>
          <GridButton
            onClick={() => setGridLayout('rows')}
            active={!tilesIsActive}
            data-a11y="false"
            title="Show articles in Row grid"
            aria-label="Show articles in Row grid"
          >
            <Icons.Rows />
          </GridButton>
        </GridControlsContainer>
      </SubheadingContainer>
    </Section>
  );
};

export default MainHero;
