import { WHATSAPP_URL } from "~/constants";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.tagline}>ליאן גייר - הדרכת הורים בגישת אדלר</p>
        <h1 className={styles.heading}>
          הורות מתוך
          <br />
          שלווה וביטחון
        </h1>
        <p className={styles.subheading}>
          הורים יקרים, אם אתם מתמודדים עם אתגרים כמו בעיות התנהגות, קשיים בקשר
          עם הילדים או חוסר שיתוף פעולה - אני כאן כדי לעזור.
        </p>
        <div className={styles.actions}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            צרו קשר
          </a>
        </div>
      </div>
    </section>
  );
}
