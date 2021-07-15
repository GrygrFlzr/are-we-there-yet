<script>
	import { createLocalization } from '$lib/Lang';
	import { getContext } from 'svelte';

	const lang = getContext('lang');

	// {\d+}          {0} {1} {2} etc
	// .+?(?={\d+})   other stuff before it
	// .+$            remainder of the string
	const groupRegex = /({\d+}|.+?(?={\d+})|.+$)/g;

	let key = '';
	let fallbackKey = undefined;
	let className = '';
	export { key, fallbackKey, className as class };

	/**
	 * @param {string} text
	 */
	function splitString(text) {
		return Array.from(text.matchAll(groupRegex), (result) => result[0]);
	}

	$: localization = createLocalization($lang);
	$: localize = localization.localize;
	$: text = localize(key, fallbackKey);
	$: pieces = splitString(text);
</script>

<div class={className}>
	{#each pieces as piece (piece)}
		{#if piece === '{0}'}
			<slot name="0" />
		{:else if piece === '{1}'}
			<slot name="1" />
		{:else if piece === '{2}'}
			<slot name="2" />
		{:else}
			{piece}
		{/if}
	{/each}
</div>
{#if false}<slot />{/if}
