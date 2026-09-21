import { IconBrandWhatsapp } from "@tabler/icons-react";
import { buildWhatsappUrl, PHONE, EMAIL } from "~/constants";
import { useLanguage } from "~/i18n/use-language";
import styles from "./contact-form.module.css";

export function ContactForm() {
  const { t } = useLanguage();
  const whatsappUrl = buildWhatsappUrl(t.whatsapp.message);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>{t.contact.eyebrow}</span>
        <h2 className={styles.heading}>{t.contact.heading}</h2>
        <p className={styles.body}>{t.contact.body}</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          <IconBrandWhatsapp size={24} stroke={2} />
          <span>{t.contact.ctaWhatsapp}</span>
        </a>

        <div className={styles.contactCard}>
          <a href={`tel:${PHONE}`} className={styles.contactRow}>
            <span>050-4489811</span>
          </a>

          <div className={styles.divider} />

          <a href={`mailto:${EMAIL}`} className={styles.contactRow}>
            <span>{EMAIL}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
