/**
 * Portuguese translation
 * @author Hitman <fate4anime@gmail.com>
 */

import type { Config, Strings, Language } from '$lib/Lang/builder';
import { languageBuilder } from '$lib/Lang/builder';

const anime_airing: Config = {
	UNIT_SINGULAR: `anime`,
	UNIT_PLURAL: `animes`,
	UNIT_SHORT: `Anime`,
	SUBUNIT_SINGULAR: `episódio`,
	SUBUNIT_PLURAL: `episódios`,
	SUBUNIT_SHORT: `Eps.`,
	// e.g. Ep. 1 airs in 3 days
	SUBUNIT_VERB_FUTURE: `será transmitido em`,
	// e.g. Ep. 2 aired 2 hours ago
	SUBUNIT_VERB_PAST: `foi transmitido há`
};

const anime_bluray: Config = {
	UNIT_SINGULAR: `anime`,
	UNIT_PLURAL: `animes`,
	UNIT_SHORT: `Anime`,
	SUBUNIT_SINGULAR: `volume`,
	SUBUNIT_PLURAL: `volumes`,
	SUBUNIT_SHORT: `Vol.`,
	// e.g. Vol. 1 drops in 3 days
	SUBUNIT_VERB_FUTURE: `será lançado em`,
	// e.g. Vol. 2 published 2 hours ago
	SUBUNIT_VERB_PAST: `foi lançado há`
};

const manga_chapter: Config = {
	UNIT_SINGULAR: `manga`,
	UNIT_PLURAL: `manga`,
	UNIT_SHORT: `Manga`,
	SUBUNIT_SINGULAR: `capítulo`,
	SUBUNIT_PLURAL: `capítulos`,
	SUBUNIT_SHORT: `Cap.`,
	// e.g. Ch. 1 drops in 3 days
	SUBUNIT_VERB_FUTURE: `será publicado em`,
	// e.g. Ch. 2 published 2 hours ago
	SUBUNIT_VERB_PAST: `foi publicado há`
};

const manga_volume: Config = {
	UNIT_SINGULAR: `manga`,
	UNIT_PLURAL: `manga`,
	UNIT_SHORT: `Manga`,
	SUBUNIT_SINGULAR: `volume`,
	SUBUNIT_PLURAL: `volumes`,
	SUBUNIT_SHORT: `Vol.`,
	// e.g. Vol. 1 drops in 3 days
	SUBUNIT_VERB_FUTURE: `será publicado em`,
	// e.g. Vol. 2 published 2 hours ago
	SUBUNIT_VERB_PAST: `foi publicado há`
};

const strings: Strings = {
	/**
	 * States without any projects
	 */
	// Empty state
	ALL_COMPLETE: `Todos os projetos estão concluídos!`,
	// Error state
	CONNECTION_ERROR: `Erro de conexão`,

	/**
	 * Configuration Page
	 */
	CONFIG_HEADER: `Configuração`,
	// Website section
	WEBSITE_SETTINGS_HEADER: `Preferências`,
	APP_URL: `Hiperligação da tua aplicação`,
	LINK_PAGE: `Ir para a página`,
	PAGE_BGCOLOR: `Cor de fundo principal do site`,
	NO_COLOR: `Ignorar cor de fundo`,
	RECOMMENDED_BGCOLOR: `Cor de fundo recomendada`,
	OVERRIDE_BGCOLOR: `Substituir recomendação`,
	// Theme section
	THEME_HEADER: `Escolha de Tema`,
	THEME_LIGHT: `Claro`,
	THEME_DARK: `Escuro`,
	// Size section
	SIZE_HEADER: `Tamanho`,
	SIZE_SMALL: `Pequeno (não recomendado)`,
	SIZE_NORMAL: `Normal`,
	// Accent section
	ACCENT_HEADER: `Cor da Linha Horizontal`,
	ACCENT_RED: `Vermelho`,
	ACCENT_YELLOW: `Amarelo`,
	ACCENT_GREEN: `Verde`,
	ACCENT_BLUE: `Azul`,
	ACCENT_INDIGO: `Anil`,
	ACCENT_PURPLE: `Roxo`,
	ACCENT_PINK: `Cor-de-rosa`,
	ACCENT_NONE: `Nenhuma`,
	// Language section
	LANGUAGE_HEADER: `Língua`,
	// Description in Wordpress embed code
	EMBED_HEADER: `Código Embed para o Wordpress`,
	EMBED_DESCRIPTION: `Altera o tamanho da iframe depois da página ser carregada`,
	EMBED_SHOW: `Mostrar código embed`,
	EMBED_HIDE: `Esconder código embed`,
	// Example
	ALL_POSITIONS: `Todos os Cargos da Equipa`,
	EXAMPLE_ERROR: `Isto é um exemplo de um erro`,
	EXAMPLE_STATUS: `Isto é um exemplo de uma mensagem opcional do estado`,

	/**
	 * Unit (e.g. Show)
	 * {0} = list of groups
	 * {1} = number of remaining units
	 * {2} = relative time
	 */
	UNIT_JOINT_WITH: `Em parceria com {0}`,
	UNIT_SHOW_LESS: `Mostrar menos`,
	// Plural version if needed, fallback to UNIT_SHOW_LESS otherwise
	UNIT_SHOW_LESS_PLURAL: undefined,
	UNIT_SHOW_REMAINDER_SINGULAR: `Mostrar {1} mais %SUBUNIT_SINGULAR%...`,
	// e.g. Show 2 more episodes...
	UNIT_SHOW_REMAINDER_PLURAL: `Mostrar {1} mais %SUBUNIT_PLURAL%...`,
	// e.g. Updated 5 hours ago
	UNIT_UPDATED: `Atualizado há {2}`,

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
	SUBUNIT_TO_RELEASE: `%SUBUNIT_SHORT% {0} para ser lançado`,
	// shown when there are unfinished positions
	SUBUNIT_IN_PROGRESS: `%SUBUNIT_SHORT% {0} em falta {2}`,
	// shown when all positions are marked incomplete after publication
	SUBUNIT_NO_PROGRESS: `(ainda não há progresso)`
};

import pt from 'javascript-time-ago/locale/pt/index.js';
const lang: Language = {
	locale: pt,
	strings: strings
};

export default {
	anime_airing: languageBuilder(lang, anime_airing),
	anime_bluray: languageBuilder(lang, anime_bluray),
	manga_chapter: languageBuilder(lang, manga_chapter),
	manga_volume: languageBuilder(lang, manga_volume)
};
