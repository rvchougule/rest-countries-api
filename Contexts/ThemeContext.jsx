import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setISDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <>
      <ThemeContext.Provider value={[isDark, setISDark]}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
