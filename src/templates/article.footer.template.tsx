import React from 'react';

import { Template } from '../types/types';
import Subscription from '../components/Subscription';

const ArticleFooter: Template = ({ pageContext }) => {
  const { article, mailchimp } = pageContext;

  return <>{mailchimp && article.subscription && <Subscription />}</>;
};

export default ArticleFooter;
