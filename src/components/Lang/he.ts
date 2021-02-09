/**
 * Hebrew Translation
 * @author TsUNaMy WaVe <souseisekiftw@gmail.com>
 */

import {
    Config,
    Strings,
    Language,
    languageBuilder,
} from '$components/Lang/builder';

const anime_airing: Config = {
    UNIT_SINGULAR: `סדרה`,
    UNIT_PLURAL: `סדרות`,
    UNIT_SHORT: `סדרה`,
    SUBUNIT_SINGULAR: `פרק`,
    SUBUNIT_PLURAL: `פרקים`,
    SUBUNIT_SHORT: `פרק`,
    // e.g. Ep. 1 airs in 3 days
    SUBUNIT_VERB_FUTURE: `משודר`,
    // e.g. Ep. 2 aired 2 hours ago
    SUBUNIT_VERB_PAST: `שודר`,
};

const anime_bluray: Config = {
    UNIT_SINGULAR: `סדרה`,
    UNIT_PLURAL: `סדרות`,
    UNIT_SHORT: `סדרה`,
    SUBUNIT_SINGULAR: `כרך`,
    SUBUNIT_PLURAL: `כרכים`,
    SUBUNIT_SHORT: `כרך`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `יצא לאור`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `פורסם`,
};

const manga_chapter: Config = {
    UNIT_SINGULAR: `מנגה`,
    UNIT_PLURAL: `מנגות`,
    UNIT_SHORT: `מנגה`,
    SUBUNIT_SINGULAR: `צ'פטר`,
    SUBUNIT_PLURAL: `צ'פטרים`,
    SUBUNIT_SHORT: `צ'פטר`,
    // e.g. Ch. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `יצא לאור`,
    // e.g. Ch. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `פורסם`,
};

const manga_volume: Config = {
    UNIT_SINGULAR: `מנגה`,
    UNIT_PLURAL: `מנגות`,
    UNIT_SHORT: `מנגה`,
    SUBUNIT_SINGULAR: `כרך`,
    SUBUNIT_PLURAL: `כרכים`,
    SUBUNIT_SHORT: `כרך`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `יצא לאור`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `פורסם`,
};

const strings: Strings = {
    /**
     * States without any projects
     */
    // Empty state
    ALL_COMPLETE: `!כל הפרוייקטים הושלמו`,
    // Error state
    CONNECTION_ERROR: `בעיית חיבור`,

    /**
     * Configuration Page
     */
    CONFIG_HEADER: `תצורה`,
    // Website section
    WEBSITE_SETTINGS_HEADER: `הגדרות אתר`,
    APP_URL: `ה-URL של האפליקציה`,
    LINK_PAGE: `לעמוד`,
    PAGE_BGCOLOR: `צבע רקע אתר ראשי`,
    NO_COLOR: `התעלם מצבע הרקע`,
    RECOMMENDED_BGCOLOR: `צבע רקע מומלץ`,
    OVERRIDE_BGCOLOR: `עקוף המלצה`,
    // Theme section
    THEME_HEADER: `ערכת נושא`,
    THEME_LIGHT: `בהיר`,
    THEME_DARK: `כהה`,
    // Size section
    SIZE_HEADER: `גודל`,
    SIZE_SMALL: `קטן (לא מומלץ)`,
    SIZE_NORMAL: `רגיל`,
    // Accent section
    ACCENT_HEADER: `צבע דגש`,
    ACCENT_RED: `אדום`,
    ACCENT_YELLOW: `צהוב`,
    ACCENT_GREEN: `ירוק`,
    ACCENT_BLUE: `כחול`,
    ACCENT_INDIGO: `אינדיגו`,
    ACCENT_PURPLE: `סגול`,
    ACCENT_PINK: `ורוד`,
    ACCENT_NONE: `ללא`,
    // Language section
    LANGUAGE_HEADER: `שפה`,
    // Description in Wordpress embed code
    EMBED_HEADER: `קוד הטמעה לוורדפרס`,
    EMBED_DESCRIPTION: `הקטן את האייפריים לאחר טעינה`,
    EMBED_SHOW: `הצג קוד הטמעה`,
    EMBED_HIDE: `הסתר קוד הטמעה`,
    // Example
    ALL_POSITIONS: `כל התפקידים`,

    /**
     * Unit (e.g. Show)
     * {0} = list of groups
     * {1} = number of remaining units
     * {2} = relative time
     */
    UNIT_JOINT_WITH: `בשיתוף עם {0}`,
    UNIT_SHOW_LESS: `הצג פחות`,
    // Plural version if needed, fallback to UNIT_SHOW_LESS otherwise
    UNIT_SHOW_LESS_PLURAL: undefined,
    UNIT_SHOW_REMAINDER_SINGULAR: `הצג {1} %SUBUNIT_SINGULAR% נוסף...`,
    // e.g. Show 2 more episodes...
    UNIT_SHOW_REMAINDER_PLURAL: `הצג {1} %SUBUNIT_PLURAL% נוספים...`,
    // e.g. Updated 5 hours ago
    UNIT_UPDATED: `עודכן {2}`,

    /**
     * Subunit (e.g. Episode)
     * {0} = subunit number
     * {1} = relative time
     * {2} = list of positions
     */
    // e.g. Ep. 1 airs in 5 days
    SUBUNIT_NOT_PUBLISHED: `%SUBUNIT_SHORT% {0} %SUBUNIT_VERB_FUTURE% {1}`,
    // e.g. Ep. 1 aired 4 days ago
    SUBUNIT_WAS_PUBLISHED: `%SUBUNIT_SHORT% {0} %SUBUNIT_VERB_PAST% {1}`,
    // shown when all positions are marked complete
    SUBUNIT_TO_RELEASE: `%SUBUNIT_SHORT% {0} יפורסם בקרוב`,
    // shown when there are unfinished positions
    SUBUNIT_IN_PROGRESS: `%SUBUNIT_SHORT% {0} ממתין ל: {2}`,
    // shown when all positions are marked incomplete after publication
    SUBUNIT_NO_PROGRESS: `(אין עדכון עדיין)`,
};

import he from 'javascript-time-ago/locale/he';
const lang: Language = {
    locale: he,
    strings: strings,
};

export default {
    anime_airing: languageBuilder(lang, anime_airing),
    anime_bluray: languageBuilder(lang, anime_bluray),
    manga_chapter: languageBuilder(lang, manga_chapter),
    manga_volume: languageBuilder(lang, manga_volume),
};
