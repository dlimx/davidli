import styled from '@emotion/styled';

export const PageLink = styled.a`
  color: ${p => p.theme.colors.primary};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primaryLight};
  }
`;
