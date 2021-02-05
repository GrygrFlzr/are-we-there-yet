<script>
    import Episode from '$components/Episode.svelte';
    import { latestEpisode } from '$components/utils';

    export let show;
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
        <Episode episode={latestEpisode(show)} status={show.status} />
    </div>
</div>
