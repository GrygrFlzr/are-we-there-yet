import {
    Config,
    Strings,
    Language,
    languageBuilder,
} from '$components/Lang/builder';

const anime: Config = {
    UNIT_SINGULAR: `acara`,
    UNIT_PLURAL: `acara`,
    UNIT_SHORT: `Acara`,
    SUBUNIT_SINGULAR: `episode`,
    SUBUNIT_PLURAL: `episode`,
    SUBUNIT_SHORT: `Ep.`,
    SUBUNIT_VERB_FUTURE: `akan tayang`,
    SUBUNIT_VERB_PAST: `sudah tayang`,
};

const strings: Strings = {
    /**
     * States without any projects
     */
    // Empty state
    ALL_COMPLETE: `Semua proyek sudah selesai!`,
    // Error state
    CONNECTION_ERROR: `Hubungan bermasalah`,

    /**
     * Configuration Page
     */
    CONFIG_HEADER: `Konfigurasi`,
    // Website section
    WEBSITE_SETTINGS_HEADER: `Pengaturan situs`,
    APP_URL: `URL aplikasi`,
    LINK_PAGE: `Buka halaman`,
    PAGE_BGCOLOR: `Warna latar belakang halaman`,
    NO_COLOR: `Abaikan warna latar`,
    RECOMMENDED_BGCOLOR: `Rekomendasi warna latar`,
    OVERRIDE_BGCOLOR: `Override recommendation`,
    // Theme section
    THEME_HEADER: `Pilihan Tema`,
    THEME_LIGHT: `Terang`,
    THEME_DARK: `Gelap`,
    // Size section
    SIZE_HEADER: `Pilihan Ukuran`,
    SIZE_SMALL: `Kecil (tidak dianjurkan)`,
    SIZE_NORMAL: `Reguler`,
    // Accent section
    ACCENT_HEADER: `Warna aksen`,
    ACCENT_RED: `Merah`,
    ACCENT_YELLOW: `Kuning`,
    ACCENT_GREEN: `Hijau`,
    ACCENT_BLUE: `Biru`,
    ACCENT_INDIGO: `Indigo`,
    ACCENT_PURPLE: `Nila`,
    ACCENT_PINK: `Merah muda`,
    ACCENT_NONE: `Tanpa aksen`,
    // Language section
    LANGUAGE_HEADER: `Bahasa`,
    // Description in Wordpress embed code
    EMBED_HEADER: `Kode Embed untuk Wordpress`,
    EMBED_DESCRIPTION: `Ubah ukuran iframe setelah pemuatan halaman`,
    EMBED_SHOW: `Tunjukkan kode embed`,
    EMBED_HIDE: `Sembunyikan kode embed`,
    // Example
    ALL_POSITIONS: `Semua Posisi Staf`,

    /**
     * Unit (e.g. Show)
     * {0} = list of groups
     * {1} = number of remaining units
     * {2} = relative time
     */
    UNIT_JOINT_WITH: `Bersama dengan {0}`,
    UNIT_SHOW_LESS: `Sembunyikan`,
    UNIT_SHOW_REMAINDER_SINGULAR: `Tunjukkan {1} %SUBUNIT_SINGULAR%...`,
    // e.g. Show 2 more episodes...
    UNIT_SHOW_REMAINDER_PLURAL: `Tunjukkan {1} %SUBUNIT_PLURAL%...`,
    // e.g. Updated 5 hours ago
    UNIT_UPDATED: `Diperbarui {2}`,

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
    SUBUNIT_TO_RELEASE: `%SUBUNIT_SHORT% {0} menunggu rilis`,
    // shown when there are unfinished positions
    SUBUNIT_IN_PROGRESS: `%SUBUNIT_SHORT% {0} menunggu {2}`,
    // shown when all positions are marked incomplete after publication
    SUBUNIT_NO_PROGRESS: `(belum ada kemajuan)`,
};

import id from 'javascript-time-ago/locale/id';
const lang: Language = {
    locale: id,
    strings: strings,
};

export default languageBuilder(lang, anime);
