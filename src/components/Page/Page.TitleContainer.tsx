import styled from '@emotion/styled';
import mediaqueries from '../../styles/media';

export const PageTitleContainer = styled.div`
  margin: 100px 0;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;
