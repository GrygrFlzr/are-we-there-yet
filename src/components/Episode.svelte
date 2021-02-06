<script>
    import InformationCircleSmall from '$components/Icon/InformationCircleSmall.svelte';
    import Position from '$components/Position.svelte';
    import {
        allMarked,
        deduplicateStaff,
        hasAired,
        someMarked,
        timeAgo,
    } from '$components/utils';

    export let episode;
    export let status;
    export let latest = false;
    export let inList = false;

    $: aired = hasAired(episode);
    $: marked = allMarked(episode);
    $: waitingOnRelease = aired && marked;
    $: inProgress = aired && !marked;
    $: noProgress = !someMarked(episode);

    $: uniqueStaff = deduplicateStaff(
        episode.staff.filter((staff) => !staff.finished)
    );
</script>

{#if episode}
    <div
        class="flex text-sm text-gray-800 mt-2 {inList
            ? 'flex-col'
            : 'flex-row'}"
        class:col-start-1={uniqueStaff.length > 4}
        class:col-end-3={uniqueStaff.length > 4}
    >
        <span class="whitespace-nowrap">
            Ep. {episode.number}
            {#if !aired}
                airs
                <time datetime={episode.air_date}>
                    {timeAgo.format(new Date(episode.air_date))}
                </time>
            {:else if waitingOnRelease}
                to be released
            {:else if noProgress}
                aired
                <time datetime={episode.air_date}>
                    {timeAgo.format(new Date(episode.air_date))}
                </time>
                (no progress yet)
            {:else if inProgress}
                {#if inList}
                    is waiting on
                {:else}
                    requires&nbsp;
                {/if}
            {/if}
        </span>
        {#if inProgress && !noProgress}
            <div class="flex gap-1" class:mt-1={inList}>
                {#each uniqueStaff as staff (staff.id)}
                    <Position position={staff.position} />
                {/each}
            </div>
        {/if}
    </div>
    {#if latest}
        <div class="absolute bottom-2 left-3 text-xs text-gray-400">
            <div class="flex flex-row gap-1 text-left">
                {#if status}
                    <!-- Status Tooltip -->
                    <span
                        class="z-10 inline-block h-4 w-4 relative text-blue-400 group"
                    >
                        <InformationCircleSmall />
                        <span
                            class="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity shadow rounded rounded-bl-none absolute bottom-5 w-60 border bg-blue-100 text-blue-800 border-blue-400 px-2 py-2"
                        >
                            {status}
                        </span>
                    </span>
                {/if}
                <span>
                    Updated {timeAgo.format(new Date(episode.updated_at))}
                </span>
            </div>
        </div>
        <div class="absolute bottom-2 right-3 text-xs text-gray-400">
            <div class="flex flex-row text-right">
                <span>{episode.season}</span>
            </div>
        </div>
    {/if}
{/if}
