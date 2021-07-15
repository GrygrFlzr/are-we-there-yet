<script lang="ts">
	import Localized from '$lib/Lang/Localized.svelte';

	export let theme: 'light' | 'dark' = 'light';
	export let header: string = undefined;
</script>

<div class:dark={theme === 'dark'}>
	<div
		class="
		px-8 pt-4 pb-8 flex flex-col gap-4 shadow-lg rounded-b-lg border-t-2
		transition-colors
		bg-gray-50 dark:bg-gray-800
		border-purple-500 dark:border-red-700
		text-gray-700 dark:text-gray-50
	"
	>
		<h1
			class="
			text-4xl py-2 text-center
			transition-colors
		"
		>
			{#if header}
				{header}
			{:else if theme === 'light'}
				<Localized key="THEME_LIGHT" />
			{:else}
				<Localized key="THEME_DARK" />
			{/if}
		</h1>
		<slot />
	</div>
</div>
