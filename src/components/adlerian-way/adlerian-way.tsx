import { useLanguage } from "~/i18n/use-language";
import styles from "./adlerian-way.module.css";

export function AdlerianWay() {
  const { t } = useLanguage();

  return (
    <section id="adlerian" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t.adlerian.eyebrow}</span>
          <h2 className={styles.heading}>{t.adlerian.heading}</h2>
          <p className={styles.intro}>{t.adlerian.intro}</p>
        </div>

        <div className={styles.grid}>
          {t.adlerian.principles.map(({ title, description }) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
