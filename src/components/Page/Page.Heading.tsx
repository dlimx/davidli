import styled from '@emotion/styled';
import Headings from '../Headings/Headings';
import mediaqueries from '../../styles/media';

export const PageHeading = styled(Headings.h2)<{ paddedTop?: boolean; paddedBottom?: boolean }>`
  font-size: 28px;
  font-family: ${p => p.theme.fonts.serif};
  font-weight: 500;
  line-height: 1.32;
  margin-top: ${p => (p.paddedTop ? '40px' : '0')};
  margin-bottom: ${p => (p.paddedBottom ? '20px' : '0')};

  ${mediaqueries.tablet`
    font-size: 24px;
  `}

  ${mediaqueries.phablet`
    font-size: 20px;
  `}
`;
