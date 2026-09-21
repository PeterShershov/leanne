import { Award, GraduationCap, Heart } from "lucide-react";
import { useLanguage } from "~/i18n/use-language";
import styles from "./about.module.css";
import aboutPhoto from "../../assets/about-photo.jpeg";

const CREDENTIAL_ICONS = [Heart, GraduationCap, Award];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img src={aboutPhoto} alt={t.about.imageAlt} className={styles.image} />
          </div>
        </div>

        <div className={styles.textCol}>
          <h2 className={styles.heading}>{t.about.heading}</h2>
          <p className={styles.body}>{t.about.body1}</p>
          <p className={styles.body}>{t.about.body2}</p>

          <ul className={styles.credentials}>
            {t.about.credentials.map((text, index) => {
              const Icon = CREDENTIAL_ICONS[index];
              return (
                <li key={text} className={styles.credentialItem}>
                  <Icon className={styles.credentialIcon} size={20} strokeWidth={1.75} aria-hidden="true" />
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
