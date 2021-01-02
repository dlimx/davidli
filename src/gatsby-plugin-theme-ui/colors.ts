import prism from './prism';
import { IColors } from '../types/style';

const materialPrimary = '#e91e63';
const materialPrimaryDark = '#e91e63';
const materialPrimaryLight = '#e91e63';
const materialSecondary = '#2196f3';
const materialSecondaryDark = '#2196f3';
const materialSecondaryLight = '#2196f3';

const colors: IColors = {
  prism,

  title: '#000',
  subtitle: '#73737D',
  grey: '#73737D',
  background: '#fafafa',
  primary: materialPrimary,
  primaryDark: materialPrimaryDark,
  primaryLight: materialPrimaryLight,
  secondary: materialSecondary,
  secondaryDark: materialSecondaryDark,
  secondaryLight: materialSecondaryLight,
  hover: 'rgba(0, 0, 0, 0.07)',
  gradient: 'linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #D9DBE0 100%)',
  articleText: '#08080B',
  track: 'rgba(8, 8, 11, 0.3)',
  progress: '#000',
  card: '#fff',
  error: '#EE565B',
  success: '#46B17B',
  errorBackground: 'rgba(238, 86, 91, 0.1)',
  horizontalRule: 'rgba(8, 8, 11, 0.15)',
  inputBackground: 'rgba(0, 0, 0, 0.05)',
  modes: {
    dark: {
      grey: '#73737D',
      title: '#fff',
      subtitle: '#fff',
      primary: materialSecondary,
      primaryDark: materialSecondaryDark,
      primaryLight: materialPrimaryLight,
      secondary: materialPrimary,
      secondaryDark: materialPrimaryDark,
      secondaryLight: materialSecondaryLight,
      background: '#111216',
      hover: 'rgba(255, 255, 255, 0.07)',
      gradient: 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
      articleText: '#fff',
      track: 'rgba(255, 255, 255, 0.3)',
      progress: '#fff',
      card: '#1D2128',
      error: '#EE565B',
      success: '#46B17B',
      errorBackground: 'rgba(238, 86, 91, 0.1)',
      horizontalRule: 'rgba(255, 255, 255, 0.15)',
      inputBackground: 'rgba(255, 255, 255, 0.07)',
    },
  },
};

export default colors;
