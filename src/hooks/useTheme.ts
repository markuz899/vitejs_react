import { useEffect, useState } from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type Theme = "dark" | "light";

type useThemeReturn = [string, (e: ChangeEvent) => void];

const LOCAL_THEME = "theme";

export const useTheme = (initialTheme: Theme): useThemeReturn => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const handleChange = (e: ChangeEvent) => {
    setTheme(e.target.checked ? "dark" : "light");
    localStorage.setItem(LOCAL_THEME, e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    if (localStorage.getItem(LOCAL_THEME)) {
      let t: any = localStorage.getItem(LOCAL_THEME);
      setTheme(t);
      document.body.setAttribute("data-theme", t);
      document.documentElement.setAttribute("class", t);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  return [theme, handleChange];
};
