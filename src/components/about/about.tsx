import { Award, GraduationCap, Heart } from "lucide-react";
import styles from "./about.module.css";
import aboutPhoto from "../../assets/about-photo.jpeg";

const CREDENTIALS = [
  { icon: Heart, text: "נשואה ואמא לשלוש בנות" },
  { icon: GraduationCap, text: "תואר ראשון בחינוך לגיל הרך" },
  { icon: Award, text: "מדריכת הורים מוסמכת בגישת אדלר" },
];

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img src={aboutPhoto} alt="ליאן גייר - מדריכת הורים" className={styles.image} />
          </div>
        </div>

        <div className={styles.textCol}>
          <span className={styles.eyebrow}></span>
          <h2 className={styles.heading}>שלום, אני ליאן גייר</h2>
          <p className={styles.body}>
            כמדריכת הורים בגישת אדלר, העוגן המקצועי שמנחה אותי בכל מפגש הוא פשוט: יחסים לפני הכל. אני מאמינה שילד שמרגיש
            שייך, אהוב ומכובד, הוא ילד שפנוי ללמוד, להקשיב ולצמוח. בקליניקה שלי, אני לא מחלקת &apos;מרשמים&apos; או
            פתרונות קסם אלא מעניקה לכם כלים מעשיים לבניית קשר עמוק, אמיתי ומכבד עם הילדים שלכם. קשר שיחזיק מעמד גם כשהם
            יגדלו. אני מציעה פגישות פרטניות שממוקדות בבעיות שמטרידות אתכם. יחד נוכל לבנות אסטרטגיות לחיזוק הביטחון
            ההורי, לפתח דרכים אפקטיביות לתקשורת מול הילדים, וללמוד דרכי התמודדות עם אתגרי היומיום.
          </p>
          <p className={styles.body}>
            אני מאמינה שהורות מאושרת מתחילה בהבנה - הבנת הילד, הבנת עצמנו, והבנת הדינמיקה המשפחתית. בגישת אדלר, נסתכל על
            הילד כשותף ונחפש פתרונות יחד.
          </p>

          <ul className={styles.credentials}>
            {CREDENTIALS.map(({ icon: Icon, text }) => (
              <li key={text} className={styles.credentialItem}>
                <Icon className={styles.credentialIcon} size={20} strokeWidth={1.75} aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
