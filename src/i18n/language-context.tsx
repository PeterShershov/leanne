import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LanguageContext, type LanguageContextValue } from "./context";
import { type Lang, translations } from "./translations";

const STORAGE_KEY = "leanne-lang";

const DEFAULT_LANG: Lang = "he";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start at the default language. The prerendered HTML is Hebrew, so
  // reading localStorage during render (or during SSR, where it doesn't exist)
  // would mismatch hydration; the stored preference is restored on mount below.
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  const dir = lang === "he" ? "rtl" : "ltr";

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "he") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = translations[lang].meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        translations[lang].meta.description,
      );
    }
  }, [lang, dir]);

  // Persisting on explicit choice rather than in an effect keeps the restore
  // above from racing a write of the not-yet-restored default.
  const toggleLanguage = useCallback(() => {
    const next: Lang = lang === "he" ? "en" : "he";
    localStorage.setItem(STORAGE_KEY, next);
    setLang(next);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir, t: translations[lang], toggleLanguage }),
    [lang, dir, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
