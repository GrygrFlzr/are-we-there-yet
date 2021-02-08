<script context="module">
    import { languageNames } from '$components/Lang';

    export async function load({ page }) {
        let theme = 'light';
        let accent = 'green';
        let size = 'normal';
        let lang = 'en';

        const validThemes = ['light', 'dark'];
        const validAccents = [
            'red',
            'yellow',
            'green',
            'blue',
            'indigo',
            'purple',
            'pink',
            'none',
        ];
        const validSizes = ['small', 'normal'];

        if (page.query.has('theme')) {
            const _theme = page.query.get('theme');
            if (validThemes.includes(_theme)) {
                theme = _theme;
            }
        }
        if (page.query.has('accent')) {
            const _accent = page.query.get('accent');
            if (validAccents.includes(_accent)) {
                accent = _accent;
            }
        }
        if (page.query.has('size')) {
            const _size = page.query.get('size');
            if (validSizes.includes(_size)) {
                size = _size;
            }
        }
        if (page.query.has('lang')) {
            const _lang = page.query.get('lang');
            if (languageNames.includes(_lang)) {
                lang = _lang;
            }
        }

        return {
            props: {
                theme,
                accent,
                size,
                lang,
            },
        };
    }
</script>

<script>
    import { session } from '$app/stores';
    import AllDone from '$components/AllDone.svelte';
    import Error from '$components/Error.svelte';
    import Show from '$components/Show.svelte';
    import { byLatestEpisode } from '$components/utils';
    import { onMount, tick, setContext } from 'svelte';
    import { writable } from 'svelte/store';

    export let theme = 'light';
    export let accent = 'green';
    export let size = 'normal';
    export let lang = writable('en');

    setContext('lang', lang);

    let divHeight;

    async function messageParentAboutResize() {
        if (typeof window !== 'undefined') {
            await tick();
            window.parent.postMessage(
                JSON.stringify({
                    action: 'resize',
                    height: document.body.scrollHeight,
                }),
                '*'
            );
        }
    }

    onMount(() => {
        messageParentAboutResize();
    });

    $: incompleteShows = ($session.shows || [])
        .filter((show) => show.progress !== 'Complete')
        .sort(byLatestEpisode);
    $: divHeight, messageParentAboutResize();
</script>

<div
    class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-1 pb-2 sm:px-2 sm:py-2 bg-transparent"
    class:dark={theme === 'dark'}
    bind:clientHeight={divHeight}
>
    {#each incompleteShows as show (show.id)}
        <Show {show} {accent} />
    {:else}
        {#if $session.message}
            <!-- Error -->
            <Error message={$session.message} />
        {:else}
            <!-- No incomplete shows -->
            <AllDone />
        {/if}
    {/each}
</div>

{#if size === 'small'}<style>
        :root {
            font-size: 12px;
        }
    </style>{/if}
