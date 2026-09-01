import { Component, type ErrorInfo, type ReactNode } from "react";
import styles from "./error-boundary.module.css";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | undefined;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: undefined };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) {
      return this.props.children;
    }

    const details = import.meta.env.DEV ? error.message : "An unexpected error occurred.";
    const stack = import.meta.env.DEV ? error.stack : undefined;

    return (
      <main className={styles.errorBoundary}>
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>Oops!</h1>
          <p className={styles.errorDetails}>{details}</p>

          {stack && (
            <div className={styles.errorStackWrapper}>
              <button
                className={styles.copyButton}
                onClick={() => {
                  void navigator.clipboard.writeText(stack);
                }}
              >
                Copy
              </button>
              <pre className={styles.errorStack}>
                <code>{stack}</code>
              </pre>
            </div>
          )}
        </div>
      </main>
    );
  }
}
