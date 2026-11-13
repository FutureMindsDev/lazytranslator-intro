"use client";
import { useEffect, useRef, useState } from "react";
import { useT, LANGUAGES } from "@/context/LanguageContext";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "features", label: "Features" },
  { id: "how", label: "How" },
  { id: "privacy", label: "Privacy" },
  { id: "download", label: "Download" },
];

export default function Home() {
  const { t, lang, setLang } = useT();
  const [active, setActive] = useState("hero");
  const [release, setRelease] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    // reveal
    const rev = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => rev.observe(el));
    return () => { obs.disconnect(); rev.disconnect(); };
  }, []);

  useEffect(() => {
    fetch("https://github.com/FutureMindsDev/homebrew-lazytranslator/releases/latest/download/latest.json")
      .then((r) => r.json())
      .then((d) => setRelease(d))
      .catch(() => setRelease(null));
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadHref = release?.macos_dmg_url || "https://github.com/FutureMindsDev/homebrew-lazytranslator/releases/latest";
  const downloadLabel = release?.version
    ? `Download for macOS (v${release.version})`
    : t("download_btn");

  return (
    <main>
      {/* Dot nav */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            aria-label={s.label}
            className={`w-3 h-3 rounded-full border-2 transition-all ${
              active === s.id
                ? "bg-indigo-600 border-indigo-600 scale-125"
                : "bg-white border-slate-300 hover:border-indigo-400"
            }`}
          />
        ))}
      </nav>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-[1120px] mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-lg">LazyTranslator</span>
          <nav className="hidden md:flex gap-6 text-sm text-slate-600">
            <button onClick={() => scrollTo("features")} className="hover:text-indigo-600">Features</button>
            <button onClick={() => scrollTo("privacy")} className="hover:text-indigo-600">Privacy</button>
            <button onClick={() => scrollTo("download")} className="hover:text-indigo-600">Download</button>
          </nav>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm shadow-sm ml-4"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="section-snap bg-[#F8FAFC]">
        <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 mb-4">
              {t("hero_badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{t("hero_title")}</h1>
            <p className="text-lg text-slate-600 mb-6">{t("hero_sub")}</p>
            <div className="flex gap-3 flex-wrap">
              <a href={downloadHref} className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">
                {downloadLabel}
              </a>
              <button onClick={() => scrollTo("how")} className="px-6 py-3 rounded-xl bg-white border border-slate-200 font-semibold">
                {t("how_it_works")}
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              {release ? `Latest: v${release.version} · ${release.pub_date ? new Date(release.pub_date).toLocaleDateString() : ""}` : t("release_meta")}
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/hero.jpg" alt="LazyBear" className="hero-img w-full max-w-md rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-snap bg-white">
        <div className="max-w-[1120px] mx-auto px-6 w-full py-16">
          <h2 className="text-3xl font-bold mb-2">{t("features_title")}</h2>
          <p className="text-slate-600 mb-8">{t("features_sub")}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { img: "/feat-doc.jpg", title: t("feat_doc_title"), desc: t("feat_doc_desc") },
              { img: "/feat-audio.jpg", title: t("feat_audio_title"), desc: t("feat_audio_desc") },
              { img: "/feat-ocr.jpg", title: t("feat_ocr_title"), desc: t("feat_ocr_desc") },
              { img: "/hero.jpg", title: t("feat_lang_title"), desc: t("feat_lang_desc") },
            ].map((f, i) => (
              <div key={i} className="reveal bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 transition">
                <img src={f.img} alt="" className="w-full h-44 object-cover rounded-xl mb-4" />
                <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
                <p className="text-slate-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="section-snap bg-slate-50">
        <div className="max-w-[1120px] mx-auto px-6 w-full py-16">
          <h2 className="text-3xl font-bold mb-8">{t("how_title")}</h2>
          <ol className="grid gap-4">
            {[
              { n: "1", title: t("step1"), desc: t("step1d") },
              { n: "2", title: t("step2"), desc: t("step2d") },
              { n: "3", title: t("step3"), desc: t("step3d") },
              { n: "4", title: t("step4"), desc: t("step4d") },
              { n: "5", title: t("step5"), desc: t("step5d") },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 bg-white border border-slate-200 rounded-2xl p-5">
                <span className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center">{s.n}</span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-slate-600 text-sm">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="section-snap bg-white">
        <div className="max-w-[1120px] mx-auto px-6 w-full py-16 grid md:grid-cols-2 gap-10 items-center">
          <img src="/privacy.jpg" alt="" className="w-full rounded-2xl shadow" />
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("privacy_title")}</h2>
            <ul className="space-y-3 text-slate-600">
              {[t("privacy_1"), t("privacy_2"), t("privacy_3"), t("privacy_4"), t("privacy_5")].map((x, i) => (
                <li key={i} className="pl-7 relative">
                  <span className="absolute left-0 top-0 text-indigo-600 font-bold">✓</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="section-snap bg-slate-50">
        <div className="max-w-[1120px] mx-auto px-6 w-full py-16">
          <h2 className="text-3xl font-bold mb-2">{t("download_title")}</h2>
          <p className="text-slate-600 mb-6">{t("download_sub")}</p>
          <div className="max-w-2xl bg-white border border-slate-200 rounded-2xl p-6">
            <a href={downloadHref} className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 mb-4">
              {downloadLabel}
            </a>
            <ol className="list-decimal pl-5 text-slate-600 space-y-1 text-sm">
              <li>{t("install_1")}</li>
              <li>{t("install_2")}</li>
              <li>{t("install_3")}</li>
            </ol>
            <p className="text-xs text-slate-500 mt-4">
              {release?.macos_dmg_sha256 ? `SHA-256: ${release.macos_dmg_sha256}` : ""}
            </p>
            <details className="mt-4">
              <summary className="cursor-pointer font-semibold text-sm">{t("gatekeeper")}</summary>
              <pre className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs mt-2 overflow-x-auto">brew install --cask --no-quarantine FutureMindsDev/lazytranslator/lazytranslator</pre>
              <pre className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs mt-2 overflow-x-auto">xattr -cr /Applications/LazyTranslator.app</pre>
            </details>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold mb-2">{t("reqs_title")}</h3>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>{t("req_1")}</li>
              <li>{t("req_2")}</li>
              <li>{t("req_3")}</li>
              <li>{t("req_4")}</li>
            </ul>
            <p className="text-sm text-slate-500 mt-2">{t("windows_soon")}</p>
          </div>
        </div>
      </section>

      <footer className="footer-snap bg-slate-900 text-slate-300 py-10">
        <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div>
            <div className="font-semibold text-white text-lg">LazyTranslator</div>
            <p className="text-sm mt-2">{t("footer")} · {t("footer2")}</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm">
            <a href="https://github.com/FutureMindsDev/homebrew-lazytranslator" className="hover:text-white">GitHub</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <a href="mailto:support@lazytranslator.app" className="hover:text-white">Contact</a>
            <a href="https://twitter.com/lazytranslator" className="hover:text-white">Twitter/X</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}