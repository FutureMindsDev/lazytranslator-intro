"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="relative mt-2">
      <pre className="rounded-xl border border-border bg-muted p-3 pr-12 text-xs overflow-x-auto whitespace-pre-wrap">
        {code}
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy command"
        className="absolute right-2 top-2 rounded-md border border-border bg-card p-1.5 text-muted-foreground hover:text-foreground transition-colors"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
