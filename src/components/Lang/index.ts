import type { Language } from '$components/Lang/builder';
import en from '$components/Lang/en';
import id from '$components/Lang/id';
import ru from '$components/Lang/ru';
import he from '$components/Lang/he';
import pl from '$components/Lang/pl';
import TimeAgo from 'javascript-time-ago';

TimeAgo.addLocale(en.anime_airing.locale);
TimeAgo.addLocale(id.anime_airing.locale);
TimeAgo.addLocale(ru.anime_airing.locale);
TimeAgo.addLocale(he.anime_airing.locale);
TimeAgo.setDefaultLocale(en.anime_airing.locale.locale);

function localizeTo(language: Language, reference: string) {
    return language.strings[reference] || 'Unknown localization code used.';
}

type ConfigNames =
    | 'anime_airing'
    | 'anime_bluray'
    | 'manga_chapter'
    | 'manga_volume';

export const languages = [en, id, ru, he, pl];
export const languageNames = ['en', 'id', 'ru', 'he', 'pl'];
export function createLocalization(
    lang_locale: string = 'en',
    context: ConfigNames = 'anime_airing'
) {
    const language = languages.find(
        (lang) => lang[context].locale.locale === lang_locale
    )[context];
    const timeAgo = new TimeAgo(language.locale.locale);
    return {
        localize: (reference: string) => localizeTo(language, reference),
        timeAgo,
    };
}
