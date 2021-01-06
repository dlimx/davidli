import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import NavigationFooter from '../Navigation/Navigation.Footer';
import NavigationHeader from '../Navigation/Navigation.Header';
import { globalStyles } from '../../styles';
import ArticlesContextProvider from '../../sections/main/Main.ArticlesList.Context';

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: ${p => p.theme.colorModeTransition};
  min-height: 100vh;
`;

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{}> = ({ children }) => {
  const [colorMode] = useColorMode();

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    parent!.postMessage({ theme: colorMode }, '*');
  }, [colorMode]);

  return (
    <ArticlesContextProvider>
      <Container>
        <Global styles={globalStyles} />
        <NavigationHeader />
        {children}
        <NavigationFooter />
      </Container>
    </ArticlesContextProvider>
  );
};

export default Layout;
