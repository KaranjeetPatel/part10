import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTertiary: 'white',
    primary: '#0366d6',
    error: '#d73a4a',
    appBarBackground: '#24292e',
    mainBackground: 'white',
    borderColor: '#f0f0f0',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  borderRadius: {
    normal: 5,
  },
};

export default theme;