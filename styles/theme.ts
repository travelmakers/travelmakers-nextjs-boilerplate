'use client';

import baseStyled, {
  IColors,
  IDevice,
  IDeviceSizes,
  IFontSizes,
  IInterval,
  IMargins,
  IPaddings,
  IVerticalInterval,
  ThemedStyledInterface,
} from 'styled-components';

import media from './media';

const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes: IFontSizes = {
  header1: calcRem(50), // NOTE: mobile: 34
  header2: calcRem(32), // NOTE: mobile: 24
  header3: calcRem(28), // NOTE: mobile: 22
  header4: calcRem(24), // NOTE: mobile: 18
  subHeader1: calcRem(22), // NOTE: mobile: 16
  subHeader2: calcRem(20), // NOTE: mobile: 15
  subHeader3: calcRem(18), // NOTE: mobile: 14
  body1: calcRem(17),
  body2: calcRem(16),
  body3: calcRem(15),
  body4: calcRem(14),
  small: calcRem(13),
  caption1: calcRem(12), // NOTE: mobile: 10
  caption2: calcRem(10),
};

const paddings: IPaddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins: IMargins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval: IInterval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval: IVerticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes: IDeviceSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 450,
  tablet: 768,
  tabletL: 1024,
  maxSize: 1200,
};

const colors: IColors = {
  black_900: '#000000',
  black_800: '#262626',
  black_700: '#434343',
  black_600: '#555555',
  black_500: '#7B7B7B',
  black_400: '#9D9D9D',
  black_300: '#C4C4C4',
  black_200: '#D9D9D9',
  black_100: '#E9E9E9',
  black_50: '#F5F5F5',
  black_0: '#FFFFFF',

  green_50: '#E6F5EB',
  green_300: '#70C68E',
  green_500: '#27AE5F',

  red_100: '#FCCED4',
  red_400: '#EB5757',
  red_600: '#E13F3D',

  blue_50: '#E3F1FF',
  blue_200: '#91C7FF',
  blue_600: '#2F81ED',
  blue_700: '#2E6FD9',
  blue_900: '#283EA7',

  purple_900: '#4F00B5',
  purple_800: '#630FC4',
  purple_700: '#7019CA',
  purple_600: '#7E24D3',
  purple_500: '#882AD9',
  purple_400: '#9B51E0',
  purple_300: '#AE73E6',
  purple_200: '#C59EED',
  purple_100: '#DCC5F4',
  purple_50: '#F2E7FA',

  pink_900: '#76004E',
  pink_800: '#9B0058',
  pink_700: '#B1005D',
  pink_600: '#C70063',
  pink_500: '#D70067',
  pink_400: '#DB217F',
  pink_300: '#E05196',
  pink_200: '#E785B4',
  pink_100: '#F0B5D2',
  pink_50: '#F9E2ED',
};

const device: IDevice = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS}px)`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM}px)`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL}px)`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet}px)`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL}ㅔㅌ)`,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
  media,
};

export type CustomTheme = typeof theme;
export const styled =
  baseStyled as unknown as ThemedStyledInterface<CustomTheme>;

export { theme };
