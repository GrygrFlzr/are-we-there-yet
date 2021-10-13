<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/api');
		const groupOrError = await response.json();

		return {
			props: { groupOrError }
		};
	};
</script>

<script lang="ts">
	import AllDone from '$lib/AllDone.svelte';
	import Error from '$lib/Error.svelte';
	import Show from '$lib/Show.svelte';
	import { byLatestEpisode } from '$lib/utils';
	import { onMount, tick, setContext, getContext } from 'svelte';
	import { Writable, writable } from 'svelte/store';
	import type { GroupOrError, Show as ShowType, AccentColors } from '$lib/utils';

	export let groupOrError: GroupOrError;

	let theme = 'light';
	let accent: AccentColors = 'green';
	let size = 'normal';
	let lang = 'en';

	setContext('lang', writable(lang));
	setContext('groupOrError', writable(groupOrError));

	const langStore = getContext<Writable<string>>('lang');

	let divHeight: number;

	async function messageParentAboutResize(): Promise<void> {
		if (typeof window !== 'undefined') {
			await tick();
			window.parent.postMessage(
				JSON.stringify({
					action: 'resize',
					height: document.body.scrollHeight
				}),
				'*'
			);
		}
	}

	onMount(() => {
		const querystring = location.hash.substr(1);
		const params = new URLSearchParams(querystring);
		if (params.has('theme')) {
			theme = params.get('theme');
		}
		if (params.has('accent')) {
			accent = params.get('accent') as AccentColors;
		}
		if (params.has('size')) {
			size = params.get('size');
		}
		if (params.has('lang')) {
			lang = params.get('lang');
			$langStore = lang;
		}
		messageParentAboutResize();
	});

	let incompleteShows: ShowType[];
	$: incompleteShows =
		'message' in groupOrError
			? []
			: groupOrError.shows.filter((show) => show.progress !== 'Complete').sort(byLatestEpisode);
	// @ts-ignore
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
		{#if 'message' in groupOrError}
			<!-- Error -->
			<Error message={groupOrError.message} />
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
