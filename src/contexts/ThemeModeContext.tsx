import { createContext } from "react";
import { ThemeProvider } from "styled-components";

import { useDarkMode } from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../styles/theme";

interface IThemeModeContext {
  theme: typeof darkTheme | typeof lightTheme;
  toggleTheme: any;
  children?: React.ReactNode;
}

export const ThemeModeContext = createContext({} as IThemeModeContext);

export const ThemeModeProvider: React.FC<IThemeModeContext> = ({
  children,
}) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeModeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
