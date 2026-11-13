"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import en from "@/i18n/en.json";
import my from "@/i18n/my.json";
import es from "@/i18n/es.json";
import hi from "@/i18n/hi.json";
import zh from "@/i18n/zh.json";
import ja from "@/i18n/ja.json";
import ko from "@/i18n/ko.json";
import fr from "@/i18n/fr.json";
import de from "@/i18n/de.json";
import ar from "@/i18n/ar.json";

const dictionaries: Record<string, any> = { en, my, es, hi, zh, ja, ko, fr, de, ar };

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "my", label: "မြန်မာ" },
  { code: "es", label: "Español" },
  { code: "hi", label: "हिन्दी" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "ar", label: "العربية" },
];

type Ctx = { lang: string; setLang: (l: string) => void; t: (key: string) => string };
const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState("en");
  useEffect(() => {
    const saved = localStorage.getItem("lt-lang");
    if (saved && dictionaries[saved]) setLangState(saved);
  }, []);
  const setLang = (l: string) => {
    setLangState(l);
    localStorage.setItem("lt-lang", l);
  };
  const t = (key: string) => {
    const dict = dictionaries[lang] || dictionaries.en;
    return (dict && dict[key]) || dictionaries.en[key] || key;
  };
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useT() { return useContext(LanguageContext); }