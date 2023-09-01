import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type Locale = "it" | "en";

type useLanguageReturn = [string, (e: ChangeEvent) => void];

const LOCALE = "language";

export const useLocale = (initialTheme: Locale): useLanguageReturn => {
  const [language, setLanguage] = useState<Locale>(initialTheme);
  const { i18n } = useTranslation();

  const handleChange = (e: ChangeEvent) => {
    setLanguage(e.target.checked ? "it" : "en");
    localStorage.setItem(LOCALE, e.target.checked ? "it" : "en");
  };

  useEffect(() => {
    if (localStorage.getItem(LOCALE)) {
      let t: any = localStorage.getItem(LOCALE);
      setLanguage(t);
      document.body.setAttribute("data-language", t);
      document.documentElement.setAttribute("lang", t);
    }
  }, [initialTheme]);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.setAttribute("data-language", language);
    document.documentElement.setAttribute("lang", language);
  }, [language, initialTheme]);

  return [language, handleChange];
};
