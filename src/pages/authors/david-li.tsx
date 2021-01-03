import { PageProps, navigate } from 'gatsby';
import * as React from 'react';

const AuthorPage: React.FC<PageProps> = () => {
  // escape hatch for generated rendering page
  if (typeof window !== 'undefined') {
    navigate('/about', { replace: true });
  }

  return null;
};

export default AuthorPage;
