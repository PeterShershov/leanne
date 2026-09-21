import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import "./styles/reset.css";
import "./styles/global.css";
import "./styles/theme.css";

import { ErrorBoundary } from "~/components/error-boundary/error-boundary";
import { LanguageProvider } from "~/i18n/language-context";
import App from "./App.tsx";

const container = document.getElementById("root")!;

const tree = (
  <StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ErrorBoundary>
  </StrictMode>
);

// The production build prerenders this tree into index.html
// (scripts/prerender.mjs), so hydrate that markup instead of discarding it.
// The dev server has no prerender step and serves an empty shell, where
// hydrating would mismatch — so branch on what's actually in the container.
if (container.firstElementChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
