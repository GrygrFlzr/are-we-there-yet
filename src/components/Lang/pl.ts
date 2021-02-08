import {
    Config,
    Strings,
    Language,
    languageBuilder,
} from '$components/Lang/builder';

const anime_airing: Config = {
    UNIT_SINGULAR: `seria`,
    UNIT_PLURAL: `serie`,
    UNIT_SHORT: `Seria`,
    SUBUNIT_SINGULAR: `odcinek`,
    SUBUNIT_PLURAL: `odcinki`,
    SUBUNIT_SHORT: `Odc.`,
    // e.g. Ep. 1 airs in 3 days
    SUBUNIT_VERB_FUTURE: `wychodzi`,
    // e.g. Ep. 2 aired 2 hours ago
    SUBUNIT_VERB_PAST: `wyszedł`,
};

const anime_bluray: Config = {
    UNIT_SINGULAR: `seria`,
    UNIT_PLURAL: `serie`,
    UNIT_SHORT: `Seria`,
    SUBUNIT_SINGULAR: `płyta`,
    SUBUNIT_PLURAL: `płyty`,
    SUBUNIT_SHORT: `Płyta`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `wychodzi`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `wyszedł`,
};

const manga_chapter: Config = {
    UNIT_SINGULAR: `manga`,
    UNIT_PLURAL: `mangi`,
    UNIT_SHORT: `Manga`,
    SUBUNIT_SINGULAR: `rozdział`,
    SUBUNIT_PLURAL: `rozdziały`,
    SUBUNIT_SHORT: `Roz.`,
    // e.g. Ch. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `wychodzi`,
    // e.g. Ch. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `wyszedł`,
};

const manga_volume: Config = {
    UNIT_SINGULAR: `manga`,
    UNIT_PLURAL: `manga`,
    UNIT_SHORT: `Manga`,
    SUBUNIT_SINGULAR: `tom`,
    SUBUNIT_PLURAL: `tomy`,
    SUBUNIT_SHORT: `Tom`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `wychodzi`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `wyszedł`,
};

const strings: Strings = {
    /**
     * States without any projects
     */
    // Empty state
    ALL_COMPLETE: `Wszystkie projekty ukończone!`,
    // Error state
    CONNECTION_ERROR: `Błąd połączenia`,

    /**
     * Configuration Page
     */
    CONFIG_HEADER: `Konfiguracja`,
    // Website section
    WEBSITE_SETTINGS_HEADER: `Ustawienia strony`,
    APP_URL: `Adres twojej aplikacji`,
    LINK_PAGE: `Idź do strony`,
    PAGE_BGCOLOR: `Główny kolor tła`,
    NO_COLOR: `Ignoruj kolor tła`,
    RECOMMENDED_BGCOLOR: `Rekomendowany kolor tła`,
    OVERRIDE_BGCOLOR: `Ignoruj rekomendowany kolor tła`,
    // Theme section
    THEME_HEADER: `Motyw`,
    THEME_LIGHT: `Jasny`,
    THEME_DARK: `Ciemny`,
    // Size section
    SIZE_HEADER: `Rozmiar`,
    SIZE_SMALL: `Mały (niepolecany)`,
    SIZE_NORMAL: `Normalny`,
    // Accent section
    ACCENT_HEADER: `Kolor akcentu`,
    ACCENT_RED: `Czerwony`,
    ACCENT_YELLOW: `Żółty`,
    ACCENT_GREEN: `Zielony`,
    ACCENT_BLUE: `Niebieski`,
    ACCENT_INDIGO: `Indygo`,
    ACCENT_PURPLE: `Fioletowy`,
    ACCENT_PINK: `Różowy`,
    ACCENT_NONE: `Brak`,
    // Language section
    LANGUAGE_HEADER: `Język`,
    // Description in Wordpress embed code
    EMBED_HEADER: `Kod do osadzenia w Wordpressie`,
    EMBED_DESCRIPTION: `Zmień rozmiar iframe po załadowaniu strony`,
    EMBED_SHOW: `Pokaż kod`,
    EMBED_HIDE: `Ukryj kod`,
    // Example
    ALL_POSITIONS: `Wszystkie role`,

    /**
     * Unit (e.g. Show)
     * {0} = list of groups
     * {1} = number of remaining units
     * {2} = relative time
     */
    UNIT_JOINT_WITH: `Wspólnie z {0}`,
    UNIT_SHOW_LESS: `Pokaż mniej`,
    UNIT_SHOW_REMAINDER_SINGULAR: `Pokaż więcej...`,
    // e.g. Show 2 more episodes...
    UNIT_SHOW_REMAINDER_PLURAL: `Pokaż więcej...`,
    // e.g. Updated 5 hours ago
    UNIT_UPDATED: `Zaktualizowano {2}`,

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
    SUBUNIT_TO_RELEASE: `%SUBUNIT_SHORT% {0} gotowy`,
    // shown when there are unfinished positions
    SUBUNIT_IN_PROGRESS: `%SUBUNIT_SHORT% {0} wymaga {2}`,
    // shown when all positions are marked incomplete after publication
    SUBUNIT_NO_PROGRESS: `(nierozpoczęty)`,
};

import pl from 'javascript-time-ago/locale/pl';
const lang: Language = {
    locale: pl,
    strings: strings,
};

export default {
    anime_airing: languageBuilder(lang, anime_airing),
    anime_bluray: languageBuilder(lang, anime_bluray),
    manga_chapter: languageBuilder(lang, manga_chapter),
    manga_volume: languageBuilder(lang, manga_volume),
};