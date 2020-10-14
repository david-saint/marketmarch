import {DefaultTheme} from 'react-native-paper';
import {AppStyles} from 'constants';

export const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: AppStyles.colors.primaryColor,
  },
  fonts: {
    default: {
      regular: {
        fontFamily: AppStyles.fonts.FONT_REGULAR,
        fontWeight: '400',
      },
      bold: {
        fontFamily: AppStyles.fonts.FONT_BOLD,
        fontWeight: '700',
      },
      light: {
        fontFamily: AppStyles.fonts.FONT_LIGHT,
        fontWeight: '300',
      },
      thin: {
        fontFamily: AppStyles.fonts.FONT_THIN,
        fontWeight: '200',
      },
    },
  },
};
