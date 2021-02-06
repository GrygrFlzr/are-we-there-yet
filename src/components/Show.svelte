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
    class="sm:h-28 shadow rounded-b-md rounded-t-none overflow-hidden flex flex-row items-start bg-white relative border-t-2 border-green-500"
>
    <div class="hidden sm:block h-28 w-24 overflow-hidden relative flex-none">
        <img
            class="absolute bottom-0"
            src={show.poster}
            alt="Poster for {show.name}"
        />
    </div>
    <div class="text-xs h-full flex-grow px-3 pt-2 relative py-8">
        <h1 class="text-gray-800 font-medium text-base">
            {show.name}
        </h1>
        {#if show.joint_groups.length > 0}
            <span
                class="hidden sm:block absolute right-3 top-1 text-xs text-gray-400 italic text-right"
            >
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
