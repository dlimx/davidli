export interface IPrism {
  token: string;
  languageJavascript: string;
  javascript: string;
  background: string;
  comment: string;
  var: string;
  number: string;
  string: string;
  constant: string;
  plain: string;
  doctype: string;
  tag: string;
  keyword: string;
  boolean: string;
  function: string;
  parameter: string;
  className: string;
  attrName: string;
  attrValue: string;
  interpolation: string;
  punctuation: string;
  'maybe-class-name': string;
  property: string;
  propertyAccess: string;
  namespace: string;
  highlight: string;
  dom: string;
  highlightBorder: string;
  operator: string;
}

export interface IColorsMode {
  title: string;
  subtitle: string;
  grey: string;
  background: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryTransparent: string;
  primaryBackground: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  secondaryTransparent: string;
  secondaryBackground: string;
  hover: string;
  gradient: string;
  articleText: string;
  progress: string;
  card: string;
  error: string;
  success: string;
  errorBackground: string;
  track: string;
  horizontalRule: string;
  inputBackground: string;
}

export interface IColors extends IColorsMode {
  prism: IPrism;

  modes: {
    dark: IColorsMode;
  };
}

export interface IFonts {
  sansSerif: string;
  serif: string;
  monospace: string;
}

export interface ITheme {
  colors: IColors;
  colorModeTransition: string;
  fonts: IFonts;
}

export interface IStyledProps {
  theme: ITheme;
}

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
