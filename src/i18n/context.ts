import { createContext } from "react";
import { type Lang, translations } from "./translations";

export interface LanguageContextValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: (typeof translations)[Lang];
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
