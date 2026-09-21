import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import "./styles/global.css";
import "./styles/theme.css";

import { ErrorBoundary } from "~/components/error-boundary/error-boundary";
import { LanguageProvider } from "~/i18n/language-context";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ErrorBoundary>
  </StrictMode>,
);
