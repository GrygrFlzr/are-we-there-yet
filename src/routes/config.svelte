<script>
    import Card from '$components/Card.svelte';
    import Example from '$components/Example.svelte';
    import CheckSmall from '$components/Icon/CheckSmall.svelte';
    import ChevronDownSmall from '$components/Icon/ChevronDownSmall.svelte';
    import ChevronUpSmall from '$components/Icon/ChevronUpSmall.svelte';
    import ExternalLink from '$components/Icon/ExternalLink.svelte';
    import XSmall from '$components/Icon/XSmall.svelte';
    import { createLocalization, languageNames } from '$components/Lang';
    import Localized from '$components/Lang/Localized.svelte';
    import { onMount, setContext } from 'svelte';
    import { writable } from 'svelte/store';

    let theme = 'light';
    let accent = 'green';
    let size = 'normal';
    let lang = writable('en');
    let domain = '';

    let expanded = false;

    function toggleExpand() {
        expanded = !expanded;
    }

    const accentOptions = {
        red: 'bg-red-100 text-red-800 border-red-200',
        yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        green: 'bg-green-100 text-green-800 border-green-200',
        blue: 'bg-blue-100 text-blue-800 border-blue-200',
        indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        purple: 'bg-purple-100 text-purple-800 border-purple-200',
        pink: 'bg-pink-100 text-pink-800 border-pink-200',
        none: 'bg-gray-100 text-gray-800 border-gray-200',
    };

    onMount(() => {
        domain = window.location.origin;
    });

    $: settings = {
        theme,
        accent,
        size,
        lang: $lang,
    };
    $: querystring = Object.entries(settings)
        .map((item) => `${item[0]}=${item[1]}`)
        .join('&');
    $: setContext('lang', lang);
    $: localization = createLocalization($lang);
    $: localize = localization.localize;
    $: embedCode = `<${'script'}>
    /**
     * ${localization ? localize('EMBED_DESCRIPTION') : ''}
     */
    window.addEventListener(
        'message',
        function (event) {
            if (event.origin !== '${domain}') {
                return;
            }

            const data = JSON.parse(event.data);
            const iframe = document.getElementById('areWeThereYet');
            if (data.action === 'resize') {
                iframe.height = data.height;
                iframe.style.opacity = '1';
            }
        },
        false
    );
</${'script'}>
<iframe
    id="areWeThereYet"
    src="${domain}/?${querystring}"
    allowtransparency="true"
    frameborder="0"
    style="opacity: 0; min-width: 100%;"
></iframe>`;
</script>

<div
    class="w-full h-full min-h-screen transition-colors"
    class:bg-gray-900={theme === 'dark'}
