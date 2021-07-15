<script context="module" lang="ts">
	import { languageNames } from '$lib/Lang';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		let theme = 'light';
		let accent = 'green';
		let size = 'normal';
		let lang = 'en';

		const validThemes = ['light', 'dark'];
		const validAccents = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'none'];
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
				lang
			}
		};
	};
</script>

<script lang="ts">
	import { getStores } from '$app/stores';
	import AllDone from '$lib/AllDone.svelte';
	import Error from '$lib/Error.svelte';
	import Show from '$lib/Show.svelte';
	import { byLatestEpisode } from '$lib/utils';
	import { onMount, tick, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { GroupOrError, Show as ShowType, AccentColors } from '$lib/utils';

	const { session } = getStores<GroupOrError>();

	export let theme = 'light';
	export let accent: AccentColors = 'green';
	export let size = 'normal';
	export let lang = 'en';

	setContext('lang', writable(lang));

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
		messageParentAboutResize();
	});

	let incompleteShows: ShowType[];
	$: incompleteShows =
		'message' in $session
			? []
			: $session.shows.filter((show) => show.progress !== 'Complete').sort(byLatestEpisode);
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
		{#if 'message' in $session}
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
