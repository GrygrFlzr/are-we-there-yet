<script>
    import InformationCircleSmall from '$components/Icon/InformationCircleSmall.svelte';
    import Position from '$components/Position.svelte';
    import {
        allMarked,
        deduplicateStaff,
        hasAired,
        someMarked,
    } from '$components/utils';
    import { createLocalization } from '$components/Lang';
    import Localized from '$components/Lang/Localized.svelte';
    import { getContext } from 'svelte';

    const lang = getContext('lang');

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
    $: shouldWrap = inList || uniqueStaff.length > 5;
    $: timeAgo = createLocalization($lang).timeAgo;
</script>

{#key $lang}
    {#if episode}
        <div
            class="text-gray-800 dark:text-gray-200 flex text-sm  mt-2 {shouldWrap
                ? 'flex-col'
                : 'flex-row'}"
            class:col-start-1={uniqueStaff.length > 4}
            class:col-end-3={uniqueStaff.length > 4}
        >
            {#if !aired}
                <Localized key="SUBUNIT_NOT_PUBLISHED">
                    <span slot="0">{episode.number}</span>
                    <time slot="1" datetime={episode.air_date}>
                        {timeAgo.format(new Date(episode.air_date))}
                    </time>
                </Localized>
            {:else if waitingOnRelease}
                <Localized key="SUBUNIT_TO_RELEASE">
                    <span slot="0">{episode.number}</span>
                </Localized>
            {:else if noProgress}
                <Localized key="SUBUNIT_WAS_PUBLISHED">
                    <span slot="0">{episode.number}</span>
                    <time slot="1" datetime={episode.air_date}>
                        {timeAgo.format(new Date(episode.air_date))}
                    </time>
                </Localized>
                <Localized key="SUBUNIT_NO_PROGRESS" />
            {:else if inProgress}
                <Localized key="SUBUNIT_IN_PROGRESS">
                    <span slot="0">{episode.number}</span>
                    <div slot="2" class="flex gap-1 mt-1">
                        {#each uniqueStaff as staff (staff.id)}
                            <Position position={staff.position} />
                        {/each}
                    </div>
                </Localized>
            {/if}
        </div>
        {#if latest}
            <div
                class="absolute bottom-2 left-3 text-xs text-gray-400 dark:text-gray-300"
            >
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
                        <Localized key="UNIT_UPDATED">
                            <time slot="2" datetime={episode.updated_at}>
                                {timeAgo.format(new Date(episode.updated_at))}
                            </time>
                        </Localized>
                    </span>
                </div>
            </div>
            <div
                class="absolute bottom-2 right-3 text-xs text-gray-400 dark:text-gray-300"
            >
                <div class="flex flex-row text-right">
                    <span>{episode.season}</span>
                </div>
            </div>
        {/if}
    {/if}
{/key}
