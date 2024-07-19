import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

export const useTheme = () => useContext(ThemeContext);
