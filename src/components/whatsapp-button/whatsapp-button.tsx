import { IconBrandWhatsapp } from "@tabler/icons-react";
import { WHATSAPP_URL } from "~/constants";
import styles from "./whatsapp-button.module.css";

export function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="שלח הודעה בוואטסאפ"
    >
      <IconBrandWhatsapp size={32} stroke={1.8} />
    </a>
  );
}
