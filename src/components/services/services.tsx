import { useLanguage } from "~/i18n/use-language";
import styles from "./services.module.css";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}></span>
          <h2 className={styles.heading}>{t.services.heading}</h2>
        </div>

        <div className={styles.grid}>
          {t.services.items.map(({ title, description }) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </div>
          ))}
        </div>

        <div className={styles.note}></div>
      </div>
    </section>
  );
}
