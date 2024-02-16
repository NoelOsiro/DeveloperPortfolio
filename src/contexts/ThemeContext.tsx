'use client'
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { createTheme, CustomTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { themeData } from '@/data/themeData';

// Define types
type SetHandleDrawer = () => void;

interface ThemeContextValue {
  theme: CustomTheme;
  drawerOpen: boolean;
  setHandleDrawer: SetHandleDrawer;
}

// Create the context with an optional initial value
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

// ThemeContextProvider component
export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  // Initialize state with correct type
  const [theme, setTheme] = useState<ThemeContextValue['theme']>(themeData.theme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle drawer
  const setHandleDrawer: SetHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Context value
  const value: ThemeContextValue = {
    theme,
    drawerOpen,
    setHandleDrawer,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using the theme context values
export function useThemeContext() {
  const context = useContext(ThemeContext);

  // Throw error if used outside the provider
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }

  return context;
}
