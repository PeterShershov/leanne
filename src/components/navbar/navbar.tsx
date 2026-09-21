import { useState } from "react";
import { IconMenu2, IconX, IconLeaf, IconLanguage } from "@tabler/icons-react";
import { useLanguage } from "~/i18n/use-language";
import styles from "./navbar.module.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <IconLeaf size={24} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>{t.nav.logoName}</span>
            <span className={styles.logoSub}>{t.nav.logoSub}</span>
          </div>
        </a>

        <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ""}`}>
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.link}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.langBtn}
            onClick={toggleLanguage}
            aria-label={t.nav.switchLanguage}
            title={t.nav.switchLanguage}
          >
            {t.nav.languageShortLabel}
          </button>

          <button
            className={styles.menuBtn}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
