import { useState } from "react";
import { IconMenu2, IconX, IconLeaf } from "@tabler/icons-react";
import styles from "./navbar.module.css";

const NAV_LINKS = [
  { label: "אודות", href: "#about" },
  { label: "גישת אדלר", href: "#adlerian" },
  { label: "שירותים", href: "#services" },
  { label: "צור קשר", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <IconLeaf size={24} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>ליאן גייר</span>
            <span className={styles.logoSub}>הדרכת הורים</span>
          </div>
        </a>

        <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </nav>
    </header>
  );
}
