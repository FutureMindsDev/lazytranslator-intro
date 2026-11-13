"use client";
import Link from "next/link";
import Image from "next/image";
import { useT, LANGUAGES } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useT();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image src="/favicon.png" alt="LazyTranslator logo" width={128} height={128} sizes="36px" className="h-9 w-9 rounded-2xl border border-border object-cover shadow-sm" />
          <span>LazyTranslator</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          <Link href="#features" className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Features</Link>
          <Link href="#privacy" className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Privacy</Link>
          <Link href="#download" className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Download</Link>
        </div>
        <div className="flex items-center gap-2">
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="rounded-full border border-border bg-card px-3 py-1.5 pr-8 text-sm">
            {LANGUAGES.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
          </select>
        </div>
      </nav>
    </header>
  );
}