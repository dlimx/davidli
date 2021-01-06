import styled from '@emotion/styled';
import mediaqueries from '../../styles/media';

export const PageText = styled.p`
  line-height: 1.756;
  font-size: 18px;
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.sansSerif};
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 0 35px;
  width: 100%;
  max-width: 680px;
  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;
