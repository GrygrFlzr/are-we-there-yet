<script>
    import { session } from '$app/stores';
    import CheckCircle from '$components/Icon/CheckCircle.svelte';
    import Exclamation from '$components/Icon/Exclamation.svelte';
    import Show from '$components/Show.svelte';
    import { byLatestEpisode } from '$components/utils';
    import { onMount, tick } from 'svelte';

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
    bind:clientWidth={divHeight}
>
    {#each incompleteShows as show (show.id)}
        <Show {show} on:resize{messageParentAboutResize} />
    {:else}
        {#if $session.message}
            <!-- Error -->
            <div
                class="bg-white shadow pt-2 pb-1 px-3 rounded-t-none rounded-b-md flex flex-row border-t-2 border-yellow-500"
            >
                <div class="h-12 w-12 flex-none text-yellow-500">
                    <Exclamation />
                </div>
                <div class="px-3">
                    <h1 class="text-gray-700">Connection error</h1>
                    <h3 class="text-xs text-gray-500">{$session.message}</h3>
                </div>
            </div>
        {:else}
            <!-- No incomplete shows -->
            <div
                class="bg-white shadow pt-2 pb-1 px-3 rounded-t-none rounded-b-md flex flex-row border-t-2 border-green-500"
            >
                <div class="h-12 w-12 flex-none text-green-500">
                    <CheckCircle />
                </div>
                <div class="px-3">
                    <h1 class="text-gray-700">100%</h1>
                    <h3 class="text-xs text-gray-500">
                        All shows are complete!
                    </h3>
                </div>
            </div>
        {/if}
    {/each}
</div>
