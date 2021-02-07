<script>
    import Exclamation from '$components/Icon/Exclamation.svelte';

    export let message;
</script>

<div
    class="shadow pt-2 pb-1 px-3 rounded-t-none rounded-b-md flex flex-row border-t-2 bg-white border-yellow-500 dark:bg-gray-600 dark:border-yellow-200"
>
    <div class="h-12 w-12 flex-none text-yellow-500 dark:text-yellow-200">
        <Exclamation />
    </div>
    <div class="px-3">
        <h1 class="font-medium text-gray-700 dark:text-gray-100">
            Connection error
        </h1>
        <h3 class="text-xs text-gray-500 dark:text-gray-300">{message}</h3>
    </div>
</div>
