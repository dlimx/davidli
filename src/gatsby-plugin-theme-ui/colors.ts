import prism from './prism';
import { IColors } from '../types/style';

const materialPrimary = '#ff6090';
const materialPrimary700 = '#b0003a';
const materialPrimary300 = '#ff6090';
const materialSecondary = '#2196f3';
const materialSecondary700 = '#0069c0';
const materialSecondary300 = '#6ec6ff';

const colors: IColors = {
  prism,

  title: '#000000',
  subtitle: '#73737D',
  grey: '#73737D',
  background: '#fafafa',
  primary: materialPrimary,
  primaryDark: materialPrimary700,
  primaryLight: materialPrimary300,
  primaryTransparent: `${materialPrimary}33`,
  secondary: materialSecondary,
  secondaryDark: materialSecondary700,
  secondaryLight: materialSecondary300,
  secondaryTransparent: `${materialSecondary}33`,
  hover: 'rgba(0, 0, 0, 0.07)',
  gradient: 'linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #D9DBE0 100%)',
  articleText: '#08080B',
  track: 'rgba(8, 8, 11, 0.3)',
  progress: '#000000',
  card: '#ffffff',
  error: '#EE565B',
  success: '#46B17B',
  errorBackground: 'rgba(238, 86, 91, 0.1)',
  horizontalRule: 'rgba(8, 8, 11, 0.15)',
  inputBackground: 'rgba(0, 0, 0, 0.05)',
  modes: {
    dark: {
      grey: '#73737D',
      title: '#ffffff',
      subtitle: '#ffffff',
      primary: materialSecondary,
      primaryDark: materialSecondary300,
      primaryLight: materialSecondary700,
      primaryTransparent: `${materialSecondary}33`,
      secondary: materialPrimary,
      secondaryDark: materialPrimary300,
      secondaryLight: materialPrimary700,
      secondaryTransparent: `${materialPrimary}33`,
      background: '#111216',
      hover: 'rgba(255, 255, 255, 0.07)',
      gradient: 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
      articleText: '#ffffff',
      track: 'rgba(255, 255, 255, 0.3)',
      progress: '#ffffff',
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
