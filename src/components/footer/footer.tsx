import { IconLeaf, IconPhone } from "@tabler/icons-react";
import { useLanguage } from "~/i18n/use-language";
import styles from "./footer.module.css";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <IconLeaf size={20} />
            <span>{t.nav.logoName}</span>
          </div>
          <p className={styles.tagline}>{t.footer.tagline}</p>
        </div>

        <nav className={styles.links}>
          {t.nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.contact}>
          <a href="tel:0504489911" className={styles.phoneLink}>
            <IconPhone size={16} />
            050-4489911
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>{t.footer.copyright(new Date().getFullYear())}</p>
      </div>
    </footer>
  );
}
