import type { Locale } from 'javascript-time-ago/locale';

export type Config = Record<string, string>;
export type Strings = Record<string, string>;
export type Language = {
    locale: Locale;
    strings: Strings;
};

const key_name_regex = /%[A-Z_]+%/;

export function languageBuilder(lang: Language, config: Config): Language {
    const processedStrings = Object.fromEntries(
        Object.entries(lang.strings).map((item) => {
            let [key, value] = item;
            const shouldSubstitute = key_name_regex.test(value);
            if (shouldSubstitute) {
                for (const [config_key, config_value] of Object.entries(
                    config
                )) {
                    const config_replace = RegExp(`%${config_key}%`, 'g');
                    value = value.replace(config_replace, config_value);
                }
            }
            return [key, value];
        })
    );
    return {
        locale: lang.locale,
        strings: processedStrings,
    };
}
