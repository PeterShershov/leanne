import styles from "./services.module.css";

const SERVICES = [
  {
    title: "פגישות פרטניות",
    description:
      "פגישות אישיות המותאמות לצרכים הספציפיים של המשפחה שלכם. נדון בבעיות ההתנהגות ונבנה תכנית פעולה מעשית.",
    tags: ["ייעוץ אישי", "בעיות התנהגות", "גבולות"],
  },
  {
    title: "שיפור תקשורת",
    description: "נלמד שפת תקשורת אפקטיבית שמחזקת את הקשר עם הילד ומפחיתה קונפליקטים יומיומיים.",
    tags: ["הקשבה פעילה", "שיח מכבד", "פחות ריב"],
  },
  {
    title: "חיזוק ביטחון הורי",
    description: "נעבוד יחד על חיזוק הביטחון שלכם כהורים, בניית גבולות בריאים ויצירת שגרה שמתאימה לכל המשפחה.",
    tags: ["ביטחון עצמי", "שגרה", "גבולות בריאים"],
  },
];

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}></span>
          <h2 className={styles.heading}>במה אני יכולה לעזור?</h2>
        </div>

        <div className={styles.grid}>
          {SERVICES.map(({ title, description }) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </div>
          ))}
        </div>

        <div className={styles.note}></div>
      </div>
    </section>
  );
}
