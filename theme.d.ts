import { Theme, ThemeOptions } from '@mui/material/styles';
// Declare your custom theme types
declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    type: 'light' | 'dark';
    primary: string;
    primary400: string;
    primary600: string;
    primary80: string;
    primary50: string;
    primary30: string;
    secondary: string;
    secondary70: string;
    secondary50: string;
    tertiary: string;
    tertiary80: string;
    tertiary70: string;
    tertiary50: string;
    aboutimg1: string;
    aboutimg2: string;
    eduimg: string;
    expimg: string;
    contactsimg: string;
  }

  // Allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    type?: 'light' | 'dark';
    primary?: string;
    primary400?: string;
    primary600?: string;
    primary80?: string;
    primary50?: string;
    primary30?: string;
    secondary?: string;
    secondary70?: string;
    secondary50?: string;
    tertiary?: string;
    tertiary80?: string;
    tertiary70?: string;
    tertiary50?: string;
    aboutimg1?: string;
    aboutimg2?: string;
    eduimg?: string;
    expimg?: string;
    contactsimg?: string;
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

