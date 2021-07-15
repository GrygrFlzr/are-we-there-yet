<script>
	import CheckCircleSvg from '$lib/Icon/CheckCircle.svg?raw';
	import Localized from '$lib/Lang/Localized.svelte';
</script>

<div
	class="shadow pt-2 pb-1 px-3 rounded-t-none rounded-b-md flex flex-row border-t-2 bg-white border-green-500 dark:bg-gray-700 dark:border-green-200"
>
	<div class="h-12 w-12 flex-none text-green-500 dark:text-green-200">
		{@html CheckCircleSvg}
	</div>
	<div class="px-3">
		<h1 class="font-medium text-gray-700 dark:text-gray-100">100%</h1>
		<h3 class="text-xs text-gray-500 dark:text-gray-300">
			<Localized key="ALL_COMPLETE" />
		</h3>
	</div>
</div>
