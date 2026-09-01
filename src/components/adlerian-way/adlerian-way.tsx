import styles from "./adlerian-way.module.css";

const PRINCIPLES = [
  {
    title: "שייכות",
    description:
      "הצורך הבסיסי של כל ילד הוא להרגיש שייך ומשמעותי. התנהגות מאתגרת נובעת לרוב מתחושת חוסר שייכות.",
  },
  {
    title: "מטרתיות",
    description:
      "התנהגות הילד אינה מקרית אלא מטרתית, ומכוונת תמיד להשגת מקום וערך במשפחה. זיהוי המטרה הזו מאפשר להורים לעבור מכיבוי שריפות יום-יומי להובלה הורית מודעת ומקדמת.",
  },
  {
    title: "עידוד כדרך חיים",
    description: "העידוד הוא כלי מרכזי  וחשוב. נלמד להבחין בין שבח לעידוד ואיך לחזק את הביטחון הפנימי של הילד.",
  },
  {
    title: "הגיון טבעי ולוגי",
    description: "נלמד להשתמש בתוצאות טבעיות ולוגיות במקום עונשים, שיטה שמאפשרת לילד ללמוד מהניסיון שלו עצמו.",
  },
];

export function AdlerianWay() {
  return (
    <section id="adlerian" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>הגישה שלי</span>
          <h2 className={styles.heading}>גישת אדלר להורות</h2>
          <p className={styles.intro}>
            תפיסת חיים והורות המאמינה שיחסים טובים הם הבסיס לכל שינוי, ומעניקה כלים פרקטיים ליצירת אווירה משפחתית מכבדת
            ומלוכדת.
          </p>
        </div>

        <div className={styles.grid}>
          {PRINCIPLES.map(({ title, description }) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
