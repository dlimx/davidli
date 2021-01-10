import * as React from 'react';
import { PageText } from '../Page/Page.Text';
import { PageLink } from '../Page/Page.Link';

export const BioIntro = () => {
  return (
    <PageText>
      Hey there{' '}
      <span aria-label="Wave Hello" role="img">
        👋
      </span>{' '}
      , my name is <strong>David (Min Xiao) Li</strong>. I&apos;m a software engineer currently based out of{' '}
      <strong>Vancouver, Canada</strong>. I currently work at <PageLink href="https://aws.amazon.com/">Amazon Web Services</PageLink>.
    </PageText>
  );
};
