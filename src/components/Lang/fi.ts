/**
 * Finnish translation
 * @author petzku <petzku@zku.fi>
 */

import {
    Config,
    Strings,
    Language,
    languageBuilder,
} from '$components/Lang/builder';

const anime_airing: Config = {
    UNIT_SINGULAR: `sarja`,
    UNIT_PLURAL: `sarjat`,
    UNIT_SHORT: `Sarja`,
    SUBUNIT_SINGULAR: `jakso`,
    SUBUNIT_PLURAL: `jaksoa`,
    SUBUNIT_SHORT: `Jakso`,
    // e.g. Ep. 1 airs in 3 days
    SUBUNIT_VERB_FUTURE: `ilmestyy`,
    // e.g. Ep. 2 aired 2 hours ago
    SUBUNIT_VERB_PAST: `ilmestyi`,
};

const anime_bluray: Config = {
    UNIT_SINGULAR: `sarja`,
    UNIT_PLURAL: `sarjat`,
    UNIT_SHORT: `Sarja`,
    // note: there may be a non-loanword in use I'm not aware of
    SUBUNIT_SINGULAR: `boksi`,
    SUBUNIT_PLURAL: `boksia`,
    SUBUNIT_SHORT: `Vol.`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `julkaistaan`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `julkaistiin`,
};

const manga_chapter: Config = {
    UNIT_SINGULAR: `manga`,
    UNIT_PLURAL: `manga`,
    UNIT_SHORT: `Manga`,
    SUBUNIT_SINGULAR: `luku`,
    SUBUNIT_PLURAL: `lukua`,
    SUBUNIT_SHORT: `Luku`,
    // e.g. Ch. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `ilmestyy`,
    // e.g. Ch. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `ilmestyi`,
};

const manga_volume: Config = {
    UNIT_SINGULAR: `manga`,
    UNIT_PLURAL: `manga`,
    UNIT_SHORT: `Manga`,
    SUBUNIT_SINGULAR: `pokkari`,
    SUBUNIT_PLURAL: `pokkaria`,
    SUBUNIT_SHORT: `Vol.`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `julkaistaan`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `julkaistiin`,
};

const strings: Strings = {
    /**
     * States without any projects
     */
    // Empty state
    ALL_COMPLETE: `Kaikki projektit ovat valmiita!`,
    // Error state
    CONNECTION_ERROR: `Yhteysvirhe`,

    /**
     * Configuration Page
     */
    CONFIG_HEADER: `Asetukset`,
    // Website section
    WEBSITE_SETTINGS_HEADER: `Verkkosivun asetukset`,
    APP_URL: `Sovelluksen URL-osoite`,
    LINK_PAGE: `Mene sivulle`,
    PAGE_BGCOLOR: `Sivuston taustaväri`,
    NO_COLOR: `Älä välitä taustaväristä`,
    RECOMMENDED_BGCOLOR: `Suositeltu taustaväri`,
    OVERRIDE_BGCOLOR: `Ohita suositus`,
    // Theme section
    THEME_HEADER: `Teemavalinta`,
    THEME_LIGHT: `Vaalea`,
    THEME_DARK: `Tumma`,
    // Size section
    SIZE_HEADER: `Kokovalinta`,
    SIZE_SMALL: `Pieni (ei suositella)`,
    SIZE_NORMAL: `Keskikokoinen`,
    // Accent section
    ACCENT_HEADER: `Korostusväri`,
    ACCENT_RED: `Punainen`,
    ACCENT_YELLOW: `Keltainen`,
    ACCENT_GREEN: `Vihreä`,
    ACCENT_BLUE: `Sininen`,
    ACCENT_INDIGO: `Indigonsininen`,
    ACCENT_PURPLE: `Violetti`,
    ACCENT_PINK: `Pinkki`,
    ACCENT_NONE: `Ei korostusta`,
    // Language section
    LANGUAGE_HEADER: `Kieli`,
    // Description in Wordpress embed code
    EMBED_HEADER: `Wordpress-upotuskoodi`,
    EMBED_DESCRIPTION: `Muuta iframen kokoa sivun latauduttua`,
    EMBED_SHOW: `Näytä upotuskoodi`,
    EMBED_HIDE: `Piilota upotuskoodi`,
    // Example
    ALL_POSITIONS: `Kaikki työtehtävät`,

    /**
     * Unit (e.g. Show)
     * {0} = list of groups
     * {1} = number of remaining units
     * {2} = relative time
     */
    UNIT_JOINT_WITH: `Yhteistyössä: {0}`,
    UNIT_SHOW_LESS: `Piilota seuraava %SUBUNIT_SINGULAR%`,
    // Plural version if needed, fallback to UNIT_SHOW_LESS otherwise
    UNIT_SHOW_LESS_PLURAL: `Piilota muut %SUBUNIT_PLURAL%`,
    UNIT_SHOW_REMAINDER_SINGULAR: `Näytä seuraava %SUBUNIT_SINGULAR%...`,
    // e.g. Show 2 more episodes...
    UNIT_SHOW_REMAINDER_PLURAL: `Näytä seuraavat {1} %SUBUNIT_PLURAL%...`,
    // e.g. Updated 5 hours ago
    UNIT_UPDATED: `Päivitetty {2}`,

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
    SUBUNIT_TO_RELEASE: `%SUBUNIT_SHORT% {0} odottaa julkaisua`,
    // shown when there are unfinished positions
    SUBUNIT_IN_PROGRESS: `%SUBUNIT_SHORT% {0} odottaa: {2}`,
    // shown when all positions are marked incomplete after publication
    SUBUNIT_NO_PROGRESS: `(ei vielä edistynyt)`,
};

import fi from 'javascript-time-ago/locale/fi';
const lang: Language = {
    locale: fi,
    strings: strings,
};

export default {
    anime_airing: languageBuilder(lang, anime_airing),
    anime_bluray: languageBuilder(lang, anime_bluray),
    manga_chapter: languageBuilder(lang, manga_chapter),
    manga_volume: languageBuilder(lang, manga_volume),
};
