"use client";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, Reveal, Stagger, StaggerItem } from "@/components/Animate";
import type { OptionItem } from "@/components/ui/option-cards";
import { useT } from "@/context/LanguageContext";

const features = [
  { titleKey: "feat_doc_title", descKey: "feat_doc_desc", img: "/feat-doc.jpg" },
  { titleKey: "feat_audio_title", descKey: "feat_audio_desc", img: "/feat-audio.jpg" },
  { titleKey: "feat_ocr_title", descKey: "feat_ocr_desc", img: "/feat-ocr.jpg" },
  { titleKey: "feat_lang_title", descKey: "feat_lang_desc", img: "/hero.jpg" },
];

const steps = [
  { n: "01", titleKey: "step1", descKey: "step1d" },
  { n: "02", titleKey: "step2", descKey: "step2d" },
  { n: "03", titleKey: "step3", descKey: "step3d" },
  { n: "04", titleKey: "step4", descKey: "step4d" },
  { n: "05", titleKey: "step5", descKey: "step5d" },
];

export default function Home() {
  const { t } = useT();

  const downloadOptions: OptionItem[] = [
    {
      id: "dmg",
      badge: "Option A",
      title: "Installing by downloading the .dmg file",
      highlights: [
        "Download the arm64.dmg file from GitHub Releases",
        "Open the .dmg file",
        "Drag LazyTranslator.app into Applications",
        "Run xattr -cr /Applications/LazyTranslator.app",
        "Launch LazyTranslator from Applications",
      ],
      details: (
        <div className="space-y-3 text-sm">
          <p>
            Download the <strong>arm64.dmg</strong> file from the GitHub Releases
            page, then:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Open the downloaded .dmg file.</li>
            <li>Drag LazyTranslator.app into your Applications folder.</li>
            <li>
              Because the app is not verified with an Apple Developer ID, run:
              <pre className="mt-2 rounded-xl border border-border bg-muted p-3 text-xs overflow-x-auto">
                xattr -cr /Applications/LazyTranslator.app
              </pre>
            </li>
            <li>Launch LazyTranslator from Applications.</li>
          </ol>
        </div>
      ),
      accent: "terracotta",
    },
    {
      id: "brew",
      badge: "Option B",
      title: "Installing via Homebrew",
      highlights: [
        "brew install --cask --no-quarantine ...",
        "Run xattr -cr /Applications/LazyTranslator.app",
        "Launch LazyTranslator from Applications",
      ],
      details: (
        <div className="space-y-3 text-sm">
          <p>Install via Homebrew (if you haven't installed Homebrew yet, install it from <a href="https://brew.sh" target="_blank" rel="noopener noreferrer" className="text-primary underline">brew.sh</a>), then still run the xattr command:</p>
          <pre className="rounded-xl border border-border bg-muted p-3 text-xs overflow-x-auto">
            brew install --cask --no-quarantine FutureMindsDev/lazytranslator/lazytranslator
          </pre>
          <pre className="rounded-xl border border-border bg-muted p-3 text-xs overflow-x-auto">
            xattr -cr /Applications/LazyTranslator.app
          </pre>
          <p>Then launch LazyTranslator from Applications.</p>
        </div>
      ),
      accent: "violet",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-terracotta/15 via-amber/5 to-background" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <FadeIn className="text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
                {t("hero_badge")}
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                {t("hero_title")}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:mx-0">
                {t("hero_sub")}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a href="https://github.com/FutureMindsDev/homebrew-lazytranslator/releases/latest" className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-terracotta to-amber px-7 text-sm font-semibold text-accent-foreground shadow-md transition-transform hover:scale-[1.03]">
                  {t("download_btn")}
                </a>
                <a href="#how" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-semibold transition-colors hover:bg-muted">
                  {t("how_it_works")}
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-terracotta/25 via-amber/20 to-violet/25 blur-3xl" />
              <Image src="/hero.jpg" alt="LazyBear" width={800} height={600} className="h-auto w-full rounded-3xl border border-border object-cover shadow-2xl" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("how_title")}</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-4">
            {steps.map((s) => (
              <Reveal key={s.n} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-terracotta to-amber text-sm font-bold text-accent-foreground shadow-sm">{s.n}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{t(s.titleKey)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t(s.descKey)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
                <Image src="/feat-ocr.jpg" alt="" width={800} height={600} className="h-auto w-full rounded-2xl object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-muted/40" id="features">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("features_title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("features_sub")}</p>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <StaggerItem key={f.titleKey} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <Image src={f.img} alt="" width={400} height={240} className="h-36 w-full rounded-xl object-cover" />
                <h3 className="mt-4 font-semibold text-foreground">{t(f.titleKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Privacy */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" id="privacy">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Image src="/privacy.jpg" alt="" width={800} height={600} className="h-auto w-full rounded-3xl border border-border object-cover shadow-md" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("privacy_title")}</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[t("privacy_1"), t("privacy_2"), t("privacy_3"), t("privacy_4"), t("privacy_5")].map((x, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-terracotta" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Download */}
      <section className="border-y border-border bg-gradient-to-br from-amber/15 via-terracotta/10 to-violet/15" id="download">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("download_title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("download_sub")}</p>
          </Reveal>
          <div className="mt-10 mx-auto max-w-4xl">
            <a href="https://github.com/FutureMindsDev/homebrew-lazytranslator/releases/latest" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-terracotta to-amber text-sm font-semibold text-accent-foreground shadow-md transition-transform hover:scale-[1.03]">
              {t("download_btn")}
            </a>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {t("install_1")} {t("install_2")} {t("install_3")}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {downloadOptions.map((opt) => (
                <div
                  key={opt.id}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                      {opt.badge}
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-xl font-semibold">{opt.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{opt.tagline}</p>
                  <div className="mt-4">{opt.details}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold">{t("reqs_title")}</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>{t("req_1")}</li>
                <li>{t("req_2")}</li>
                <li>{t("req_3")}</li>
                <li>{t("req_4")}</li>
              </ul>
              <p className="mt-2 text-sm text-muted-foreground">{t("windows_soon")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}