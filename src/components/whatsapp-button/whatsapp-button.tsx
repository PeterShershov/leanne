import { IconBrandWhatsapp } from "@tabler/icons-react";
import { buildWhatsappUrl } from "~/constants";
import { useLanguage } from "~/i18n/use-language";
import styles from "./whatsapp-button.module.css";

export function WhatsappButton() {
  const { t } = useLanguage();
  const whatsappUrl = buildWhatsappUrl(t.whatsapp.message);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label={t.whatsapp.ariaLabel}
    >
      <IconBrandWhatsapp size={32} stroke={1.8} />
    </a>
  );
}
