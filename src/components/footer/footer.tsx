import { IconLeaf, IconPhone } from "@tabler/icons-react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <IconLeaf size={20} />
            <span>ליאן גייר</span>
          </div>
          <p className={styles.tagline}>הדרכת הורים בגישת אדלר</p>
        </div>

        <nav className={styles.links}>
          <a href="#about">אודות</a>
          <a href="#adlerian">גישת אדלר</a>
          <a href="#services">שירותים</a>
          <a href="#contact">צור קשר</a>
        </nav>

        <div className={styles.contact}>
          <a href="tel:0504489911" className={styles.phoneLink}>
            <IconPhone size={16} />
            050-4489911
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} ליאן גייר — כל הזכויות שמורות</p>
      </div>
    </footer>
  );
}
