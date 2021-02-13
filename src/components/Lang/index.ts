import type { Language } from '$components/Lang/builder';
import en from '$components/Lang/en';
import id from '$components/Lang/id';
import ru from '$components/Lang/ru';
import he from '$components/Lang/he';
import pl from '$components/Lang/pl';
import fi from '$components/Lang/fi';
import es from '$components/Lang/es';
import TimeAgo from 'javascript-time-ago';

export const languages = [en, id, ru, he, pl, fi, es];
export const languageNames = languages.map(
    (language) => language.anime_airing.locale.locale
);
for (const language of languages) {
    TimeAgo.addLocale(language.anime_airing.locale);
}
TimeAgo.setDefaultLocale(en.anime_airing.locale.locale);

function localizeTo(
    language: Language,
    reference: string,
    fallbackReference?: string
) {
    return (
        language.strings[reference] ||
        language.strings[fallbackReference] ||
        `untranslated ${reference} for language ${language.locale.locale}`
    );
}

type ConfigNames =
    | 'anime_airing'
    | 'anime_bluray'
    | 'manga_chapter'
    | 'manga_volume';

export function createLocalization(
    lang_locale: string = 'en',
    context: ConfigNames = 'anime_airing'
) {
    const language = languages.find(
        (lang) => lang[context].locale.locale === lang_locale
    )[context];
    const timeAgo = new TimeAgo(language.locale.locale);
    return {
        localize: (reference: string, fallbackReference?: string) =>
            localizeTo(language, reference, fallbackReference),
        timeAgo,
    };
}
