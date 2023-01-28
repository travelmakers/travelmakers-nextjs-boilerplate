import 'styled-components';

/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */

declare module 'styled-components' {
  export interface IFontSizes {
    header1: string;
    header2: string;
    header3: string;
    header4: string;
    subHeader1: string;
    subHeader2: string;
    subHeader3: string;
    body1: string;
    body2: string;
    body3: string;
    body4: string;
    small: string;
    caption1: string;
    caption2: string;
  }
  export interface IPaddings {
    small: string;
    base: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  }
  export interface IColors {
    black_900: string;
    black_800: string;
    black_700: string;
    black_600: string;
    black_500: string;
    black_400: string;
    black_300: string;
    black_200: string;
    black_100: string;
    black_50: string;
    black_0: string;

    green_50: string;
    green_300: string;
    green_500: string;

    red_100: string;
    red_400: string;
    red_600: string;

    blue_50: string;
    blue_200: string;
    blue_600: string;
    blue_700: string;
    blue_900: string;

    purple_900: string;
    purple_800: string;
    purple_700: string;
    purple_600: string;
    purple_500: string;
    purple_400: string;
    purple_300: string;
    purple_200: string;
    purple_100: string;
    purple_50: string;

    pink_900: string;
    pink_800: string;
    pink_700: string;
    pink_600: string;
    pink_500: string;
    pink_400: string;
    pink_300: string;
    pink_200: string;
    pink_100: string;
    pink_50: string;
  }
  export interface IDeviceSizes {
    mobileS: number;
    mobileM: number;
    mobileL: number;
    tablet: number;
    tabletL: number;
    maxSize: number;
  }
  export interface IDevice {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    tabletL: string;
  }
  export interface IMargins {
    small: string;
    base: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  }
  export interface IInterval {
    base: string;
    lg: string;
    xl: string;
    xxl: string;
  }
  export interface IVerticalInterval {
    base: string;
  }

  export interface IMedia {
    mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
    tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
    desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
  }
  export interface DefaultTheme {
    fontSizes: IFontSizes;
    paddings: IPaddings;
    colors: IColors;
    deviceSizes: IDeviceSizes;
    device: IDevice;
    margins: IMargins;
    interval: IInterval;
    verticalInterval: IVerticalInterval;
    media: IMedia;
  }
}
