<script>
    import ChevronDownSmall from '$components/Icon/ChevronDownSmall.svelte';
    import ChevronUpSmall from '$components/Icon/ChevronUpSmall.svelte';
    import Episode from '$components/Episode.svelte';
    import {
        byEarliestDate,
        latestEpisode,
        notYetReleased,
    } from '$components/utils';

    export let show;

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
    class="app-show shadow-md rounded-b-md rounded-t-none overflow-hidden flex flex-row items-start bg-white relative border-t-2 border-green-500"
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
        <h1 class="text-gray-800 font-medium text-base">
            {show.name}
        </h1>
        {#if show.joint_groups.length > 0}
            <span class="hidden sm:block mt-1 text-xs text-gray-400 italic">
                Joint with
                {#each show.joint_groups as group (group.id)}
                    <span>
                        {group.name}
                    </span>
                {/each}
            </span>
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
                class="flex flex-row mt-2 text-gray-500 hover:text-gray-400 transition-colors"
                on:click={toggleExpand}
            >
                <div class="h-5 w-5">
                    <ChevronUpSmall />
                </div>
                Show less
            </button>
        {:else}
            <Episode episode={latest} status={show.status} latest={true} />
            {#if unfinishedEpisodes.length > 1}
                <button
                    class="flex flex-row mt-2 text-blue-500 hover:text-blue-400 transition-colors"
                    on:click={toggleExpand}
                >
                    <div class="h-5 w-5">
                        <ChevronDownSmall />
                    </div>
                    Show {moreNumber} more episode{moreNumber === 1
                        ? ''
                        : 's'}...
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
