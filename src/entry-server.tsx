import { renderToString } from "react-dom/server";

import { ErrorBoundary } from "~/components/error-boundary/error-boundary";
import { LanguageProvider } from "~/i18n/language-context";
import App from "./App.tsx";

/**
 * Renders the page to static markup at build time (see scripts/prerender.mjs).
 *
 * The rendered tree must match main.tsx, or hydration mismatches and React
 * throws the prerendered DOM away. Two omissions are deliberate and safe:
 * StrictMode renders no DOM of its own, and the global stylesheets main.tsx
 * imports produce no markup (the client build links them from index.html).
 */
export function render(): string {
  return renderToString(
    <ErrorBoundary>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ErrorBoundary>,
  );
}