>
    <div class="m-auto container grid sm:grid-cols-2 gap-4 py-4">
        <div class="sm:col-span-2">
            <Card header={localize('CONFIG_HEADER')} {theme}>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="sm:col-span-2">
                        <h3 class="text-2xl">
                            <Localized key="WEBSITE_SETTINGS_HEADER" />
                        </h3>
                        <p class="mt-2">
                            <Localized key="APP_URL" />
                        </p>
                        <input
                            class="px-2 py-1 bg-gray-200 dark:bg-gray-600"
                            type="text"
                            value="{domain}/?{querystring}"
                            disabled
                        />
                        <p class="mt-2 text-blue-700 dark:text-blue-300">
                            <a
                                href="{domain}/?{querystring}"
                                class="flex flex-row"
                            >
                                <div class="h-6 w-6 mr-1">
                                    <ExternalLink />
                                </div>
                                <Localized key="LINK_PAGE" />
                            </a>
                        </p>
                    </div>
                    <div>
                        <h3 class="text-2xl">
                            <Localized key="THEME_HEADER" />
                        </h3>
                        <div class="flex flex-col">
                            <label>
                                <input
                                    type="radio"
                                    bind:group={theme}
                                    value="light"
                                />
                                <Localized
                                    key="THEME_LIGHT"
                                    class="inline-block"
                                />
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    bind:group={theme}
                                    value="dark"
                                />
                                <Localized
                                    key="THEME_DARK"
                                    class="inline-block"
                                />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-2xl">
                            <Localized key="SIZE_HEADER" />
                        </h3>
                        <div class="flex flex-col">
                            <label>
                                <input
                                    type="radio"
                                    bind:group={size}
                                    value="small"
                                />
                                <Localized
                                    key="SIZE_SMALL"
                                    class="inline-block"
                                />
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    bind:group={size}
                                    value="normal"
                                />
                                <Localized
                                    key="SIZE_NORMAL"
                                    class="inline-block"
                                />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-2xl">
                            <Localized key="ACCENT_HEADER" />
                        </h3>
                        <div class="grid grid-cols-2 gap-2 py-2">
                            {#each Object.keys(accentOptions) as color (color)}
                                <label class="text-base flex flex-row">
                                    <input
                                        class="hidden"
                                        type="radio"
                                        value={color}
                                        bind:group={accent}
                                    />
                                    {#if accent === color}
                                        <div
                                            class="rounded-full w-7 h-7 p-1 mr-2 {accentOptions[
                                                color
                                            ]}"
                                        >
                                            <CheckSmall />
                                        </div>
                                    {:else}
                                        <div class="w-7 h-7 p-1 mr-2">
                                            <XSmall />
                                        </div>
                                    {/if}
                                    <span
                                        class="rounded border px-2 cursor-pointer {accentOptions[
                                            color
                                        ]}"
                                    >
                                        {localize(
                                            `ACCENT_${color.toUpperCase()}`
                                        )}
                                    </span>
                                </label>
                            {/each}
                        </div>
                    </div>
                    <div>
                        <h3 class="text-2xl">
                            <Localized key="LANGUAGE_HEADER" />
                        </h3>
                        <div class="grid grid-cols-2 gap-2 py-2">
                            {#each languageNames as languageCode (languageCode)}
                                <label class="text-base flex flex-row">
                                    <input
                                        class="hidden"
                                        type="radio"
                                        value={languageCode}
                                        bind:group={$lang}
                                    />
                                    {#if $lang === languageCode}
                                        <div
                                            class="rounded-full w-7 h-7 p-1 mr-2 {accentOptions[
                                                accent
                                            ]}"
                                        >
                                            <CheckSmall />
                                        </div>
                                    {:else}
                                        <div class="w-7 h-7 p-1 mr-2">
                                            <XSmall />
                                        </div>
                                    {/if}
                                    <span
                                        class="rounded border px-2 cursor-pointer  {accentOptions[
                                            'none'
                                        ]}"
                                    >
                                        {languageCode}
                                    </span>
                                </label>
                            {/each}
                        </div>
                    </div>
                    <div class="sm:col-span-2 lg:col-span-3">
                        <h3 class="text-2xl mb-2">
                            <Localized key="EMBED_HEADER" />
                        </h3>
                        {#if expanded}
                            <button
                                class="flex flex-row text-blue-800 dark:text-blue-200"
                                on:click={toggleExpand}
                            >
                                <div class="h-5 w-5">
                                    <ChevronUpSmall />
                                </div>
                                <Localized key="EMBED_HIDE" />
                            </button>
                            <pre
                                class="text-left text-xs overflow-auto rounded-lg bg-gray-600 text-gray-200 py-2 px-4"><code>{embedCode}</code></pre>
                        {:else}
                            <button
                                class="flex flex-row text-blue-800 dark:text-blue-200"
                                on:click={toggleExpand}
                            >
                                <div class="h-5 w-5">
                                    <ChevronDownSmall />
                                </div>
                                <Localized key="EMBED_SHOW" />
                            </button>
                        {/if}
                    </div>
                </div>
            </Card>
        </div>
        <Card>
            <Example {accent} />
        </Card>
        <Card theme="dark">
            <Example {accent} />
        </Card>
    </div>
</div>

{#if size === 'small'}<style>
        :root {
            font-size: 12px;
        }
    </style>{/if}
