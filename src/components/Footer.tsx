import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5 font-semibold">
              <Image src="/favicon.png" alt="LazyTranslator" width={128} height={128} sizes="32px" className="h-8 w-8 rounded-2xl border border-border object-cover shadow-sm" />
              LazyTranslator
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              100% local, privacy-first macOS app for document translation, audio/video transcription & subtitles, and PDF/image OCR.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Pages</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#privacy" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#download" className="hover:text-foreground">Download</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="https://github.com/FutureMindsDev/homebrew-lazytranslator" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub repository</a></li>
              <li><a href="/privacy" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="mailto:support@lazytranslator.app" className="hover:text-foreground">Contact</a></li>
              <li><a href="https://twitter.com/lazytranslator" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Twitter/X</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© LazyTranslator. 100% local. 100% private.</p>
        </div>
      </div>
    </footer>
  );
}