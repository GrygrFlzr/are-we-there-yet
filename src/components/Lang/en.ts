import {
    Config,
    Strings,
    Language,
    languageBuilder,
} from '$components/Lang/builder';

const anime_airing: Config = {
    UNIT_SINGULAR: `show`,
    UNIT_PLURAL: `shows`,
    UNIT_SHORT: `Show`,
    SUBUNIT_SINGULAR: `episode`,
    SUBUNIT_PLURAL: `episodes`,
    SUBUNIT_SHORT: `Ep.`,
    // e.g. Ep. 1 airs in 3 days
    SUBUNIT_VERB_FUTURE: `airs`,
    // e.g. Ep. 2 aired 2 hours ago
    SUBUNIT_VERB_PAST: `aired`,
};

const anime_bluray: Config = {
    UNIT_SINGULAR: `show`,
    UNIT_PLURAL: `shows`,
    UNIT_SHORT: `Show`,
    SUBUNIT_SINGULAR: `volume`,
    SUBUNIT_PLURAL: `volumes`,
    SUBUNIT_SHORT: `Vol.`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `drops`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `published`,
};

const manga_chapter: Config = {
    UNIT_SINGULAR: `manga`,
    UNIT_PLURAL: `manga`,
    UNIT_SHORT: `Manga`,
    SUBUNIT_SINGULAR: `chapter`,
    SUBUNIT_PLURAL: `chapters`,
    SUBUNIT_SHORT: `Ch.`,
    // e.g. Ch. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `drops`,
    // e.g. Ch. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `published`,
};

const manga_volume: Config = {
    UNIT_SINGULAR: `manga`,
    UNIT_PLURAL: `manga`,
    UNIT_SHORT: `Manga`,
    SUBUNIT_SINGULAR: `volume`,
    SUBUNIT_PLURAL: `volumes`,
    SUBUNIT_SHORT: `Vol.`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `drops`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `published`,
};

const strings: Strings = {
    /**
     * States without any projects
     */
    // Empty state
    ALL_COMPLETE: `All projects are complete!`,
    // Error state
    CONNECTION_ERROR: `Connection error`,

    /**
     * Configuration Page
     */
    CONFIG_HEADER: `Configuration`,
    // Website section
    WEBSITE_SETTINGS_HEADER: `Website Settings`,
    APP_URL: `Your application URL`,
    LINK_PAGE: `Go to page`,
    PAGE_BGCOLOR: `Main site background color`,
    NO_COLOR: `Ignore background color`,
    RECOMMENDED_BGCOLOR: `Recommended background color`,
    OVERRIDE_BGCOLOR: `Override recommendation`,
    // Theme section
    THEME_HEADER: `Theme Choice`,
    THEME_LIGHT: `Light`,
    THEME_DARK: `Dark`,
    // Size section
    SIZE_HEADER: `Size Choice`,
    SIZE_SMALL: `Small (not recommended)`,
    SIZE_NORMAL: `Normal`,
    // Accent section
    ACCENT_HEADER: `Accent Color`,
    ACCENT_RED: `Red`,
    ACCENT_YELLOW: `Yellow`,
    ACCENT_GREEN: `Green`,
    ACCENT_BLUE: `Blue`,
    ACCENT_INDIGO: `Indigo`,
    ACCENT_PURPLE: `Purple`,
    ACCENT_PINK: `Pink`,
    ACCENT_NONE: `None`,
    // Language section
    LANGUAGE_HEADER: `Language`,
    // Description in Wordpress embed code
    EMBED_HEADER: `Wordpress Embed Code`,
    EMBED_DESCRIPTION: `Resize the iframe after page load`,
    EMBED_SHOW: `Show embed code`,
    EMBED_HIDE: `Hide embed code`,
    // Example
    ALL_POSITIONS: `All Staff Positions`,

    /**
     * Unit (e.g. Show)
     * {0} = list of groups
     * {1} = number of remaining units
     * {2} = relative time
     */
    UNIT_JOINT_WITH: `Joint with {0}`,
    UNIT_SHOW_LESS: `Show less`,
    UNIT_SHOW_REMAINDER_SINGULAR: `Show {1} more %SUBUNIT_SINGULAR%...`,
    // e.g. Show 2 more episodes...
    UNIT_SHOW_REMAINDER_PLURAL: `Show {1} more %SUBUNIT_PLURAL%...`,
    // e.g. Updated 5 hours ago
    UNIT_UPDATED: `Updated {2}`,

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
    SUBUNIT_TO_RELEASE: `%SUBUNIT_SHORT% {0} to be released`,
    // shown when there are unfinished positions
    SUBUNIT_IN_PROGRESS: `%SUBUNIT_SHORT% {0} requires {2}`,
    // shown when all positions are marked incomplete after publication
    SUBUNIT_NO_PROGRESS: `(no progress yet)`,
};

import en from 'javascript-time-ago/locale/en';
const lang: Language = {
    locale: en,
    strings: strings,
};

export default {
    anime_airing: languageBuilder(lang, anime_airing),
    anime_bluray: languageBuilder(lang, anime_bluray),
    manga_chapter: languageBuilder(lang, manga_chapter),
    manga_volume: languageBuilder(lang, manga_volume),
};
