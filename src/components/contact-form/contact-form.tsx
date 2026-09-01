import { IconBrandWhatsapp } from "@tabler/icons-react";
import { WHATSAPP_URL, PHONE, EMAIL } from "~/constants";
import styles from "./contact-form.module.css";

export function ContactForm() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>צרו קשר</span>
        <h2 className={styles.heading}>אשמח לשמוע מכם</h2>
        <p className={styles.body}>
          הדרך הכי מהירה להגיע אליי היא בוואטסאפ. כתבו לי מה מעסיק אתכם ואחזור אליכם בהקדם.
        </p>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
          <IconBrandWhatsapp size={24} stroke={2} />
          <span>שלחו לי הודעה בוואטסאפ</span>
        </a>

        <div className={styles.contactCard}>
          <a href={`tel:${PHONE}`} className={styles.contactRow}>
            <span>050-4489911</span>
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
