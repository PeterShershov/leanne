export type Lang = "he" | "en";

export const translations = {
  he: {
    meta: {
      title: "ליאן גייר - הדרכת הורים בגישת אדלר",
      description:
        "הדרכת הורים מקצועית בגישת אדלר. פגישות פרטניות לבניית קשר אמיתי עם ילדיכם.",
    },
    nav: {
      logoName: "ליאן גייר",
      logoSub: "הדרכת הורים",
      links: [
        { label: "אודות", href: "#about" },
        { label: "גישת אדלר", href: "#adlerian" },
        { label: "שירותים", href: "#services" },
        { label: "צור קשר", href: "#contact" },
      ],
      openMenu: "פתח תפריט",
      closeMenu: "סגור תפריט",
      switchLanguage: "Switch to English",
      languageShortLabel: "EN",
    },
    hero: {
      tagline: "ליאן גייר - הדרכת הורים בגישת אדלר",
      headingLines: ["הורות מתוך", "שלווה וביטחון"],
      subheading:
        "הורים יקרים, אם אתם מתמודדים עם אתגרים כמו בעיות התנהגות, קשיים בקשר עם הילדים או חוסר שיתוף פעולה - אני כאן כדי לעזור.",
      cta: "צרו קשר",
    },
    about: {
      imageAlt: "ליאן גייר - מדריכת הורים",
      heading: "שלום, אני ליאן גייר",
      body1:
        "כמדריכת הורים בגישת אדלר, העוגן המקצועי שמנחה אותי בכל מפגש הוא פשוט: יחסים לפני הכל. אני מאמינה שילד שמרגיש שייך, אהוב ומכובד, הוא ילד שפנוי ללמוד, להקשיב ולצמוח. בקליניקה שלי, אני לא מחלקת 'מרשמים' או פתרונות קסם אלא מעניקה לכם כלים מעשיים לבניית קשר עמוק, אמיתי ומכבד עם הילדים שלכם. קשר שיחזיק מעמד גם כשהם יגדלו. אני מציעה פגישות פרטניות שממוקדות בבעיות שמטרידות אתכם. יחד נוכל לבנות אסטרטגיות לחיזוק הביטחון ההורי, לפתח דרכים אפקטיביות לתקשורת מול הילדים, וללמוד דרכי התמודדות עם אתגרי היומיום.",
      body2:
        "אני מאמינה שהורות מאושרת מתחילה בהבנה - הבנת הילד, הבנת עצמנו, והבנת הדינמיקה המשפחתית. בגישת אדלר, נסתכל על הילד כשותף ונחפש פתרונות יחד.",
      credentials: [
        "נשואה ואמא לשלוש בנות",
        "תואר ראשון בחינוך לגיל הרך",
        "מדריכת הורים מוסמכת בגישת אדלר",
      ],
    },
    adlerian: {
      eyebrow: "הגישה שלי",
      heading: "גישת אדלר להורות",
      intro:
        "תפיסת חיים והורות המאמינה שיחסים טובים הם הבסיס לכל שינוי, ומעניקה כלים פרקטיים ליצירת אווירה משפחתית מכבדת ומלוכדת.",
      principles: [
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
          description:
            "העידוד הוא כלי מרכזי  וחשוב. נלמד להבחין בין שבח לעידוד ואיך לחזק את הביטחון הפנימי של הילד.",
        },
        {
          title: "הגיון טבעי ולוגי",
          description:
            "נלמד להשתמש בתוצאות טבעיות ולוגיות במקום עונשים, שיטה שמאפשרת לילד ללמוד מהניסיון שלו עצמו.",
        },
      ],
    },
    services: {
      heading: "במה אני יכולה לעזור?",
      items: [
        {
          title: "פגישות פרטניות",
          description:
            "פגישות אישיות המותאמות לצרכים הספציפיים של המשפחה שלכם. נדון בבעיות ההתנהגות ונבנה תכנית פעולה מעשית.",
          tags: ["ייעוץ אישי", "בעיות התנהגות", "גבולות"],
        },
        {
          title: "שיפור תקשורת",
          description:
            "נלמד שפת תקשורת אפקטיבית שמחזקת את הקשר עם הילד ומפחיתה קונפליקטים יומיומיים.",
          tags: ["הקשבה פעילה", "שיח מכבד", "פחות ריב"],
        },
        {
          title: "חיזוק ביטחון הורי",
          description:
            "נעבוד יחד על חיזוק הביטחון שלכם כהורים, בניית גבולות בריאים ויצירת שגרה שמתאימה לכל המשפחה.",
          tags: ["ביטחון עצמי", "שגרה", "גבולות בריאים"],
        },
      ],
    },
    contact: {
      eyebrow: "צרו קשר",
      heading: "אשמח לשמוע מכם",
      body: "הדרך הכי מהירה להגיע אליי היא בוואטסאפ. כתבו לי מה מעסיק אתכם ואחזור אליכם בהקדם.",
      ctaWhatsapp: "שלחו לי הודעה בוואטסאפ",
    },
    footer: {
      tagline: "הדרכת הורים בגישת אדלר",
      copyright: `© 2026 ליאן גייר — כל הזכויות שמורות`,
    },
    whatsapp: {
      ariaLabel: "שלח הודעה בוואטסאפ",
      message: "היי! אשמח לתאם פגישה :)",
    },
  },
  en: {
    meta: {
      title: "Leanne Geyer - Adlerian Parent Guidance",
      description:
        "Professional Adlerian-approach parent guidance. One-on-one sessions to build a genuine connection with your children.",
    },
    nav: {
      logoName: "Leanne Geyer",
      logoSub: "Parent Guidance",
      links: [
        { label: "About", href: "#about" },
        { label: "The Adlerian Way", href: "#adlerian" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
      ],
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "החלף לעברית",
      languageShortLabel: "עב",
    },
    hero: {
      tagline: "Leanne Geyer - Adlerian Parent Guidance",
      headingLines: ["Parenting Rooted in", "Calm and Confidence"],
      subheading:
        "Dear parents, if you're facing challenges like behavioral issues, difficulties connecting with your children, or a lack of cooperation - I'm here to help.",
      cta: "Get in Touch",
    },
    about: {
      imageAlt: "Leanne Geyer - Parent Coach",
      heading: "Hi, I'm Leanne Geyer",
      body1:
        "As an Adlerian parent coach, the professional anchor that guides me in every session is simple: relationships come first. I believe that a child who feels they belong, is loved, and is respected is a child who is free to learn, listen, and grow. In my practice, I don't hand out 'prescriptions' or magic solutions - instead, I give you practical tools for building a deep, genuine, and respectful connection with your children. A connection that will hold up as they grow. I offer one-on-one sessions focused on the issues troubling you. Together we'll build strategies to strengthen your parental confidence, develop effective ways to communicate with your children, and learn how to handle everyday challenges.",
      body2:
        "I believe happy parenting begins with understanding - understanding the child, understanding ourselves, and understanding the family dynamic. In the Adlerian approach, we see the child as a partner and look for solutions together.",
      credentials: [
        "Married, mother of three daughters",
        "B.A. in Early Childhood Education",
        "Certified Adlerian Parent Coach",
      ],
    },
    adlerian: {
      eyebrow: "My Approach",
      heading: "The Adlerian Approach to Parenting",
      intro:
        "A life and parenting philosophy that believes good relationships are the foundation for any change, offering practical tools for creating a respectful, cohesive family atmosphere.",
      principles: [
        {
          title: "Belonging",
          description:
            "Every child's basic need is to feel they belong and matter. Challenging behavior usually stems from a sense of not belonging.",
        },
        {
          title: "Purposefulness",
          description:
            "A child's behavior isn't random but purposeful, always aimed at gaining a place and value within the family. Recognizing this purpose lets parents move from putting out daily fires to conscious, empowering parental leadership.",
        },
        {
          title: "Encouragement as a Way of Life",
          description:
            "Encouragement is a central and important tool. We'll learn to distinguish between praise and encouragement, and how to strengthen a child's inner confidence.",
        },
        {
          title: "Natural and Logical Consequences",
          description:
            "We'll learn to use natural and logical consequences instead of punishment, a method that lets the child learn from their own experience.",
        },
      ],
    },
    services: {
      heading: "How Can I Help?",
      items: [
        {
          title: "One-on-One Sessions",
          description:
            "Personal sessions tailored to your family's specific needs. We'll discuss behavioral issues and build a practical action plan.",
          tags: ["Personal Consulting", "Behavioral Issues", "Boundaries"],
        },
        {
          title: "Improving Communication",
          description:
            "We'll learn effective communication that strengthens your connection with your child and reduces everyday conflicts.",
          tags: ["Active Listening", "Respectful Dialogue", "Fewer Arguments"],
        },
        {
          title: "Strengthening Parental Confidence",
          description:
            "We'll work together on strengthening your confidence as parents, building healthy boundaries, and creating a routine that works for the whole family.",
          tags: ["Self-Confidence", "Routine", "Healthy Boundaries"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "I'd Love to Hear from You",
      body: "The quickest way to reach me is on WhatsApp. Write to me about what's on your mind and I'll get back to you soon.",
      ctaWhatsapp: "Send Me a WhatsApp Message",
    },
    footer: {
      tagline: "Adlerian Parent Guidance",
      copyright: `© 2026 Leanne Geyer — All rights reserved`,
    },
    whatsapp: {
      ariaLabel: "Send a WhatsApp message",
      message: "Hi! I'd love to schedule a session :)",
    },
  },
} as const satisfies Record<Lang, unknown>;

export type Translations = (typeof translations)[Lang];
