/* ==========================================================================
   I18N — Translations
   Add or edit text content here for each language.
   ========================================================================== */

const i18n = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    'hero.badge': 'Open to work · Odesa',
    'hero.name': 'Yevhen',
    'hero.surname': 'Vitchenko',
    'hero.role': 'Front-end Developer',
    'hero.subtitle': 'Crafting fast and reliable web interfaces — from marketing landings to product apps. 4+ years with Vue, React, Next.js, modern JS/TS and AI tooling.',
    'hero.cta1': 'Hire me',
    'hero.cta2': 'See experience',

    'stats.years': 'Years in IT',
    'stats.companies': 'Companies worked with',
    'stats.tech': 'Technologies',

    'sec1.num': '01 / EXPERIENCE',
    'sec1.title1': 'Career',
    'sec1.title2': 'path',
    'now': 'present',

    'exp1.role': 'Front-end Developer',
    'exp1.place': 'Remote',
    'exp1.duration': '~4 years',
    'exp1.desc': 'Freelance projects at Star-up-group: maintenance and new development — corporate sites and e-commerce. Work with complex interfaces, GLTF 3D models, animations via Lottie, Anime.js, Three.js. Fast onboarding to new projects, refactoring legacy code.',

    'exp2.role': 'Front-end Developer',
    'exp2.place': 'Odesa',
    'exp2.duration': '4 years 1 month',
    'exp2.desc': 'Marketing landing pages (academyocean.com) and new features for the main product (app.academyocean.com). Full cycle from requirements to release. Legacy refactoring, code reviews, clean code. Use AI tooling (Copilot, Cursor, Claude) in daily workflow to speed up routine tasks and reviews.',

    'exp3.role': 'Front-end Developer',
    'exp3.place': 'Odesa',
    'exp3.duration': '1 year 4 months',
    'exp3.desc': 'Team work on the main site relaunch after rebranding. Built a landing constructor and various calculators. New UI implementation, performance optimization. Separate project — udu.in.ua: support, new features, UI improvements.',

    'exp4.role': 'Shift Manager',
    'exp4.place': 'Odesa',
    'exp4.duration': '9 years',
    'exp4.desc': 'Managing a station and a shift. Quality control of product, equipment and team. A school of leadership, time-management and working under constant load.',

    'tag.responsive': 'Responsive',
    'tag.mgmt': 'Management',
    'tag.lead': 'Leadership',
    'tag.quality': 'Quality control',

    'sec.projects.num': '02 / PROJECTS',
    'sec.projects.title1': 'Selected',
    'sec.projects.title2': 'work',
    'proj1.desc': 'LMS platform — marketing site & product app',
    'proj2.desc': 'Ongoing solo project — support, new features, UI',
    'proj3.desc': 'Corporate site rebrand, landing constructor & calculators',

    'sec2.num': '03 / SKILLS',
    'sec2.title1': 'Tech',
    'sec2.title2': 'stack',
    'skill.responsive': 'Responsive layout',
    'skill.cross': 'Cross-browser',
    'skill.prompt': 'Prompt engineering',

    'sec3.num': '04 / EDUCATION',
    'sec3.title1': 'Education &',
    'sec3.title2': 'certificates',
    'edu.higher': 'HIGHER',
    'edu.months7': '7 MONTHS',
    'edu.months5': '5 MONTHS',
    'edu.cert': 'Certificate',
    'edu1.name': 'Volodymyr Dahl East Ukrainian National University',
    'edu1.desc': 'Computer Engineering · Luhansk',

    'contact.title1': 'Ready for',
    'contact.title2': 'new challenges',
    'contact.desc': 'Looking for a product team where I can ship real features, not just code them. Open to full-time and part-time roles.',
    'contact.phone': 'Phone',
    'contact.tg': 'Send a message',

    'footer.made': 'Made with ♥ in Odesa'
  },

  ua: {
    'nav.about': 'Про мене',
    'nav.experience': 'Досвід',
    'nav.projects': 'Проєкти',
    'nav.skills': 'Скіли',
    'nav.contact': 'Контакти',

    'hero.badge': 'Відкритий до пропозицій · Одеса',
    'hero.name': 'Євген',
    'hero.surname': 'Вітченко',
    'hero.role': 'Front-end розробник',
    'hero.subtitle': 'Створюю швидкі та надійні веб-інтерфейси — від маркетингових лендінгів до продуктових додатків. 4+ роки з Vue, React, Next.js, сучасним JS/TS та AI-інструментами.',
    'hero.cta1': 'Найняти мене',
    'hero.cta2': 'Подивитись досвід',

    'stats.years': 'Роки в IT',
    'stats.companies': 'Компаній у досвіді',
    'stats.tech': 'Технологій у стеку',

    'sec1.num': '01 / ДОСВІД',
    'sec1.title1': 'Робочий',
    'sec1.title2': 'шлях',
    'now': 'нині',

    'exp1.role': 'Front-end програміст',
    'exp1.place': 'Дистанційно',
    'exp1.duration': '~4 роки',
    'exp1.desc': 'Фріланс-проєкти в рамках Star-up-group: підтримка існуючих рішень та розробка нових — корпоративні сайти та e-commerce. Працюю зі складними інтерфейсами, інтегрую 3D-моделі (GLTF), реалізую анімації через Lottie, Anime.js, Three.js. Маю досвід швидкого підключення до проєктів та розбору legacy-коду.',

    'exp2.role': 'Front-end програміст',
    'exp2.place': 'Одеса',
    'exp2.duration': '4 роки 1 місяць',
    'exp2.desc': 'Маркетингові лендінги (academyocean.com) та новий функціонал основного продукту (app.academyocean.com). Повний цикл від вимог до релізу. Рефакторинг legacy-коду, code review, чистий код. Використовую AI-інструменти (Copilot, Cursor, Claude) у щоденному workflow для пришвидшення рутини та ревʼю.',

    'exp3.role': 'Front-end розробник',
    'exp3.place': 'Одеса',
    'exp3.duration': '1 рік 4 місяці',
    'exp3.desc': 'Робота в команді над оновленням основного сайту після ребрендингу. Розробляв лендінг-конструктор та різні калькулятори. Реалізація нового UI, оптимізація продуктивності. Окремий проєкт — udu.in.ua: підтримка, розвиток функціоналу, вдосконалення інтерфейсу.',

    'exp4.role': 'Менеджер дільниці',
    'exp4.place': 'Одеса',
    'exp4.duration': '9 років',
    'exp4.desc': 'Керування дільницею та зміною. Контроль якості продукту, обладнання та команди. Школа лідерства, тайм-менеджменту та роботи в умовах постійного навантаження.',

    'tag.responsive': 'Адаптив',
    'tag.mgmt': 'Менеджмент',
    'tag.lead': 'Лідерство',
    'tag.quality': 'Контроль якості',

    'sec.projects.num': '02 / ПРОЄКТИ',
    'sec.projects.title1': 'Обрані',
    'sec.projects.title2': 'роботи',
    'proj1.desc': 'LMS-платформа — маркетинговий сайт та продуктовий додаток',
    'proj2.desc': 'Особистий проєкт — підтримка, новий функціонал, UI',
    'proj3.desc': 'Ребрендинг корпоративного сайту, лендінг-конструктор та калькулятори',

    'sec2.num': '03 / СКІЛИ',
    'sec2.title1': 'Технічний',
    'sec2.title2': 'стек',
    'skill.responsive': 'Адаптивна верстка',
    'skill.cross': 'Кросбраузерність',
    'skill.prompt': 'Prompt engineering',

    'sec3.num': '04 / ОСВІТА',
    'sec3.title1': 'Освіта та',
    'sec3.title2': 'сертифікати',
    'edu.higher': 'ВИЩА',
    'edu.months7': '7 МІСЯЦІВ',
    'edu.months5': '5 МІСЯЦІВ',
    'edu.cert': 'Сертифікат',
    'edu1.name': 'Східноукраїнський національний університет ім. Даля',
    'edu1.desc': "Комп'ютерна інженерія · Луганськ",

    'contact.title1': 'Готовий до',
    'contact.title2': 'нових викликів',
    'contact.desc': 'Шукаю продуктову команду, де можу робити реальні фічі, а не просто кодити. Відкритий до повної та неповної зайнятості.',
    'contact.phone': 'Телефон',
    'contact.tg': 'Написати у Telegram',

    'footer.made': 'Зроблено з ♥ у Одесі'
  }
};

const pageTitles = {
  en: 'Yevhen Vitchenko · Front-end Developer',
  ua: 'Євген Вітченко · Front-end розробник'
};