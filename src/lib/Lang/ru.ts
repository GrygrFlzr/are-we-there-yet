/**
 * Russian Translation
 * @author asakurato <begijanovigiorgi@gmail.com>
 * @author JohnnyZB <50960476+JohnnyZB@users.noreply.github.com>
 */

import type { Config, Strings, Language } from '$lib/Lang/builder';
import { languageBuilder } from '$lib/Lang/builder';

const anime_airing: Config = {
	UNIT_SINGULAR: `Сериал`,
	UNIT_PLURAL: `Сериалы`,
	UNIT_SHORT: `Сериал`,
	SUBUNIT_SINGULAR: `серию`,
	SUBUNIT_PLURAL: `серии`,
	SUBUNIT_SHORT: `сер.`,
	// e.g. Ep. 1 airs in 3 days
	SUBUNIT_VERB_FUTURE: `Выходит`,
	// e.g. Ep. 2 aired 2 hours ago
	SUBUNIT_VERB_PAST: `Вышла`
};

const anime_bluray: Config = {
	UNIT_SINGULAR: `Сериал`,
	UNIT_PLURAL: `Сериалы`,
	UNIT_SHORT: `Сериал`,
	SUBUNIT_SINGULAR: `Том`,
	SUBUNIT_PLURAL: `Тома`,
	SUBUNIT_SHORT: `Том`,
	// e.g. Vol. 1 drops in 3 days
	SUBUNIT_VERB_FUTURE: `Выходит`,
	// e.g. Vol. 2 published 2 hours ago
	SUBUNIT_VERB_PAST: `Вышел`
};

const manga_chapter: Config = {
	UNIT_SINGULAR: `Манга`,
	UNIT_PLURAL: `Манги`,
	UNIT_SHORT: `Манга`,
	SUBUNIT_SINGULAR: `глава`,
	SUBUNIT_PLURAL: `главы`,
	SUBUNIT_SHORT: `гл.`,
	// e.g. Ch. 1 drops in 3 days
	SUBUNIT_VERB_FUTURE: `Выходит`,
	// e.g. Ch. 2 published 2 hours ago
	SUBUNIT_VERB_PAST: `Опубликована`
};

const manga_volume: Config = {
	UNIT_SINGULAR: `Манга`,
	UNIT_PLURAL: `Манги`,
	UNIT_SHORT: `Манга`,
	SUBUNIT_SINGULAR: `Том`,
	SUBUNIT_PLURAL: `Тома`,
	SUBUNIT_SHORT: `Том`,
	// e.g. Vol. 1 drops in 3 days
	SUBUNIT_VERB_FUTURE: `Выходит`,
	// e.g. Vol. 2 published 2 hours ago
	SUBUNIT_VERB_PAST: `Опубликован`
};

const strings: Strings = {
	/**
	 * States without any projects
	 */
	// Empty state
	ALL_COMPLETE: `Все проекты завершены!`,
	// Error state
	CONNECTION_ERROR: `Сбой подключения`,

	/**
	 * Configuration Page
	 */
	CONFIG_HEADER: `Конфигурация`,
	// Website section
	WEBSITE_SETTINGS_HEADER: `Параметры сайта`,
	APP_URL: `Адрес вашего приложения`,
	LINK_PAGE: `Перейти на страницу`,
	PAGE_BGCOLOR: `Цвет фона главного сайта`,
	NO_COLOR: `Игнорировать цвет фона`,
	RECOMMENDED_BGCOLOR: `Рекомендованный цвет фона`,
	OVERRIDE_BGCOLOR: `Заменить рекомендацию`,
	// Theme section
	THEME_HEADER: `Выбор темы`,
	THEME_LIGHT: `Светлая`,
	THEME_DARK: `Темная`,
	// Size section
	SIZE_HEADER: `Выбор размера`,
	SIZE_SMALL: `Маленький (Не рекомендуется)`,
	SIZE_NORMAL: `Нормальный`,
	// Accent section
	ACCENT_HEADER: `Цвет шапки`,
	ACCENT_RED: `Красный`,
	ACCENT_YELLOW: `Жёлтый`,
	ACCENT_GREEN: `Зелёный`,
	ACCENT_BLUE: `Синий`,
	ACCENT_INDIGO: `Индиго`,
	ACCENT_PURPLE: `Фиолетовый`,
	ACCENT_PINK: `Розовый`,
	ACCENT_NONE: `Без цвета`,
	// Language section
	LANGUAGE_HEADER: `Язык`,
	// Description in Wordpress embed code
	EMBED_HEADER: `Код для Wordpress`,
	EMBED_DESCRIPTION: `Изменить размер iframe после загрузки страницы`,
	EMBED_SHOW: `Показать встраиваемый код`,
	EMBED_HIDE: `Скрыть встраиваемый код`,
	// Example
	ALL_POSITIONS: `Все должности`,

	/**
	 * Unit (e.g. Show)
	 * {0} = list of groups
	 * {1} = number of remaining units
	 * {2} = relative time
	 */
	UNIT_JOINT_WITH: `Совместно с {0}`,
	UNIT_SHOW_LESS: `Показать меньше`,
	// Plural version if needed, fallback to UNIT_SHOW_LESS otherwise
	UNIT_SHOW_LESS_PLURAL: undefined,
	UNIT_SHOW_REMAINDER_SINGULAR: `Показать ещё {1} %SUBUNIT_SINGULAR%...`,
	// e.g. Show 2 more episodes...
	UNIT_SHOW_REMAINDER_PLURAL: `Показать ещё {1} %SUBUNIT_PLURAL%...`,
	// e.g. Updated 5 hours ago
	UNIT_UPDATED: `Обновлено {2}`,

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
	SUBUNIT_TO_RELEASE: `%SUBUNIT_SHORT% {0} будет выпущена`,
	// shown when there are unfinished positions
	SUBUNIT_IN_PROGRESS: `%SUBUNIT_SHORT% {0} требует {2}`,
	// shown when all positions are marked incomplete after publication
	SUBUNIT_NO_PROGRESS: `(Прогресса нет)`
};

import ru from 'javascript-time-ago/locale/ru';
const lang: Language = {
	locale: ru,
	strings: strings
};

export default {
	anime_airing: languageBuilder(lang, anime_airing),
	anime_bluray: languageBuilder(lang, anime_bluray),
	manga_chapter: languageBuilder(lang, manga_chapter),
	manga_volume: languageBuilder(lang, manga_volume)
};
