<script>
    import ChevronDownSmall from '$components/Icon/ChevronDownSmall.svelte';
    import ChevronUpSmall from '$components/Icon/ChevronUpSmall.svelte';
    import Episode from '$components/Episode.svelte';
    import {
        byEarliestDate,
        latestEpisode,
        notYetReleased,
    } from '$components/utils';
    import Localized from '$components/Lang/Localized.svelte';

    const accentOptions = {
        red: 'rounded-t-none border-t-2 border-red-500 dark:border-red-400',
        yellow:
            'rounded-t-none border-t-2 border-yellow-500 dark:border-yellow-400',
        green:
            'rounded-t-none border-t-2 border-green-500 dark:border-green-400',
        blue: 'rounded-t-none border-t-2 border-blue-500 dark:border-blue-400',
        indigo:
            'rounded-t-none border-t-2 border-indigo-500 dark:border-indigo-400',
        purple:
            'rounded-t-none border-t-2 border-purple-500 dark:border-purple-400',
        pink: 'rounded-t-none border-t-2 border-pink-500 dark:border-pink-400',
        none: 'border-none',
    };

    export let show;
    export let accent = 'green';

    let expanded = false;

    function toggleExpand() {
        if (unfinishedEpisodes.length > 1) {
            expanded = !expanded;
        } else {
            expanded = false;
        }
    }

    $: unfinishedEpisodes = show
        ? show.episodes.filter(notYetReleased).sort(byEarliestDate('air_date'))
        : [];
    $: latest = latestEpisode(show);
    $: moreNumber = Math.min(unfinishedEpisodes.length - 1, 3);
</script>

<div
    class="app-show shadow-md rounded-md overflow-hidden flex flex-row items-start relative bg-white dark:bg-gray-700 {accentOptions[
        accent
    ]}"
>
    <div class="hidden sm:block w-24 mt-3 ml-3 mb-8 relative flex-none">
        <img
            class="z-0 rounded-md"
            src={show.poster}
            alt="Poster for {show.name}"
        />
        <div class="z-10 rounded-md absolute inset-0 shadow-inner" />
        <div class="z-10 rounded-md absolute inset-0 shadow-inner" />
        <div class="z-10 rounded-md absolute inset-0 shadow-inner" />
        <div class="z-10 rounded-md absolute inset-0 shadow-inner" />
        <div class="z-10 rounded-md absolute inset-0 shadow-inner" />
        <div
            class="app-poster-overlay z-20 rounded-md absolute inset-0 bg-black opacity-5 transition-opacity"
        />
    </div>
    <div
        class="text-xs h-full flex-grow px-3 pt-2 py-8 max-w-full flex flex-col"
    >
        <h1 class="font-medium text-base text-gray-800 dark:text-gray-100">
            {show.name}
        </h1>
        {#if show.joint_groups.length > 0}
            <Localized
                key="UNIT_JOINT_WITH"
                class="hidden sm:block mt-1 text-xs italic text-gray-400 dark:text-gray-300"
            >
                <span slot="0">
                    {#each show.joint_groups as group (group.id)}
                        <span>
                            {group.name}
                        </span>
                    {/each}
                </span>
            </Localized>
        {/if}
        {#if expanded}
            <div class="grid grid-cols-2 justify-between">
                {#each unfinishedEpisodes.slice(0, 4) as episode}
                    <Episode
                        {episode}
                        status={show.status}
                        latest={episode.id === latest.id}
                        inList={true}
                    />
                {/each}
            </div>
            <button
                class="flex flex-row mt-2 text-gray-500 hover:text-gray-400 dark:text-gray-200 transition-colors"
                on:click={toggleExpand}
            >
                <div class="h-5 w-5">
                    <ChevronUpSmall />
                </div>
                <Localized key="UNIT_SHOW_LESS" />
            </button>
        {:else}
            <Episode episode={latest} status={show.status} latest={true} />
            {#if unfinishedEpisodes.length > 1}
                <button
                    class="flex flex-row mt-2 text-blue-500 hover:text-blue-400 dark:text-blue-300 transition-colors"
                    on:click={toggleExpand}
                >
                    <div class="h-5 w-5">
                        <ChevronDownSmall />
                    </div>
                    {#if moreNumber === 1}
                        <Localized key="UNIT_SHOW_REMAINDER_SINGULAR">
                            <span slot="1">{moreNumber}</span>
                        </Localized>
                    {:else}
                        <Localized key="UNIT_SHOW_REMAINDER_PLURAL">
                            <span slot="1">{moreNumber}</span>
                        </Localized>
                    {/if}
                </button>
            {/if}
        {/if}
    </div>
</div>

<style>
    .app-show:hover .app-poster-overlay {
        @apply opacity-0;
    }
</style>
