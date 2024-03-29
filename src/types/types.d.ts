import React from 'react';

export interface IPaginator {
  pageCount: number;
  index: number;
  pathPrefix: string;
}

type IGatsbyImageData = Record<string, any>;

export interface IAuthor {
  authorsPage?: boolean;
  featured?: boolean;
  name: string;
  slug: string;
  bio: string;
  avatar: {
    image: {
      gatsbyImageData: IGatsbyImageData;
    };
    full: {
      gatsbyImageData: IGatsbyImageData;
    };
    medium: {
      gatsbyImageData: IGatsbyImageData;
    };
    large: {
      gatsbyImageData: IGatsbyImageData;
    };
    small: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  social?: {
    name: string;
    url: string;
  }[];
}

export interface IArticle {
  slug: string;
  authors: IAuthor[];
  excerpt: string;
  body: string;
  title: string;
  id: string;
  hero: {
    full: {
      gatsbyImageData: IGatsbyImageData;
    };
    preview: {
      gatsbyImageData: IGatsbyImageData;
    };
    regular: {
      gatsbyImageData: IGatsbyImageData;
    };
    narrow: {
      gatsbyImageData: IGatsbyImageData;
    };
    seo: {
      src?: string;
    };
  };
  date: string;
  secret: boolean;
  canonical_url?: string;
  dateForSEO?: string;
  timeToRead?: number;
  subscription?: boolean;
}

interface IArticleQuery {
  edges: {
    node: IArticle;
  }[];
}

export interface IProgress {
  height: number;
  offset: number;
  title: string;
  mode: string;
  onClose?: () => void;
}

export type IIcon = React.FC<{
  fill?: string;
  width?: string | number;
  height?: string | number;
}>;

interface IPageContext extends IPaginator {
  article: IArticle;
  authors: IAuthor[];
  mailchimp: boolean;
  next: IArticle[];
  additionalContext: {
    author: IAuthor;
    authors?: IAuthor[];
  };
  group: IArticle[];
}

export type Template = React.FC<{
  pageContext: IPageContext;
  location?: Location;
}>;

export interface IOption {
  name: string;
}

export interface IMeta {
  name?: string;
  content?: string;
  charset?: string;
  'http-equiv'?: string;
  itemprop?: string;
  property?: string;
  value?: string;
}

declare global {
  interface Document {
    selection?: {
      type?: string;
      createRange?: () => { text: string; parentElement: Function };
    };
  }

  declare module '*.pdf';
}
