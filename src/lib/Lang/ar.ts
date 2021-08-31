/**
 * Arabic Translation
 * @author corewwwi <corewwwi@national.shitposting.agency>
 */

import {
    Config,
    Strings,
    Language,
    languageBuilder,
} from '$components/Lang/builder';

const anime_airing: Config = {
    UNIT_SINGULAR: `عرض`,
    UNIT_PLURAL: `عروض`,
    UNIT_SHORT: `عرض`,
    SUBUNIT_SINGULAR: `حلقة`,
    SUBUNIT_PLURAL: `حلقات`,
    SUBUNIT_SHORT: `الحلقة`,
    // e.g. Ep. 1 airs in 3 days
    SUBUNIT_VERB_FUTURE: `ستُبثُّ`,
    // e.g. Ep. 2 aired 2 hours ago
    SUBUNIT_VERB_PAST: `بُثّت`,
};

const anime_bluray: Config = {
    UNIT_SINGULAR: `عرض`,
    UNIT_PLURAL: `عروض`,
    UNIT_SHORT: `عرض`,
    SUBUNIT_SINGULAR: `قُرص`,
    SUBUNIT_PLURAL: `أقراص`,
    SUBUNIT_SHORT: `القُرص`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `ألغيناه في`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `نشرناه في`,
};

const manga_chapter: Config = {
    UNIT_SINGULAR: `مانجا`,
    UNIT_PLURAL: `مانجات`,
    UNIT_SHORT: `مانجا`,
    SUBUNIT_SINGULAR: `فصل`,
    SUBUNIT_PLURAL: `فصول`,
    SUBUNIT_SHORT: `الفصل`,
    // e.g. Ch. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `ألغيناه في`,
    // e.g. Ch. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `نشرناه في`,
};

const manga_volume: Config = {
    UNIT_SINGULAR: `مانجا`,
    UNIT_PLURAL: `مانجات`,
    UNIT_SHORT: `مانجا`,
    SUBUNIT_SINGULAR: `مُجلّد`,
    SUBUNIT_PLURAL: `مُجلّدات`,
    SUBUNIT_SHORT: `المُجلّد`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `ألغيناه في`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `نشرناه في`,
};

const strings: Strings = {
    /**
     * States without any projects
     */
    // Empty state
    ALL_COMPLETE: `!أكملنا جميع المشاريع`,
    // Error state
    CONNECTION_ERROR: `خطأ في الإتصال`,

    /**
     * Configuration Page
     */
    CONFIG_HEADER: `تهيئة`,
    // Website section
    WEBSITE_SETTINGS_HEADER: `إعدادات موقعك`,
    APP_URL: `رابط أداتك`,
    LINK_PAGE: `إفتح الأداة`,
    PAGE_BGCOLOR: `لون خلفية الموقع`,
    NO_COLOR: `تجاهل لون الخلفية`,
    RECOMMENDED_BGCOLOR: `لون الخلفية الموصى به`,
    OVERRIDE_BGCOLOR: `تجاوز التوصية`,
    // Theme section
    THEME_HEADER: `المظهر`,
    THEME_LIGHT: `فاتح`,
    THEME_DARK: `داكن`,
    // Size section
    SIZE_HEADER: `إختيار الحجم`,
    SIZE_SMALL: `صغير (غير محبّذ)`,
    SIZE_NORMAL: `عادي`,
    // Accent section
    ACCENT_HEADER: `لون التمييز`,
    ACCENT_RED: `أحمر`,
    ACCENT_YELLOW: `أصفر`,
    ACCENT_GREEN: `أخضر`,
    ACCENT_BLUE: `أزرق`,
    ACCENT_INDIGO: `نيلي`,
    ACCENT_PURPLE: `أرجواني`,
    ACCENT_PINK: `زهري`,
    ACCENT_NONE: `بدون`,
    // Language section
    LANGUAGE_HEADER: `اللّغة`,
    // Description in Wordpress embed code
    EMBED_HEADER: `Wordpressرمز التضمين لـ`,
    EMBED_DESCRIPTION: `تغيير حجم الأداة بعد تحميل الصفحة`,
    EMBED_SHOW: `أظهر رمز التضمين`,
    EMBED_HIDE: `أخفِ رمز التضمين`,
    // Example
    ALL_POSITIONS: `جميع مهام الفريق`,
    EXAMPLE_ERROR: `هذا مثال عن شكل الخطأ`,
    EXAMPLE_STATUS: `هذا مثال على رسالة حالة إختيارية`,

    /**
     * Unit (e.g. Show)
     * {0} = list of groups
     * {1} = number of remaining units
     * {2} = relative time
     */
    UNIT_JOINT_WITH: `مع فريق {0}`,
    UNIT_SHOW_LESS: `أظهر أقل`,
    // Plural version if needed, fallback to UNIT_SHOW_LESS otherwise
    UNIT_SHOW_LESS_PLURAL: undefined,
    UNIT_SHOW_REMAINDER_SINGULAR: `أظهر %SUBUNIT_SINGULAR% {1} آخر...`,
    // e.g. Show 2 more episodes...
    UNIT_SHOW_REMAINDER_PLURAL: `أظهر  {1} من %SUBUNIT_PLURAL% آخرى...`,
    // e.g. Updated 5 hours ago
    UNIT_UPDATED: `تم تحديث {2}`,

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
    SUBUNIT_TO_RELEASE: `%SUBUNIT_SHORT% {0} قريباً`,
    // shown when there are unfinished positions
    SUBUNIT_IN_PROGRESS: `%SUBUNIT_SHORT% {0} تحتاج {2}`,
    // shown when all positions are marked incomplete after publication
    SUBUNIT_NO_PROGRESS: `(لا يوجد تقدّم بعد)`,
};

import ar from 'javascript-time-ago/locale/ar';
const lang: Language = {
    locale: ar,
    strings: strings,
};

export default {
    anime_airing: languageBuilder(lang, anime_airing),
    anime_bluray: languageBuilder(lang, anime_bluray),
    manga_chapter: languageBuilder(lang, manga_chapter),
    manga_volume: languageBuilder(lang, manga_volume),
};
