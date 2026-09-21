import { Fragment } from "react";
import { buildWhatsappUrl } from "~/constants";
import { useLanguage } from "~/i18n/use-language";
import styles from "./hero.module.css";

export function Hero() {
  const { t } = useLanguage();
  const whatsappUrl = buildWhatsappUrl(t.whatsapp.message);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.tagline}>{t.hero.tagline}</p>
        <h1 className={styles.heading}>
          {t.hero.headingLines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <p className={styles.subheading}>{t.hero.subheading}</p>
        <div className={styles.actions}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
